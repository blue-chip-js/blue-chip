import jsonApiNormalize from "json-api-normalizer";
import {GraphQLNormalizr} from "graphql-normalizr";

const graphQLNormalizr = new GraphQLNormalizr();
const graphQlNormalize = graphQLNormalizr.normalize;

import {isGraphQl, toJsonApiSpec, GraphQL} from "./helpers";

export default class Actions {
  static config({adapter, mutator}) {
    return new Actions(adapter, mutator);
  }

  constructor(adapter, mutator) {
    this.actions = adapter.actions;
    this.mutator = mutator;
  }

  updateResources(payload) {
    Object.entries(
      isGraphQl(payload) ? graphQlNormalize(payload) : jsonApiNormalize(payload)
    ).forEach(([resourceType, resourcesById]) => {
      const rById = isGraphQl(payload)
        ? this._addIndex(
            toJsonApiSpec(resourceType, resourcesById),
            payload,
            "GraphQL"
          )
        : this._addIndex(resourcesById, payload, "JsonApi");

      this.actions.updateResources(this.mutator, resourceType, rById);
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

  _addIndex(resourcesById, payload, type) {
    return Object.entries(
      resourcesById
    ).reduce((indexedResourcesById, [id, resource]) => {
      const __index = payload.data.findIndex(rsource => {
        return rsource.id.toString() === id.toString();
      });
      if (__index === -1) console.log(__index, type, resource);
      indexedResourcesById[id] = {...resource, __index};
      return indexedResourcesById;
    }, {});
  }
}
