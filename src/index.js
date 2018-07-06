import resourcesReducer from "./resourcesReducer";
import mutations from "./resourcesMutations";
import {
  updateResources,
  updateResource,
  removeResource,
  removeResources,
  clearResources
} from "./actions";
import BaseModel from "./BaseModel";

export {
  updateResources,
  updateResource,
  removeResource,
  removeResources,
  clearResources,
  resourcesReducer,
  mutations,
  BaseModel
};
