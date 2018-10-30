import BaseModel from "../../src/BaseModel";
import Patient from "./Patient";

export default class Indication extends BaseModel {
  static get hasMany() {
    return [Patient];
  }
}
