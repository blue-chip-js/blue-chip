export const updateResources = (mutator, resourceType, resourcesById) => {
  mutator("UPDATE_RESOURCES", {resourceType, resourcesById});
};

export const updateResource = (
  mutator,
  {id, type, attributes, links, relationships}
) => {
  console.log("Not Implemented Yet");
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
