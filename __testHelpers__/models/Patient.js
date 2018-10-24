import BaseModel from "../../src/BaseModel";
import SettingOfUse from "./SettingOfUse";

export default class Patient extends BaseModel {

  static get belongsTo() {
    return [SettingOfUse];
  }
}
