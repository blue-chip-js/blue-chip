import {removeResource} from "../../src/actions";

const dispatch = jest.fn().mockName("dispatch");
Object.defineProperty(dispatch, "name", {value: "dispatch"});

describe("removeResource", () => {
  describe("Redux", () => {
    test("dispatches remove resource action", () => {
      const checklist = {
        id: 1,
        type: "checklists"
      };

      const deleteAction = {
        type: "REMOVE_RESOURCE_BY_ID",
        resourceType: checklist.type,
        id: checklist.id
      };

      removeResource(checklist, dispatch);
      expect(dispatch).toBeCalledWith(deleteAction);
    });
  });

  describe("MobX", () => {
    describe("removeResource", () => {
      test("clears the store for the provided resources", () => {
        const store = {
          checklists: {1: {}, 2: {}}
        };

        const resource = {id: 1, type: "checklists"};

        removeResource(resource, store);
        expect(store).toEqual({checklists: {2: {}}});
        expect(store).toMatchSnapshot();
      });
    });
  });
});
