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
