import jsonApiNormalize from "json-api-normalizer";
import {GraphQLNormalizr} from "graphql-normalizr";

const graphQLNormalizr = new GraphQLNormalizr();
const graphQlNormalize = graphQLNormalizr.normalize;

import {isGraphQl, toJsonApiSpec} from "./helpers";

export default class Actions {
  static config({adapter, mutator}) {
    return new Actions(adapter, mutator);
  }

  constructor(adapter, mutator) {
    this.adapter = adapter;
    this.mutator = mutator;
  }

  updateResources(spec, payload, mutator) {
    Object.entries(
      isGraphQl(payload) ? graphQlNormalize(payload) : jsonApiNormalize(payload)
    ).forEach(([resourceType, resourcesById]) => {
      const rById = isGraphQl(payload)
        ? toJsonApiSpec(resourceType, resourcesById)
        : resourcesById;

      this.adapter.updateResources(mutator, resourceType, rById);
    });
  }
}
