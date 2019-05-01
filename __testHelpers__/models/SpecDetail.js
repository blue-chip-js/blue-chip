import BaseModel from "../../src/BaseModel";
import Spec from "./Spec";
import SpecDetailCom from "./SpecDetailCom";
import SpecDetailRoomType from "./SpecDetailRoomType";
import User from "./User";

export default class SpecDetail extends BaseModel {
  static get belongsTo() {
    return [Spec, User];
  }

  static get hasMany() {
    return [SpecDetailCom, SpecDetailRoomType];
  }
}
