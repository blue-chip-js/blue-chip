'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var jsonApiNormalize = _interopDefault(require('json-api-normalizer'));
var graphqlNormalizr = require('graphql-normalizr');
var pluralize = _interopDefault(require('pluralize'));

const isGraphQl = payload => {
  return (
    payload["data"] && payload["data"][0] && "__typename" in payload["data"][0]
  );
};

const toJsonApiSpec = (resourceType, resourcesById) => {
  return Object.entries(resourcesById).reduce(
    (formattedResourcesById, [id, resource]) => {
      formattedResourcesById[id] = {
        type: resourceType,
        id,
        attributes: _removeRelationships(resource),
        links: null,
        relationships: _buildRelationships(resource)
      };

      return formattedResourcesById;
    },
    {}
  );
};

const _buildRelationships = resource => {
  return Object.entries(resource).reduce((newObject, [key, value]) => {
    if (value && Array.isArray(value)) {
      if (!newObject[key]) {
        newObject[key] = {data: []};
      }

      newObject[key].data = value.map(id => ({type: key, id}));
    }
    return newObject;
  }, {});
};

const _removeRelationships = resource => {
  return Object.entries(resource).reduce((newObject, [key, value]) => {
    if (
      !(value && Array.isArray(value)) ||
      !(value && typeof value === "object")
    ) {
      newObject[key] = value;
    }
    return newObject;
  }, {});
};

const graphQLNormalizr = new graphqlNormalizr.GraphQLNormalizr();
const graphQlNormalize = graphQLNormalizr.normalize;

class Actions {
  static config({adapter, mutator}) {
    return new Actions(adapter, mutator);
  }

  constructor(adapter, mutator) {
    this.actions = adapter.actions;
    this.mutator = mutator;
  }

  updateResources(payload) {
    // Create insert order index
    let index = isGraphQl(payload)
      ? _createIndexForGraphQl(payload)
      : _createIndexForJsonApi(payload);

    Object.entries(
      isGraphQl(payload) ? graphQlNormalize(payload) : jsonApiNormalize(payload)
    ).forEach(([resourceType, resourcesById]) => {
      const rById = isGraphQl(payload)
        ? toJsonApiSpec(resourceType, resourcesById)
        : resourcesById;

      this.actions.updateResources(this.mutator, resourceType, rById, index);
    });
  }

  updateResource(resource) {
    this.actions.updateResource(this.mutator, resource);
  }

  removeResources(resources) {
    this.actions.removeResources(this.mutator, resources);
  }

  removeResource(resource) {
    this.actions.removeResource(this.mutator, resource);
  }

  clearResources(resourceTypes) {
    this.actions.clearResources(this.mutator, resourceTypes);
  }
}

function _createIndexForJsonApi(payload) {
  let index = [];
  if (payload.data) {
    const data = Array.isArray(payload.data) ? payload.data : [payload.data];
    index = data.map(item => item.id);
  }
  return index;
}

function _createIndexForGraphQl(payload) {
  return [];
}

class Query {
  constructor(klass, resourceName, resources, hasMany = [], belongsTo = []) {
    this.klass = klass;
    this.resourceName = resourceName;
    this.resources = resources;
    this.currentIncludes = [];
    this.currentResources = {};
    this.hasMany = hasMany;
    this.belongsTo = belongsTo;
    this._setCurrentResources();
  }

  find(id) {
    const {
      resources,
      resourceName,
      klass,
      _convertToModel,
      hasMany,
      belongsTo
    } = this;
    const {attributes} = resources[resourceName] && resources[resourceName][id];
    return _convertToModel(
      klass,
      resources,
      {id, ...attributes},
      hasMany,
      belongsTo
    );
  }

  first() {
    const {resources, resourceName} = this;
    const _resources = resources[resourceName];
    const _index = resources.index[resourceName];
    return _resources && _index && _resources[_index[0]];
  }

  last() {
    const {resources, resourceName} = this;
    const _resources = resources[resourceName];
    const _index = resources.index[resourceName];
    return _resources && _index && _resources[_index[_index.length - 1]];
  }

  all() {
    return this;
  }

  where(params) {
    this._filterAndSetCurrentResourcesByParams(params);
    return this;
  }

  whereRelated(relationship, params) {
    const {resourceName} = this;
    this.hasMany.includes(relationship)
      ? this._handleHasManyWhereRelated(relationship, params, resourceName)
      : this._handleBelongsToWhereRelated(relationship, params, resourceName);
    return this;
  }

  _handleBelongsToWhereRelated(relationship, params, resourceName) {
    const relationshipName = relationship.singularName();

    const relationIds = this.klass
      .query(this.resources)
      .includes([relationshipName])
      .toModels()
      .reduce((idArray, model) => {
        const maybeRelation = model[relationshipName];
        const relation = this._isFunction(relation)
          ? maybeRelation()
          : maybeRelation;

        if (relation && relation.id && !idArray.includes(relation.id))
          idArray.push(relation.id);
        return idArray;
      }, []);

    const filteredRelationIds = relationship
      .query(this.resources)
      .includes([resourceName])
      .where({id: relationIds})
      .where(params)
      .toObjects()
      .map(r => r.id);

    this.currentResources = Object.entries(this.currentResources).reduce(
      (newResources, [id, resource]) => {
        const r = resource.relationships[relationshipName];
        if (r && filteredRelationIds.includes(r.data.id)) {
          newResources[id] = resource;
        }
        return newResources;
      },
      {}
    );
  }

  _handleHasManyWhereRelated(relationship, params, resourceName) {
    this.currentResources = relationship
      .query(this.resources)
      .where(params)
      .includes([resourceName])
      .toObjects()
      .reduce((newResource, relatedResource) => {
        const relation = relatedResource[resourceName] || [
          relatedResource[this.klass.singularName()]
        ];
        relation.forEach(({type, id, ...attributes}) => {
          newResource[id] = {type, id, attributes};
        });
        return newResource;
      }, {});
  }

  includes(relationshipTypes) {
    this.currentIncludes = relationshipTypes;
    return this;
  }

  toModels() {
    if (!this.currentResources) return [];
    return this._reduceCurrentResources("models");
  }

  toObjects() {
    if (!this.currentResources) return [];
    return this._reduceCurrentResources("objects");
  }

  // Private

  _sortByIndex(resource1, resource2, resources, resourceName) {
    const index = resources.index[resourceName];
    return index.indexOf(resource1.id) - index.indexOf(resource2.id);
  }

  _reduceCurrentResources(reducerType) {
    // TODO: needs to be refactored
    const conversion =
      reducerType === "models" ? this._convertToModel : this._convertToObject;
    const {
      currentIncludes,
      currentResources,
      resources,
      resourceName,
      _flattenRelationships,
      hasMany,
      belongsTo
    } = this;

    return Object.values(currentResources)
      .sort((resource1, resource2) =>
        this._sortByIndex(resource1, resource2, resources, resourceName)
      )
      .map(({id, attributes, relationships, types, links}) => {
        const newFormattedResource = conversion(
          this.klass,
          resources,
          {
            id,
            ...attributes
          },
          hasMany,
          belongsTo
        );

        if (!currentIncludes.length) return newFormattedResource;
        return conversion(
          this.klass,
          resources,
          {
            ...newFormattedResource,
            ..._flattenRelationships(relationships).reduce(
              (nextRelationshipObjects, {id, name, type}) => {
                let relationClass = this.hasMany.find(klass => {
                  return klass.pluralName() === type;
                });

                if (relationClass) {
                  return this._handleHasManyIncludes(
                    resources,
                    id,
                    type,
                    nextRelationshipObjects,
                    conversion,
                    relationClass,
                    currentIncludes,
                    name
                  );
                }

                relationClass = this.belongsTo.find(klass => {
                  return klass.pluralName() === type;
                });

                if (relationClass) {
                  return this._handleBelongsToIncludes(
                    resources,
                    id,
                    type,
                    nextRelationshipObjects,
                    conversion,
                    relationClass,
                    currentIncludes,
                    name
                  );
                }

                return nextRelationshipObjects;
              },
              {}
            )
          },
          hasMany,
          belongsTo
        );
      });
  }

  _handleHasManyIncludes(
    resources,
    id,
    type,
    nextRelationshipObjects,
    conversion,
    relationClass,
    currentIncludes,
    name
  ) {
    const singularType = relationClass.singularName();
    if (!currentIncludes.includes(name))
      return nextRelationshipObjects;

    if (!(name in nextRelationshipObjects)) {
      nextRelationshipObjects[name] = [];
    }

    if (!resources[type]) return nextRelationshipObjects;
    const relationData = resources[type][id];
    if (!relationData) return nextRelationshipObjects;

    if (relationClass) {
      nextRelationshipObjects[name].push(
        conversion(relationClass, resources, {
          id,
          ...relationData.attributes
        })
      );
    }

    return nextRelationshipObjects;
  }

  _handleBelongsToIncludes(
    resources,
    id,
    type,
    nextRelationshipObjects,
    conversion,
    relationClass,
    currentIncludes,
    name
  ) {
    const singularType = relationClass.singularName();
    if (
      !currentIncludes.includes(name)
    )
      return nextRelationshipObjects;

    if (!(name in nextRelationshipObjects)) {
      nextRelationshipObjects[name] = null;
    }

    if (!resources[type]) return nextRelationshipObjects;
    const relationData = resources[type][id];
    if (!relationData) return nextRelationshipObjects;

    if (relationClass) {
      nextRelationshipObjects[name] = conversion(
        relationClass,
        resources,
        {
          id,
          ...relationData.attributes
        }
      );
    }

    return nextRelationshipObjects;
  }

  _convertToModel(klass, resources, resource, hasMany, belongsTo) {
    return new klass(resources, resource, hasMany, belongsTo);
  }

  _convertToObject(klass, resources, resource, hasMany, belongsTo) {
    return resource;
  }

  _flattenRelationships(relationships) {
    if (!relationships) {
      return [];
    }
    
    return Object.entries(relationships).reduce((nextRelationships, [name, relationshipItem]) => {
      if (!nextRelationships || !relationshipItem || !relationshipItem.data) {
        return nextRelationships;
      }

      if (Array.isArray(relationshipItem.data)) {
        const dataArray = relationshipItem.data.map((item) => ({...item, name}));
        return [...nextRelationships, ...dataArray];
      }

      return [...nextRelationships, {...relationshipItem.data, name}];
    }, []);
  }

  _setCurrentResources() {
    if (this._isEmpty(this.currentResources) && this.resources) {
      this.currentResources = this.resources[this.resourceName];
    }
  }

  _filterAndSetCurrentResourcesByParams(params) {
    if (!this.currentResources) return;
    const resourcesByID = Object.entries(this.currentResources).reduce(
      (newResource, [id, resource]) => {
        this._filterResourceByParams(params, newResource, resource, id);
        return newResource;
      },
      {}
    );
    this.currentResources = resourcesByID;
  }

  _filterResourceByParams(params, newResource, resource, id) {
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        if (key === "id" && value.includes(resource.id)) {
          newResource[id] = resource;
        } else if (value.includes(resource.attributes[key])) {
          newResource[id] = resource;
        }
      } else {
        if (key === "id" && resource.id === value) {
          newResource[id] = resource;
        } else if (resource.attributes[key] === value) {
          newResource[id] = resource;
        }
      }
    });
  }

  _isEmpty(obj) {
    if (
      obj === null ||
      obj === undefined ||
      Array.isArray(obj) ||
      typeof obj !== "object"
    ) {
      return true;
    }
    return Object.getOwnPropertyNames(obj).length === 0 ? true : false;
  }

  _isFunction(functionToCheck) {
    return (
      functionToCheck &&
      {}.toString.call(functionToCheck) === "[object Function]"
    );
  }
}

const lowerCaseFirst = string => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

class BaseModel {
  static query(resources) {
    return new Query(
      this,
      this.pluralName(),
      resources,
      this.hasMany,
      this.belongsTo
    );
  }

  static pluralName() {
    return this.plural ? this.plural : lowerCaseFirst(pluralize(this.name));
  }

  static singularName() {
    return this.singular
      ? this.singular
      : lowerCaseFirst(pluralize(this.name, 1));
  }

  constructor(resources, attributes, hasMany = [], belongsTo = []) {
    Object.entries(attributes).forEach(([key, value]) => {
      this[key] = value;
    });

    if (hasMany.forEach) {
      hasMany.forEach(relationship =>
        this._buildHasManyQuery(this, resources, relationship)
      );
    }

    if (belongsTo.forEach) {
      belongsTo.forEach(relationship => {
        const relationshipKey = relationship.singularName();
        if (!this[relationshipKey]) {
          this[relationshipKey] = () => {
            const ParentClass = relationship;
            const ChildClass = this.constructor;

            ParentClass.query(resources)
              .whereRelated(ChildClass, {
                id: this.id
              })
              .toModels()[0];
          };
        }
      });
    }
  }

  _filterResources(resource, resources, relationship, relationshipKey) {
    const currentResourceKey = resource.constructor.pluralName();

    const resourceClass = resource.constructor;
    const relationshipClass = relationship;
    return {
      ...resources,
      [currentResourceKey]: resources[currentResourceKey][resource.id],
      [relationshipKey]: relationshipClass
        .query(resources)
        .whereRelated(resourceClass, {
          id: resource.id
        }).currentResources
    };
  }

  _buildHasManyQuery(resource, resources, relationship) {
    const relationshipKey = relationship.pluralName();
    if (!resource[relationshipKey]) {
      resource[relationshipKey] = () => {
        const newResouces = resource._filterResources(
          resource,
          resources,
          relationship,
          relationshipKey
        );

        return new Query(
          relationship,
          relationshipKey,
          newResouces,
          relationship.hasMany,
          relationship.belongsTo
        );
      };
    }
  }
}

exports.Actions = Actions;
exports.BaseModel = BaseModel;
