import BaseModel from "../../src/BaseModel";
import Checklist from "./Checklist";
import User from "./User";
import SpecDetailCom from "./SpecDetailCom";

export default class Task extends BaseModel {
  static get belongsTo() {
    return [Checklist, User, SpecDetailCom];
  }
}
