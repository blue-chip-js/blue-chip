import {removeResources} from "../../src/actions";

const dispatch = jest.fn().mockName("dispatch");
Object.defineProperty(dispatch, "name", {value: "dispatch"});

describe("removeResources", () => {
  describe("Redux", () => {
    test("dispatches remove resource action", () => {
      const checklists = [
        {
          id: 1,
          type: "checklists"
        },
        {
          id: 2,
          type: "checklists"
        }
      ];

      const removeResourcesAction = {
        type: "REMOVE_RESOURCES_BY_ID",
        resources: checklists
      };

      removeResources(checklists, dispatch);
      expect(dispatch).toBeCalledWith(removeResourcesAction);
    });
  });

  describe("Redux", () => {
    describe("removeResources", () => {
      test("clears the store for the provided resources", () => {
        const store = {
          checklists: {1: {}, 2: {}}
        };

        const resources = [
          {id: 1, type: "checklists"},
          {id: 2, type: "checklists"}
        ];

        removeResources(resources, store);
        expect(store).toEqual({checklists: {}});
        expect(store).toMatchSnapshot();
      });
    });
  });
});
