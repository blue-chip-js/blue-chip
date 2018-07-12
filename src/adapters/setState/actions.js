import {buildRelationships} from "../../actions/helpers";

export const updateResourcesSetState = (
  mutator,
  resourceType,
  resourcesById
) => {
  Object.entries(resourcesById).forEach(([id, resource]) => {
    mutator(state => {
      if (!state.resources[resourceType]) {
        state.resources[resourceType] = {};
      }

      state.resources[resourceType][id] = resource;
      return state;
    });
  });
};

export const updateResource = (
  mutator,
  {id, type, attributes, links, relationships}
) => {
  mutator(state => {
    if (!(type in state.resources)) {
      state.resources[type] = {};
    }

    state.resources[type][id] = {
      type,
      id,
      attributes,
      links,
      relationships: relationships || buildRelationships(type, attributes)
    };
    return state;
  });
};

export const removeResources = (mutator, resources) => {
  console.log("Not Implemented Yet");
};

export const removeResource = (mutator, {id, type}) => {
  console.log("Not Implemented Yet");
};

export const clearResources = (mutator, resourceTypes) => {
  console.log("Not Implemented Yet");
};
