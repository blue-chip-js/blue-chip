import checklistResources from "../__testHelpers__/fixtrues/checklistsAndTasksNormalized";
import pOResources from "../__testHelpers__/fixtrues/purchaseOrdersAndOthersNormalized";
import specResources from "../__testHelpers__/fixtrues/specsNormalized";
import {Checklist, PurchaseOrderContact, Spec} from "../__testHelpers__/models";

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
});
