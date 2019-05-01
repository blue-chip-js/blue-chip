import BaseModel from "../../src/BaseModel";
import Spec from "./Spec";

export default class Area extends BaseModel {
  static get belongsTo() {
    return [Spec];
  }
}
