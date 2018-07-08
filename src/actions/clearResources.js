import {isRedux, isMobx, isSetState} from "./helpers";

export default (resourceTypes, mutator) => {
  if (isRedux(mutator)) {
    mutator({
      type: "CLEAR_RESOURCES",
      resourceTypes
    });
  } else if (isMobx(mutator)) {
    resourceTypes.forEach(resourceType => {
      mutator[resourceType] = {};
    });
  } else if (isSetState(mutator)) {
    // TODO: need to implement
  }
};
