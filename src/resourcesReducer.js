import produce from "immer";

const initialState = {};

export default function resourcesReducer(state = initialState, action) {
  const { resourceType } = action;
  return produce(state, draft => {
    switch (action.type) {
      case "ADD_OR_REPLACE_RESOURCE_BY_ID":
        const newState = { ...state };
        const { type, spec, id, attributes, links, relationships } = action;

        _initializeResource(newState, resourceType);

        newState[resourceType][id] = {
          resourceType,
          id,
          attributes,
          links,
          relationships
        };

        return newState;
      case "MERGE_RESOURCES":
        const { resourcesById } = action;
        if (!state[resourceType]) {
          draft[resourceType] = {};
        }

        Object.entries(resourcesById).forEach(
          ([id, resource]) => (draft[resourceType][id] = resource)
        );
    }
  });
}

const _initializeResource = (newState, resourceType) => {
  if (resourceType in newState) return;
  newState[resourceType] = {};
};
