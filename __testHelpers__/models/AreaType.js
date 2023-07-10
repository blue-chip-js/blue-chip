import BaseModel from "../../src/BaseModel";
import SomeNestedResource from "./SomeNestedResource";

export default class AreaType extends BaseModel {
  static get belongsTo() {
    return [SomeNestedResource];
  }
}
