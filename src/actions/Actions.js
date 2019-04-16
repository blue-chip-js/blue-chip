import jsonApiNormalize from "json-api-normalizer";
import {GraphQLNormalizr} from "graphql-normalizr";

const graphQLNormalizr = new GraphQLNormalizr();
const graphQlNormalize = graphQLNormalizr.normalize;

import {isGraphQl, toJsonApiSpec, camelizeKeys} from "./helpers";

export default class Actions {
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
    this.actions.updateResource(this.mutator, camelizeKeys(resource));
  }

  removeResources(resources) {
    this.actions.removeResources(this.mutator, camelizeKeys(resources));
  }

  removeResource(resource) {
    this.actions.removeResource(this.mutator, camelizeKeys(resource));
  }

  clearResources(resourceTypes) {
    this.actions.clearResources(this.mutator, camelizeKeys(resourceTypes));
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
