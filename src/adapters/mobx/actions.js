export const updateResources = (mutator, resourceType, resourcesById) => {
  Object.entries(resourcesById).forEach(([id, resource]) => {
    if (!mutator[resourceType]) {
      mutator[resourceType] = {};
    }
    mutator[resourceType][id] = resource;
  });
};
