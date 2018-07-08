export const updateResources = (mutator, resourceType, resourcesById) => {
  mutator("UPDATE_RESOURCES", {resourceType, resourcesById});
};
