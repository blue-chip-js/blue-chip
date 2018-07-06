import {clearResources} from "../../src/actions";

const dispatch = jest.fn().mockName("dispatch");
Object.defineProperty(dispatch, "name", {value: "dispatch"});

describe("clearResources", () => {
  describe("Redux", () => {
    test("clears the store for the provided resources", () => {
      const resourceTypes = ["checklists", "tasks"];

      const clearResourcesAction = {
        type: "CLEAR_RESOURCES",
        resourceTypes
      };

      clearResources(resourceTypes, dispatch);
      expect(dispatch).toBeCalledWith(clearResourcesAction);
    });
  });

  describe("MobX", () => {
    describe("clearResources", () => {
      test("clears the store for the provided resources", () => {
        const store = {
          checklists: {1: {}},
          tasks: {1: {}}
        };

        const resourceTypes = ["checklists", "tasks"];

        clearResources(resourceTypes, store);
        expect(store).toEqual({checklists: {}, tasks: {}});
        expect(store).toMatchSnapshot();
      });
    });
  });
});
