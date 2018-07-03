import {isRedux, isMobx, isSetState} from "./helpers";

export default ({id, type}, storeUpdater) => {
  if (isRedux(storeUpdater)) {
    storeUpdater({
      type: "REMOVE_RESOURCE_BY_ID",
      resourceType: type,
      id
    });
  } else if (isMobx(storeUpdater)) {
    delete storeUpdater[type][id];
  } else if (isSetState(storeUpdater)) {
    // TODO: need to implement
  }
};
