import BaseModel from "../../src/BaseModel";
import VendorContact from "./VendorContact";
import PurchaseOrder from "./PurchaseOrder";

export default class PurchaseOrderContact extends BaseModel {
  static get belongsTo() {
    return [VendorContact, PurchaseOrder];
  }
}
