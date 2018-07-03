import {isRedux, isMobx, isSetState} from "./helpers";

export default (resources, storeUpdater) => {
  if (isRedux(storeUpdater)) {
    storeUpdater({
      type: "REMOVE_RESOURCES_BY_ID",
      resources
    });
  } else if (isMobx(storeUpdater)) {
    resources.forEach(({type, id}) => {
      delete storeUpdater[type][id];
    });
  } else if (isSetState(storeUpdater)) {
    // TODO: need to implement
  }
};
