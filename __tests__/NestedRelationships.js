import checklistResources from "../__testHelpers__/fixtrues/checklistsAndTasksNormalized";
import pOResources from "../__testHelpers__/fixtrues/purchaseOrdersAndOthersNormalized";
import specResources from "../__testHelpers__/fixtrues/specsAndOthersNormalized";
import {Checklist, PurchaseOrderContact, Spec} from "../__testHelpers__/models";

describe("Nested resourse", () => {
  test("returns a snapshot including users", () => {
    const checklists = Checklist.query(checklistResources)
      .all()
      .includes(["tasks.user"])
      .toObjects();
    expect(checklists).toMatchSnapshot();
  });

  test("returns a snapshot including contact", () => {
    const purchaseOrderContacts = PurchaseOrderContact.query(pOResources)
      .includes(["vendorContact.contact"])
      .toObjects();
    expect(purchaseOrderContacts).toMatchSnapshot();
  });

  test("returns a snapshot including coms", () => {
    const specs = Spec.query(specResources)
      .where({id: [11]})
      .includes(["specDetails.coms"])
      .toObjects();
    expect(specs).toMatchSnapshot();
  });
});
