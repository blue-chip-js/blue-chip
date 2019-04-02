import BaseModel from "../../src/BaseModel";
import Checklist from "./Checklist";
import User from "./User";

export default class Task extends BaseModel {
  static get belongsTo() {
    return [Checklist, User];
  }
}
