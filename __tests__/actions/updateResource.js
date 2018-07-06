import {updateResource} from "../../src/actions";

const dispatch = jest.fn().mockName("dispatch");
Object.defineProperty(dispatch, "name", {value: "dispatch"});

describe("updateResource", () => {
  describe("Redux", () => {
    test("dispatches update action for a single resource", () => {
      const checklist = {
        id: 1,
        type: "checklists",
        attributes: {name: "Onboarding Rest"},
        links: {self: "http://example.com/checklists/1"},
        relationships: {
          tasks: {
            data: [{id: 1, type: "tasks"}, {id: 2, type: "tasks"}]
          }
        }
      };

      const updateAction = {
        type: "ADD_OR_REPLACE_RESOURCE_BY_ID",
        resourceType: checklist.type,
        id: checklist.id,
        attributes: checklist.attributes,
        links: checklist.links,
        relationships: checklist.relationships
      };

      updateResource(checklist, dispatch);
      expect(dispatch).toBeCalledWith(updateAction);
    });
  });
});
