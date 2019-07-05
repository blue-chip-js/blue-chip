import BaseModel from "../../src/BaseModel";
import Spec from "./Spec";
import AreaType from "./AreaType";
import AreaRoom from "./AreaRoom";

export default class Area extends BaseModel {
  static get belongsTo() {
    return [Spec, AreaType];
  }
  static get hasMany(){
    return [AreaRoom];
  }
}
