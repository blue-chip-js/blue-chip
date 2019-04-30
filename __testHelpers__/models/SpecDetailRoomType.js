import BaseModel from "../../src/BaseModel";
import SpecDetail from "./SpecDetail";

export default class SpecDetailRoomType extends BaseModel {
  static get belongsTo() {
    return [SpecDetail];
  }
}
