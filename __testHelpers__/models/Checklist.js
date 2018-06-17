import BaseModel from "../../src/BaseModel";
import Task from "./Task";

export default class Checklist extends BaseModel {
  static get hasMany() {
    return [Task];
  }
}
