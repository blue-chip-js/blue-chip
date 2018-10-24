import BaseModel from "../../src/BaseModel";
import Patient from "./Patient";

export default class SettingOfUse extends BaseModel {
  static singular = "settingOfUse";
  static plural = "settingOfUses";

  static get hasMany() {
    return [Patient];
  }
}
