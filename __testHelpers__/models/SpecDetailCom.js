import BaseModel from "../../src/BaseModel";
import SpecDetail from "./SpecDetail";
import Task from "./Task";
import Spec from "./Spec";

export default class SpecDetailCom extends BaseModel {
  static get belongsTo() {
    return [SpecDetail, Spec];
  }

  static get hasMany() {
    return [Task];
  }
}
