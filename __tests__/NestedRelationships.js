import checklistResources from "../__testHelpers__/fixtures/checklistsAndTasksNormalized";
import pOResources from "../__testHelpers__/fixtures/purchaseOrdersAndOthersNormalized";
import specResources from "../__testHelpers__/fixtures/specsNormalized";
import specDetailComsResources from "../__testHelpers__/fixtures/specDetailComsNormalized";
import {
  Checklist,
  PurchaseOrderContact,
  Spec,
  SpecDetailCom,
} from "../__testHelpers__/models";

describe("Nested resources", () => {
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

  test("belongsTo.belongsTo.belongsTo.belongsTo.belongsTo", () => {
    const specDetailComs = SpecDetailCom.query(specDetailComsResources)
      .where({id: [97]})
      .includes(["specDetail.spec.area.areaType.someNestedResource"])
      .toObjects();
    expect(specDetailComs).toMatchSnapshot();
  });

  test("belongsTo.belongsTo.belongsTo.belongsTo.belongsTo.belongsTo", () => {
    const specDetailComs = SpecDetailCom.query(specDetailComsResources)
      .where({id: [97]})
      .includes([
        "specDetail.spec.area.areaType.someNestedResource.anotherNestedResource",
      ])
      .toObjects();
    expect(specDetailComs).toMatchSnapshot();
  });

  test("includes with hasMany.hasMany", () => {
    const specs = Spec.query(specResources)
      .where({id: [11]})
      .includes(["specDetails.coms"])
      .toObjects();
    expect(specs).toMatchSnapshot();
  });

  test("belongsTo, hasMany.[hasMany, hasMany, belongsTo]", () => {
    const specs = Spec.query(specResources)
      .where({id: [11]})
      .includes(["specCategory", "specDetails.[coms, roomTypes, user]"])
      .toObjects();
    expect(specs).toMatchSnapshot();
  });

  test("hasMany.[belongsTo, hasMany, hasMany], belongsTo, switched order", () => {
    const specs = Spec.query(specResources)
      .where({id: [11]})
      .includes(["specDetails.[user, coms, roomTypes]", "specCategory"])
      .toObjects();
    expect(specs).toMatchSnapshot();
  });

  test("belongsTo, hasMany.[hasMany, belongsTo, hasMany], mixed order", () => {
    const specs = Spec.query(specResources)
      .where({id: [11]})
      .includes(["specCategory", "specDetails.[coms, user, roomTypes]"])
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

  test("belongsTo.belongsTo, belongsTo.hasMany, belongsTo.belongsTo", () => {
    const specDetailComs = SpecDetailCom.query(specDetailComsResources)
      .where({id: [99]})
      .includes(["spec.area", "spec.specDetails", "spec.specCategory"])
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

  test("belongsTo.belongsTo.[belongsTo, belongsTo]", () => {
    const specDetailComs = SpecDetailCom.query(specDetailComsResources)
      .where({id: [97]})
      .includes(["specDetail.spec.[area, specCategory]"])
      .toObjects();
    expect(specDetailComs).toMatchSnapshot();
  });

  test("belongsTo.belongsTo.belongsTo.belongsTo", () => {
    const specDetailComs = SpecDetailCom.query(specDetailComsResources)
      .where({id: [97]})
      .includes(["specDetail.spec.area.areaType"])
      .toObjects();
    expect(specDetailComs).toMatchSnapshot();
  });

  test("belongsTo.belongsTo.belongsTo.hasMany", () => {
    const specDetailComs = SpecDetailCom.query(specDetailComsResources)
      .where({id: [97]})
      .includes(["specDetail.spec.area.areaRooms"])
      .toObjects();
    expect(specDetailComs).toMatchSnapshot();
  });

  test("belongsTo.belongsTo.[belongsTo.belongsTo, belongsTo]", () => {
    const specDetailComs = SpecDetailCom.query(specDetailComsResources)
      .where({id: [97]})
      .includes(["specDetail.spec.[area.areaType, specCategory]"])
      .toObjects();
    expect(specDetailComs).toMatchSnapshot();
  });

  test("belongsTo.belongsTo.[belongsTo.hasMany, belongsTo]", () => {
    const specDetailComs = SpecDetailCom.query(specDetailComsResources)
      .where({id: [97]})
      .includes(["specDetail.spec.[area.areaRooms, specCategory]"])
      .toObjects();
    expect(specDetailComs).toMatchSnapshot();
  });

  test("belongsTo.[hasMany, belongsTo], switched order", () => {
    const specDetailComs = SpecDetailCom.query(specDetailComsResources)
      .where({id: [99]})
      .includes(["spec.[specDetails, area]"])
      .toObjects();
    expect(specDetailComs).toMatchSnapshot();
  });

  test("belongsTo.[belongsTo, hasMany, belongsTo], mixed", () => {
    const specDetailComs = SpecDetailCom.query(specDetailComsResources)
      .where({id: [99]})
      .includes(["spec.[specCategory, specDetails, area]"])
      .toObjects();
    expect(specDetailComs).toMatchSnapshot();
  });

  test("hasMany.hasMany.hasMany", () => {
    const specs = Spec.query(specResources)
      .where({id: [11]})
      .includes(["specDetails.coms.tasks"])
      .toObjects();
    expect(specs).toMatchSnapshot();
  });

  test("hasMany.hasMany.hasMany.belongsTo", () => {
    const specs = Spec.query(specResources)
      .where({id: [11]})
      .includes(["specDetails.coms.tasks.user"])
      .toObjects();
    expect(specs).toMatchSnapshot();
  });

  test("hasMany.[hasMany.hasMany.hasMany, hasMany, belongsTo]", () => {
    const specs = Spec.query(specResources)
      .where({id: [11]})
      .includes(["specDetails.[coms.tasks.user, roomTypes, user]"])
      .toObjects();
    expect(specs).toMatchSnapshot();
  });
});
