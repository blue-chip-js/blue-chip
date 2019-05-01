import checklistResources from "../__testHelpers__/fixtrues/checklistsAndTasksNormalized";
import pOResources from "../__testHelpers__/fixtrues/purchaseOrdersAndOthersNormalized";
import specResources from "../__testHelpers__/fixtrues/specsNormalized";
import specDetailComsResources from "../__testHelpers__/fixtrues/specDetailComsNormalized";
import {Checklist, PurchaseOrderContact, Spec, SpecDetailCom} from "../__testHelpers__/models";

describe("Nested resourse", () => {
  test("includes with hasMany.belongsTo", () => {
    const checklists = Checklist.query(checklistResources)
      .all()
      .includes(["tasks.user"])
      .toObjects();
    expect(checklists).toMatchSnapshot();
  });

  test("includes with belongsTo.belongsTo", () => {
    const purchaseOrderContacts = PurchaseOrderContact.query(pOResources)
      .includes(["vendorContact.contact"])
      .toObjects();
    expect(purchaseOrderContacts).toMatchSnapshot();
  });

  test("includes with hasMany.hasMany", () => {
    const specs = Spec.query(specResources)
      .where({id: [11]})
      .includes(["specDetails.coms"])
      .toObjects();
    expect(specs).toMatchSnapshot();
  });

  test("belongsTo, hasMany.[hasMany, hasMany, belonngsTo]", () => {
    const specs = Spec.query(specResources)
      .where({id: [11]})
      .includes(["specCategory", "specDetails.[coms, roomTypes, user]"])
      .toObjects();
    expect(specs).toMatchSnapshot();
  });

  test("belongsTo.[belongsTo, belongsTo]", () => {
    const specDetailComs = SpecDetailCom.query(specDetailComsResources)
      .where({id: [99]})
      .includes(["spec.[area, specCategory]"])
      .toObjects();
    expect(specDetailComs).toMatchSnapshot();
  });

  test("belongsTo.belongsTo, belongsTo.belongsTo", () => {
    const specDetailComs = SpecDetailCom.query(specDetailComsResources)
      .where({id: [99]})
      .includes(["spec.area", "spec.specCategory"])
      .toObjects();
    expect(specDetailComs).toMatchSnapshot();
  });

  test("belongsTo.[belongsTo, hasMany]", () => {
    const specDetailComs = SpecDetailCom.query(specDetailComsResources)
      .where({id: [99]})
      .includes(["spec.[area, specDetails]"])
      .toObjects();
    expect(specDetailComs).toMatchSnapshot();
  });
});
