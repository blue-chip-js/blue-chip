import BaseModel from "../../src/BaseModel";
import SpecDetail from "./SpecDetail";
import SpecCategory from "./SpecCategory";
import Area from "./Area";

export default class Spec extends BaseModel {
  static get belongsTo() {
    return [SpecCategory, Area];
  }

  static get hasMany() {
    return [SpecDetail];
  }
}
