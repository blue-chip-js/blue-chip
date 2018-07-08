import {isRedux, isMobx, isSetState} from "./helpers";

export default (resources, mutator) => {
  if (isRedux(mutator)) {
    mutator({
      type: "REMOVE_RESOURCES_BY_ID",
      resources
    });
  } else if (isMobx(mutator)) {
    resources.forEach(({type, id}) => {
      delete mutator[type][id];
    });
  } else if (isSetState(mutator)) {
    // TODO: need to implement
  }
};
