import BaseModel from "../../src/BaseModel";
import Area from "./Area";

export default class AreaRoom extends BaseModel {
  static get belongsTo(){
    return [Area]
  }
}
