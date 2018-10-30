import resources from "../__testHelpers__/fixtrues/patientsAndSettingsOfUseNormalized";
import Patient from "../__testHelpers__/models/Patient";
import Indication from "../__testHelpers__/models/Indication";

describe("Blank relationship", () => {
  test("One relationship blank should still return the non blank relationships", () => {
    resources.patients["667"].relationships.settingOfUse.data = null;
    const patients = Patient.query(resources)
      .includes(["indication", "settingOfUse"])
      .all()
      .toObjects();
    expect(patients).toMatchSnapshot();
  });
});
