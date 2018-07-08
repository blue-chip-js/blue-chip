import {resourcesReducer} from ".adapters/redux/resourcesReducer";
import mutations from ".adapters/mobx/resourcesMutations";
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
