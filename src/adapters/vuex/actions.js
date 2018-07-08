export const updateResourcesVuex = (mutator, resourceType, resourcesById) => {
  mutator("UPDATE_RESOURCES", {resourceType, resourcesById});
};
