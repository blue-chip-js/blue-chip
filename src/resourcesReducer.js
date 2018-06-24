import produce from "immer";

const initialState = {};

export default function resourcesReducer(state = initialState, action) {
  const {
    type,
    id,
    attributes,
    links,
    relationships,
    resourcesById,
    resourceTypes,
    resourceType
  } = action;
  return produce(state, draft => {
    switch (type) {
      case "ADD_OR_REPLACE_RESOURCE_BY_ID":
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
        _initializeResource(draft, resourceType);

        Object.entries(resourcesById).forEach(
          ([id, resource]) => (draft[resourceType][id] = resource)
        );
        break;
      case "REMOVE_RESOURCE_BY_ID":
        delete draft[resourceType][id];
        break;
      case "CLEAR_RESOURCES":
        resourceTypes.forEach(resourceType => {
          draft[resourceType] = {};
        });
        break;
    }
  });
}

const _initializeResource = (draft, resourceType) => {
  if (resourceType in draft) return;
  draft[resourceType] = {};
};
