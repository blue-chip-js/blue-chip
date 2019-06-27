import resources from "../__testHelpers__/fixtures/patientsAndSettingsOfUseNormalized";
import Patient from "../__testHelpers__/models/Patient";

describe("Custom singular", () => {

    test("includes settingOfUse singular for belongs to", () => {
        const patients = Patient.query(resources)
            .all()
            .includes(["settingOfUse"])
            .toObjects();
        expect(patients).toMatchSnapshot();
    });

});
