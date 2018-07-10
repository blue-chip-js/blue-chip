import {
  Actions,
  updateResource,
  removeResource,
  removeResources,
  clearResources
} from "./actions";
import BaseModel from "./BaseModel";

// TODO: remove to adapters
import reduxAdapter from "./adapters/redux";
import mutations from "./adapters/vuex/resourcesMutations";

export {
  Actions,
  updateResource,
  removeResource,
  removeResources,
  clearResources,
  BaseModel,
  mutations,
  reduxAdapter
};
