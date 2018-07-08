import {isRedux, isMobx, isSetState} from "./helpers";

export default ({id, type}, mutator) => {
  if (isRedux(mutator)) {
    mutator({
      type: "REMOVE_RESOURCE_BY_ID",
      resourceType: type,
      id
    });
  } else if (isMobx(mutator)) {
    delete mutator[type][id];
  } else if (isSetState(mutator)) {
    // TODO: need to implement
  }
};
