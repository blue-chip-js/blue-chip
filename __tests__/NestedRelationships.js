import BaseModel from "../src/BaseModel";
import Query from "../src/Query";

import resources from "../__testHelpers__/fixtrues/checklistsAndTasksNormalized";
import {Checklist} from "../__testHelpers__/models";

describe("Nested resourse", () => {
  test("returns a snapshot including users", () => {
    const checklists = Checklist.query(resources)
      .all()
      .includes(["tasks.user"])
      .toObjects();
    expect(checklists).toMatchSnapshot();
  });
});
