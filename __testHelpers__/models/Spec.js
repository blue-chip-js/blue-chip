import BaseModel from "../../src/BaseModel";
import SpecDetail from "./SpecDetail";

export default class Spec extends BaseModel {
  static get hasMany() {
    return [SpecDetail];
  }
}
