import BaseModel from "../../src/BaseModel";
import SpecDetail from "./SpecDetail";

export default class SpecDetailCom extends BaseModel {
  static get belongsTo() {
    return [SpecDetail];
  }
}
