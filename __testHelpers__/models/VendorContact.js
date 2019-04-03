import BaseModel from "../../src/BaseModel";
import Vendor from "./Vendor";
import Contact from "./Contact";

export default class VendorContact extends BaseModel {
  static get belongsTo() {
    return [Vendor, Contact];
  }
}
