import {isFunction} from "./utils";
import handleConversion from "./handleConversion";
var get = require("lodash.get");
export default class Query {
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

    const relationships =
      Object.values(this.currentResources)[0] &&
      Object.values(this.currentResources)[0].relationships;

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
        const r = get(resource, `relationships[${relationshipName}]`);
        if (r && r.data && filteredRelationIds.includes(r.data.id)) {
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
