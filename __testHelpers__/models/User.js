import BaseModel from "../../src/BaseModel";
import Task from "./Task";

export default class User extends BaseModel {
  static get belongsTo() {
    return [Task];
  }
}
