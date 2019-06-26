import resources from "../__testHelpers__/fixtures/patientsAndSettingsOfUseNormalized";
import resourcesNoRelationshipData from "../__testHelpers__/fixtures/patientsNoRelationshipDataNormalized";
import Patient from "../__testHelpers__/models/Patient";
import Indication from "../__testHelpers__/models/Indication";

describe("Where related tests", () => {
  test("Single id", () => {
    const patients = Patient.query(resources)
      .includes(["indication"])
      .where({myPatient: true})
      .whereRelated(Indication, {id: "1"})
      .toObjects();
    expect(patients).toMatchSnapshot();
  });
  test("Multiple ids", () => {
    const patients = Patient.query(resources)
      .includes(["indication"])
      .where({myPatient: true})
      .whereRelated(Indication, {id: ["1", "2"]})
      .toObjects();
    expect(patients).toMatchSnapshot();
  });
  test("Should return empty array for unintialized relationships queries", () => {
    const patients = Patient.query(resourcesNoRelationshipData)
      .includes(["indication"])
      .where({myPatient: true})
      .whereRelated(Indication, {id: "1"})
      .toObjects();
    expect(patients).toMatchSnapshot();
  });
});
