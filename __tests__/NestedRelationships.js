import BaseModel from "../src/BaseModel";
import Query from "../src/Query";

import checklistResources from "../__testHelpers__/fixtrues/checklistsAndTasksNormalized";
import pOResources from "../__testHelpers__/fixtrues/purchaseOrdersAndOthersNormalized";
import {Checklist} from "../__testHelpers__/models";
import {Contact} from "../__testHelpers__/models";
import {PurchaseOrder} from "../__testHelpers__/models";
import {PurchaseOrderContact} from "../__testHelpers__/models";
import {Vendor} from "../__testHelpers__/models";
import {VendorContact} from "../__testHelpers__/models";

describe("Nested resourse", () => {
  test("returns a snapshot including users", () => {
    const checklists = Checklist.query(checklistResources)
      .all()
      .includes(["tasks.user"])
      .toObjects();
    expect(checklists).toMatchSnapshot();
  });

  test("returns a snapshot including contact", () => {
    const checklists = PurchaseOrderContact.query(pOResources)
      .includes(["vendorContact.contact"])
      .toObjects();
    expect(checklists).toMatchSnapshot();
  });
});
