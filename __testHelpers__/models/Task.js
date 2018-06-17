import BaseModel from "../../src/BaseModel";
import Checklist from "./Checklist";

export default class Task extends BaseModel {
  static get belongsTo() {
    return [Checklist];
  }
}
