import {buildRelationships} from "../../actions/helpers";

export const updateResources = (mutator, resourceType, resourcesById) => {
  mutator({type: "UPDATE_RESOURCES", resourceType, resourcesById});
};

export const updateResource = (
  mutator,
  {id, type, attributes, links, relationships}
) => {
  mutator({
    type: "ADD_OR_REPLACE_RESOURCE_BY_ID",
    resourceType: type,
    id,
    attributes,
    links,
    relationships: relationships || buildRelationships(type, attributes)
  });
};

export const removeResources = (mutator, resources) => {
  mutator({
    type: "REMOVE_RESOURCES_BY_ID",
    resources
  });
};

export const removeResource = (mutator, {id, type}) => {
  mutator({
    type: "REMOVE_RESOURCE_BY_ID",
    resourceType: type,
    id
  });
};

export const clearResources = (mutator, resourceTypes) => {
  mutator({
    type: "CLEAR_RESOURCES",
    resourceTypes
  });
};
