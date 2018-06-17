import resourceReducer from "./lib/resourceReducer";
import {
  normalizeAndMergePayload,
  dispatchUpdateResourcesByID
} from "./lib/actions";
import BaseModel from "./lib/BaseModel";

export {
  normalizeAndMergePayload,
  dispatchUpdateResourcesByID,
  resourceReducer,
  BaseModel
};
