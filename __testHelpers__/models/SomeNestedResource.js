import BaseModel from "../../src/BaseModel";
import AreaType from "./AreaType";
import AnotherNestedResource from "./AnotherNestedResource";

export default class SomeNestedResource extends BaseModel {
  static get belongsTo() {
    return [AreaType, AnotherNestedResource];
  }
}
