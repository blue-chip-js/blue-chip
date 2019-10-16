import resources from "../__testHelpers__/fixtures/patientsAndSettingsOfUseNormalized";
import resourcesNoRelationshipData from "../__testHelpers__/fixtures/patientsNoRelationshipDataNormalized";
import specDetailNoComs from "../__testHelpers__/fixtures/specDetailNoComs";
import Patient from "../__testHelpers__/models/Patient";
import Spec from "../__testHelpers__/models/Spec";
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
  test("Should handle empty relationships for related resources", () => {
    const resourcesClone = JSON.parse(JSON.stringify(resources))
    resourcesClone.patients["667"].relationships.indication.data = null
    const patients = Patient.query(resourcesClone)
      .includes(["indication"])
      .whereRelated(Indication, {id: "3"})
      .toObjects();
    expect(patients).toHaveLength(1);
    expect(patients).toMatchSnapshot();
  });
  test("Should return empty array for uninitialized relationships queries", () => {
    const patients = Patient.query(resourcesNoRelationshipData)
      .includes(["indication"])
      .where({myPatient: true})
      .whereRelated(Indication, {id: "1"})
      .toObjects();
    expect(patients).toMatchSnapshot();
  });
  test("Should return all the available relationships", () => {
    const specs = Spec.query(specDetailNoComs)
      .includes(["specDetails.[specDetailComs.spec, roomTypes]"])
      .where({id: ["220"]})
      .toObjects();
    expect(specs).toMatchSnapshot();
  });
});
