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

    const resourcesByType = {};

    Object.entries(
      isGraphQl(payload) ? graphQlNormalize(payload) : jsonApiNormalize(payload)
    ).forEach(([resourceType, resourcesById]) => {
      const rById = isGraphQl(payload)
        ? toJsonApiSpec(resourceType, resourcesById)
        : resourcesById;

      resourcesByType[resourceType] = resourcesById;
    });
    this.actions.updateResources(this.mutator, resourcesByType, index);
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

const lowerCaseFirst = string => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

function isFunction(functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === "[object Function]"
  );
}

var get = require("lodash.get");

function handleConversion(query, conversionType) {
  if (!query.currentResources) return [];
  return _reduceCurrentResources(query, conversionType);
}

function _reduceCurrentResources(query, reducerType) {
  const conversion =
    reducerType === "models" ? _convertToModel : _convertToObject;
  const {currentResources, resources, resourceName} = query;
  return Object.values(currentResources)
    .sort((resource1, resource2) =>
      _sortByIndex(resource1, resource2, resources, resourceName)
    )
    .map(({id, attributes, relationships, _types, _links}) =>
      _convertResource({
        id,
        attributes,
        relationships,
        conversion,
        query
      })
    );
}

function _convertResource({id, attributes, relationships, conversion, query}) {
  const {klass, currentIncludes, resources, hasMany, belongsTo} = query;

  const newFormattedResource = conversion(
    klass,
    resources,
    {
      id,
      ...attributes
    },
    hasMany,
    belongsTo
  );

  if (!currentIncludes.length) return newFormattedResource;

  return _handleResourceConversionWithIncludedRelations({
    newFormattedResource,
    conversion,
    query,
    resources,
    relationships
  });
}

function _handleResourceConversionWithIncludedRelations({
  newFormattedResource,
  conversion,
  query,
  relationships
}) {
  const {klass, resources, hasMany, belongsTo} = query;
  return conversion(
    klass,
    resources,
    {
      ...newFormattedResource,
      ..._flattenRelationships(relationships).reduce(
        (nextRelationshipObjects, {id, name, type}) =>
          _buildRelationships$1(query, conversion, nextRelationshipObjects, {
            id,
            name,
            type
          }),
        {}
      )
    },
    hasMany,
    belongsTo
  );
}

function _buildRelationships$1(
  query,
  conversion,
  nextRelationshipObjects,
  {id, name, type}
) {
  const {klass, currentIncludes, resources, hasMany, belongsTo} = query;
  const handleRelationArgs = {
    resources,
    id,
    type,
    nextRelationshipObjects,
    conversion,
    currentIncludes,
    name
  };

  // for the case when the relation class is hasMany
  let relationClass = hasMany.find(klass => {
    return klass.pluralName() === type;
  });
  if (relationClass) {
    _setRelationShipKeyToValues({
      ...handleRelationArgs,
      relationType: "hasMany",
      relationClass
    });
  }

  // for the case when the relation class is belongsTo
  relationClass = belongsTo.find(klass => {
    return klass.pluralName() === type;
  });
  if (relationClass) {
    _setRelationShipKeyToValues({
      ...handleRelationArgs,
      relationType: "belongsTo",
      relationClass
    });
  }

  return nextRelationshipObjects;
}

function _setRelationShipKeyToValues({
  relationType,
  resources,
  id,
  type,
  nextRelationshipObjects,
  conversion,
  relationClass,
  currentIncludes,
  name
}) {
  const directIncludesRalationships = currentIncludes.map(
    relation => relation.split(".")[0]
  );
  if (!directIncludesRalationships.includes(name))
    return nextRelationshipObjects;
  if (!(name in nextRelationshipObjects)) {
    if (relationType === "hasMany") {
      nextRelationshipObjects[name] = [];
    } else if (relationType === "belongsTo") {
      nextRelationshipObjects[name] = null;
    }
  }
  if (!resources[type]) return nextRelationshipObjects;
  const relationData = resources[type][id];
  if (!relationData) return nextRelationshipObjects;

  if (relationClass) {
    const [relationModel, nestedResourceData] = _buildRelationModel(
      resources,
      currentIncludes,
      relationClass,
      id,
      type,
      name,
      relationData
    );

    nestedResourceData.forEach(
      ([nestedResourceName, nestedResourceType, nestedResourceIds]) => {
        const nestedResources = _convertWithNestedResources(
          conversion,
          relationClass,
          resources,
          id,
          relationData,
          relationModel,
          nestedResourceName,
          nestedResourceType,
          nestedResourceIds
        );

        if (relationType === "hasMany") {
          const objIndex = nextRelationshipObjects[name].findIndex(
            obj => obj.id == nestedResources.id
          );
          if (objIndex < 0) {
            nextRelationshipObjects[name].push(nestedResources);
          } else {
            const objIndex = nextRelationshipObjects[name].findIndex(
              obj => obj.id == nestedResources.id
            );
            nextRelationshipObjects[name][objIndex] = {
              ...nextRelationshipObjects[name][objIndex],
              ...nestedResources
            };
          }
        } else if (relationType === "belongsTo") {
          nextRelationshipObjects[name] = conversion(relationClass, resources, {
            ...nextRelationshipObjects[name],
            ...nestedResources
          });
        }
      }
    );
  }
  return nextRelationshipObjects;
}

function _convertWithNestedResources(
  conversion,
  relationClass,
  resources,
  id,
  relationData,
  relationModel,
  nestedResourceName,
  nestedResourceType,
  nestedResourceIds
) {
  const query =
    relationModel &&
    relationModel[nestedResourceType] &&
    relationModel[nestedResourceType]();

  const model =
    relationModel &&
    relationModel[nestedResourceName] &&
    relationModel[nestedResourceName]();

  let nestedResponse;
  if (query && query.toObjects) {
    nestedResponse = query.klass
      .query(resources)
      .where({id: nestedResourceIds})
      .toObjects();
  } else if (model && model.toObject) {
    nestedResponse = model.toObject();
  }

  return conversion(relationClass, resources, {
    id,
    ...relationData.attributes,
    ...(nestedResponse && {
      [nestedResourceName]: nestedResponse
    })
  });
}

function _buildRelationModel(
  resources,
  currentIncludes,
  relationClass,
  id,
  type,
  name,
  relationData
) {
  let relationModel, nestedResourceType, nestedResourceIds, nestedResourceNames;

  nestedResourceNames = [];
  currentIncludes
    .filter(
      relation =>
        relation.split(".")[0] == type || relation.split(".")[0] == name
    )
    .forEach(includesName => {
      const splitName = includesName.split(".")[1];
      if (splitName && splitName.includes("[")) {
        const nestedNames = splitName
          .replace(/[\[\]']+/g, "")
          .split(",")
          .map(rn => rn.trim());
        nestedResourceNames = nestedResourceNames.concat(nestedNames);
      } else {
        // Yes, even push undefined
        nestedResourceNames.push(splitName);
      }
    });

  const nestedResourceData = nestedResourceNames.map(nestedResourceName => {
    nestedResourceType = null;
    nestedResourceIds = null;
    if (nestedResourceName) {
      // sets the nested class if it is a has many relationship
      let nestedClass = relationClass.belongsTo.filter(
        klass => nestedResourceName === klass.singularName()
      )[0];

      // handles the belongsTo cases
      if (nestedClass) {
        const belongsToData = get(
          resources,
          `${relationClass.pluralName()}.${id}.relationships.${nestedResourceName}.data`
        );
        if (belongsToData) {
          nestedResourceType = belongsToData.type;
          nestedResourceIds = [belongsToData.id];
        }
      } else {
        // handles the hasMany cases
        const nestedClassDataArray =
          relationClass.hasMany &&
          relationClass.hasMany.reduce((nestedClassData, klass) => {
            let nestedRelationshipData = get(
              resources,
              `${relationClass.pluralName()}.${id}.relationships.${nestedResourceName}.data`
            );
            if (!nestedRelationshipData) {
              nestedRelationshipData = [];
            }

            nestedResourceType = get(nestedRelationshipData, "[0].type");
            if (nestedResourceType === klass.pluralName()) {
              nestedResourceIds = nestedRelationshipData.reduce((ids, {id}) => {
                ids.push(id);
                return ids;
              }, []);

              nestedClassData.push([
                klass,
                nestedResourceType,
                nestedResourceIds
              ]);
            }

            return nestedClassData;
          }, []);

        if (nestedClassDataArray && nestedClassDataArray.length) {
          [
            nestedClass,
            nestedResourceType,
            nestedResourceIds
          ] = nestedClassDataArray[0];
        }
      }

      if (nestedClass) {
        relationModel = _convertToModel(
          relationClass,
          resources,
          {
            id,
            ...relationData.attributes
          },
          relationClass.hasMany,
          relationClass.belongsTo
        );
      }
    }
    return [nestedResourceName, nestedResourceType, nestedResourceIds];
  });

  return [relationModel, nestedResourceData];
}

function _flattenRelationships(relationships) {
  if (!relationships) {
    return [];
  }

  return Object.entries(relationships).reduce(
    (nextRelationships, [name, relationshipItem]) => {
      if (!nextRelationships || !relationshipItem || !relationshipItem.data) {
        return nextRelationships;
      }

      if (Array.isArray(relationshipItem.data)) {
        const dataArray = relationshipItem.data.map(item => ({
          ...item,
          name
        }));
        return [...nextRelationships, ...dataArray];
      }

      return [...nextRelationships, {...relationshipItem.data, name}];
    },
    []
  );
}

function _convertToModel(klass, resources, resource, hasMany, belongsTo) {
  return new klass(resources, resource, hasMany, belongsTo);
}

function _convertToObject(klass, resources, resource, hasMany, belongsTo) {
  return resource;
}

function _sortByIndex(resource1, resource2, resources, resourceName) {
  const index = resources.index[resourceName];
  return index.indexOf(resource1.id) - index.indexOf(resource2.id);
}

var get$1 = require("lodash.get");
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

    if (!(resources[resourceName] && resources[resourceName][id])) return;

    const {attributes} = resources[resourceName][id];
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
    const relationships = Object.values(this.currentResources)[0].relationships;

    relationships && relationships[relationship.singularName()]
      ? this._handleBelongsToWhereRelated(relationship, params, resourceName)
      : this._handleHasManyWhereRelated(relationship, params, resourceName);
    return this;
  }

  includes(relationshipTypes) {
    this.currentIncludes = relationshipTypes;
    return this;
  }

  toModels() {
    return handleConversion(this, "models");
  }

  toObjects() {
    return handleConversion(this, "objects");
  }

  // Private

  _handleBelongsToWhereRelated(relationship, params, resourceName) {
    const relationshipName = relationship.singularName();

    const relationIds = this.klass
      .query(this.resources)
      .includes([relationshipName])
      .toModels()
      .reduce((idArray, model) => {
        const maybeRelation = model[relationshipName];
        const relation = isFunction(relation) ? maybeRelation() : maybeRelation;

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
        const r = get$1(resource, `relationships[${relationshipName}]`);
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
        const relation =
          relatedResource[resourceName] ||
          [relatedResource[this.klass.singularName()]].filter(Boolean);
        relation.forEach(({type, id, ...attributes}) => {
          newResource[id] = {type, id, attributes};
        });
        return newResource;
      }, {});
  }

  _convertToModel(klass, resources, resource, hasMany, belongsTo) {
    return new klass(resources, resource, hasMany, belongsTo);
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
}

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
            const ParentClass = this.constructor;
            const ChildClass = relationship;

            let childId;
            try {
              childId =
                resources[ParentClass.pluralName()][this.id].relationships[
                  ChildClass.singularName()
                ].data.id;
            } catch (e) {}

            return ChildClass.query(resources).find(childId);
          };
        }
      });
    }
  }

  toObject() {
    return Object.getOwnPropertyNames(this).reduce((obj, prop) => {
      if (!isFunction(this[prop])) {
        obj[prop] = this[prop];
      }
      return obj;
    }, {});
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
