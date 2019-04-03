import BaseModel from "../../src/BaseModel";
import Vendor from "./Vendor";
import PurchaseOrderContact from "./PurchaseOrderContact";

export default class PurchaseOrder extends BaseModel {
  static get belongsTo() {
    return [Vendor];
  }

  static get hasMany() {
    return [PurchaseOrderContact];
  }
}
