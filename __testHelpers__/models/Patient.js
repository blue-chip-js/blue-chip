import BaseModel from "../../src/BaseModel";
import SettingOfUse from "./SettingOfUse";
import Indication from "./Indication";

export default class Patient extends BaseModel {
  static get belongsTo() {
    return [SettingOfUse, Indication];
  }
}
