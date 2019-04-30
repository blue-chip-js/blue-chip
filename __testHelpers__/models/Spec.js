import BaseModel from "../../src/BaseModel";
import SpecDetail from "./SpecDetail";
import SpecCategory from "./SpecCategory";

export default class Spec extends BaseModel {
  static get belongsTo() {
    return [SpecCategory];
  }

  static get hasMany() {
    return [SpecDetail];
  }
}
