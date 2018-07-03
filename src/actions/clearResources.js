import {isRedux, isMobx, isSetState} from "./helpers";

export default (resourceTypes, storeUpdater) => {
  if (isRedux(storeUpdater)) {
    storeUpdater({
      type: "CLEAR_RESOURCES",
      resourceTypes
    });
  } else if (isMobx(storeUpdater)) {
    resourceTypes.forEach(resourceType => {
      storeUpdater[resourceType] = {};
    });
  } else if (isSetState(storeUpdater)) {
    // TODO: need to implement
  }
};
