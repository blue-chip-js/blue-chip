import {buildRelationships} from "../../actions/helpers";

export const updateResources = (mutator, resourceType, resourcesById) => {
  Object.entries(resourcesById).forEach(([id, resource]) => {
    if (!mutator[resourceType]) {
      mutator[resourceType] = {};
    }
    mutator[resourceType][id] = resource;
  });
};

export const updateResource = (
  mutator,
  {id, type, attributes, links, relationships}
) => {
  if (!(type in mutator)) {
    mutator[type] = {};
  }

  mutator[type][id] = {
    type,
    id,
    attributes,
    links,
    relationships: relationships || buildRelationships(type, attributes)
  };
};

export const removeResources = (mutator, resources) => {
  resources.forEach(({type, id}) => {
    delete mutator[type][id];
  });
};

export const removeResource = (mutator, {id, type}) => {
  delete mutator[type][id];
};

export const clearResources = (mutator, resourceTypes) => {
  resourceTypes.forEach(resourceType => {
    mutator[resourceType] = {};
  });
};
