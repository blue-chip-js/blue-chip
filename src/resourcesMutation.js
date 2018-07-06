export default {
  UPDATE_RESOURCES: (state, {resourceType, resourcesById}) => {
    Object.entries(resourcesById).forEach(([id, resource]) => {
      if (!state[resourceType]) {
        state[resourceType] = {};
      }
      state[resourceType][id] = resource;
    });
  }
};
