import produce from "immer";

const initialState = {};

export default function resourcesReducer(state = initialState, action) {
  const { type, resourceType } = action;
  return produce(state, draft => {
    switch (type) {
      case "ADD_OR_REPLACE_RESOURCE_BY_ID":
        const { id, attributes, links, relationships } = action;
        _initializeResource(draft, resourceType);

        draft[resourceType][id] = {
          type: resourceType,
          id,
          attributes,
          links,
          relationships
        };
        break;
      case "MERGE_RESOURCES":
        const { resourcesById } = action;
        if (!state[resourceType]) {
          draft[resourceType] = {};
        }

        Object.entries(resourcesById).forEach(
          ([id, resource]) => (draft[resourceType][id] = resource)
        );
        break;
    }
  });
}

const _initializeResource = (draft, resourceType) => {
  if (resourceType in draft) return;
  draft[resourceType] = {};
};
