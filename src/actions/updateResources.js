import jsonApiNormalize from "json-api-normalizer";
import {GraphQLNormalizr} from "graphql-normalizr";

const graphQLNormalizr = new GraphQLNormalizr();
const graphQlNormalize = graphQLNormalizr.normalize;

import {
  isGraphQl,
  isRedux,
  isMobx,
  isSetState,
  toJsonApiSpec,
  GraphQL,
  JsonAPI
} from "./helpers";

export default (payload, storeUpdater) => {
  isGraphQl(payload)
    ? _updateResourcesByStateManger(GraphQL, payload, storeUpdater)
    : _updateResourcesByStateManger(JsonAPI, payload, storeUpdater);
};

const _updateResourcesByStateManger = (spec, payload, storeUpdater) => {
  Object.entries(
    spec === GraphQL ? graphQlNormalize(payload) : jsonApiNormalize(payload)
  ).forEach(([resourceType, resourcesById]) => {
    const rById = spec === GraphQL
      ? toJsonApiSpec(resourceType, resourcesById)
      : resourcesById;
    if (isRedux(storeUpdater)) {
      _updateResourcesRedux(storeUpdater, resourceType, rById);
    } else if (isMobx(storeUpdater)) {
      _updateResourcesMobx(storeUpdater, resourceType, rById);
    } else if (isSetState(storeUpdater)) {
      _updateResourcesSetState(storeUpdater, resourceType, rById);
    }
  });
};

const _updateResourcesRedux = (storeUpdater, resourceType, resourcesById) => {
  storeUpdater({type: "MERGE_RESOURCES", resourceType, resourcesById});
};

const _updateResourcesMobx = (storeUpdater, resourceType, resourcesById) => {
  Object.entries(resourcesById).forEach(([id, resource]) => {
    if (!storeUpdater[resourceType]) {
      storeUpdater[resourceType] = {};
    }
    storeUpdater[resourceType][id] = resource;
  });
};

const _updateResourcesSetState = (
  storeUpdater,
  resourceType,
  resourcesById
) => {
  Object.entries(resourcesById).forEach(([id, resource]) => {
    storeUpdater(state => {
      if (!state.resources[resourceType]) {
        state.resources[resourceType] = {};
      }

      state.resources[resourceType][id] = resource;
      return state;
    });
  });
};
