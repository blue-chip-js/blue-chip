export const updateResources = (mutator, resourceType, resourcesById) => {
  mutator({type: "UPDATE_RESOURCES", resourceType, resourcesById});
};
