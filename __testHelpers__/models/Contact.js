import BaseModel from "../../src/BaseModel";
import VendorContact from "./VendorContact";

export default class Contact extends BaseModel {
  static get belongsTo() {
    return [VendorContact];
  }
}
