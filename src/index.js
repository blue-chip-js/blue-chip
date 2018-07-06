import resourcesReducer from "./resourcesReducer";
import mutation from "./resourcesMutation";
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
  mutation,
  BaseModel
};
