import BaseModel from "../../src/BaseModel";
import Spec from "./Spec";
import Com from "./Com";

export default class SpecDetail extends BaseModel {
  static get belongsTo() {
    return [Spec];
  }

  static get hasMany() {
    return [Com];
  }
}
