import BaseModel from "../../src/BaseModel";
import SpecDetail from "./SpecDetail";

export default class Com extends BaseModel {
  static get belongsTo() {
    return [SpecDetail];
  }
}
