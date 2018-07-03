import {isRedux, isMobx, isSetState} from "./helpers";

export default ({id, type, attributes, links, relationships}, storeUpdater) => {
  if (isRedux(storeUpdater)) {
    storeUpdater({
      type: "ADD_OR_REPLACE_RESOURCE_BY_ID",
      resourceType: type,
      id,
      attributes,
      links,
      relationships: relationships || _buildRelationships(type, attributes)
    });
  } else if (isMobx(storeUpdater)) {
    if (!(type in storeUpdater)) {
      storeUpdater[type] = {};
    }

    storeUpdater[type][id] = {
      type,
      id,
      attributes,
      links,
      relationships: relationships || _buildRelationships(type, attributes)
    };
  } else if (isSetState(storeUpdater)) {
    storeUpdater(state => {
      if (!(type in state.resources)) {
        state.resources[type] = {};
      }

      state.resources[type][id] = {
        type,
        id,
        attributes,
        links,
        relationships: relationships || _buildRelationships(type, attributes)
      };
      return state;
    });
  }
};
