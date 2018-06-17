import pluralize from "pluralize";

export default class QueryObject {
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
    const { attributes } =
      resources[resourceName] && resources[resourceName][id];
    return _convertToModel(
      klass,
      resources,
      { id, ...attributes },
      hasMany,
      belongsTo
    );
  }

  first() {
    const { resources, resourceName } = this;
    const _resources = resources[resourceName];
    return _resources && _resources[Object.keys(_resources)[0]];
  }

  all() {
    return this;
  }

  where(params) {
    this._filterAndSetCurrentResourcesByParams(params);
    return this;
  }

  whereRelated(relationship, params) {
    const { resourceName } = this;

    this.currentResources = relationship
      .query(this.resources)
      .where(params)
      .includes([resourceName])
      .toObjects()
      .reduce((newResource, relatedResource) => {
        const relation = relatedResource[resourceName];
        relation.forEach(({ type, id, ...attributes }) => {
          newResource[id] = { type, id, attributes };
        });
        return newResource;
      }, {});
    return this;
  }

  includes(relationshipTypes) {
    this.currentIncludes = relationshipTypes;
    return this;
  }

  toModels() {
    return this._reduceCurrentResources("models");
  }

  toObjects() {
    return this._reduceCurrentResources("objects");
  }

  // Private

  _reduceCurrentResources(reducerType) {
    // TODO: needs to be refactored
    const conversion = reducerType === "models"
      ? this._convertToModel
      : this._convertToObject;
    const {
      currentIncludes,
      currentResources,
      resources,
      _flattenRelationships,
      hasMany,
      belongsTo
    } = this;

    return Object.values(
      currentResources
    ).map(({ id, attributes, relationships, types, links }) => {
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
          ..._flattenRelationships(
            relationships
          ).reduce((nextRelationshipObjects, { id, type }) => {
            if (!currentIncludes.includes(type)) return nextRelationshipObjects;
            if (!(type in nextRelationshipObjects)) {
              nextRelationshipObjects[type] = [];
            }

            if (!resources[type]) return nextRelationshipObjects;
            const relationData = resources[type][id];
            if (!relationData) return nextRelationshipObjects;
            const relationClass = this.hasMany.find(klass => {
              return pluralize(klass.name.toLowerCase()) === type;
            });

            nextRelationshipObjects[type].push(
              conversion(relationClass, resources, {
                id,
                ...relationData.attributes
              })
            );

            return nextRelationshipObjects;
          }, {})
        },
        hasMany,
        belongsTo
      );
    });
  }

  _convertToModel(klass, resources, resource, hasMany, belongsTo) {
    return new klass(resources, resource, hasMany, belongsTo);
  }

  _convertToObject(klass, resources, resource, hasMany, belongsTo) {
    return resource;
  }

  _flattenRelationships(relationships) {
    return Object.values(
      relationships
    ).reduce((nextRelationships, { data }) => {
      return [...nextRelationships, ...data];
    }, []);
  }

  _setCurrentResources() {
    if (this._isEmpty(this.currentResources) && this.resources) {
      this.currentResources = this.resources[this.resourceName];
    }
  }

  _filterAndSetCurrentResourcesByParams(params) {
    const resourcesByID = Object.entries(
      this.currentResources
    ).reduce((newResource, [id, resource]) => {
      this._filterResourceByParams(params, newResource, resource, id);
      return newResource;
    }, {});
    this.currentResources = resourcesByID;
  }

  _filterResourceByParams(params, newResource, resource, id) {
    Object.entries(params).forEach(([key, value]) => {
      if (key === "id" && resource.id === value) {
        newResource[id] = resource;
      } else if (resource.attributes[key] === value) {
        newResource[id] = resource;
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
