import resources from "../__testHelpers__/fixtures/patientsAndSettingsOfUseNormalized";
import Patient from "../__testHelpers__/models/Patient";
import Indication from "../__testHelpers__/models/Indication";

describe("Blank relationship", () => {
  test("One relationship blank should still return the non blank relationships", () => {
    const resourcesClone = JSON.parse(JSON.stringify(resources))
    resourcesClone.patients["667"].relationships.settingOfUse.data = null

    const patients = Patient.query(resourcesClone)
      .includes(["indication", "settingOfUse"])
      .toObjects();
    expect(patients).toMatchSnapshot();
  });
});
