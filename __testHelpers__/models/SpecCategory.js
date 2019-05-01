import BaseModel from "../../src/BaseModel";
import Spec from "./Spec";

export default class SpecCategory extends BaseModel {
  static get belongsTo() {
    return [Spec];
  }
}
