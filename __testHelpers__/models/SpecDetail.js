import BaseModel from "../../src/BaseModel";
import Spec from "./Spec";
import SpecDetailCom from "./SpecDetailCom";
import SpecDetailRoomType from "./SpecDetailRoomType";

export default class SpecDetail extends BaseModel {
  static get belongsTo() {
    return [Spec];
  }

  static get hasMany() {
    return [SpecDetailCom, SpecDetailRoomType];
  }
}
