import {isRedux, isMobx, isSetState, buildRelationships} from "./helpers";

export default ({id, type, attributes, links, relationships}, mutator) => {
  if (isRedux(mutator)) {
    mutator({
      type: "ADD_OR_REPLACE_RESOURCE_BY_ID",
      resourceType: type,
      id,
      attributes,
      links,
      relationships: relationships || buildRelationships(type, attributes)
    });
  } else if (isMobx(mutator)) {
    if (!(type in mutator)) {
      mutator[type] = {};
    }

    mutator[type][id] = {
      type,
      id,
      attributes,
      links,
      relationships: relationships || buildRelationships(type, attributes)
    };
  } else if (isSetState(mutator)) {
    mutator(state => {
      if (!(type in state.resources)) {
        state.resources[type] = {};
      }

      state.resources[type][id] = {
        type,
        id,
        attributes,
        links,
        relationships: relationships || buildRelationships(type, attributes)
      };
      return state;
    });
  }
};
