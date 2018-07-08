import {resourcesReducer} from "./adapters/redux";
import mutations from "./adapters/vuex/resourcesMutations";
import {
  Actions,
  updateResource,
  removeResource,
  removeResources,
  clearResources
} from "./actions";
import BaseModel from "./BaseModel";
import reduxAdapter from "./adapters/redux";

export {
  Actions,
  updateResource,
  removeResource,
  removeResources,
  clearResources,
  resourcesReducer,
  mutations,
  BaseModel,
  reduxAdapter
};
