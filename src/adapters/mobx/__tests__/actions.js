import jsonApiPayload
  from "../../../../__testHelpers__/fixtrues/checklistsJsonApiResponse";
import graphQlPayload
  from "../../../../__testHelpers__/fixtrues/checklistsGraphQlResponse";

import {Actions} from "../../../actions";
import mobxAdapter from "../";

describe("mobx updateResources", () => {
  describe("JsonApi", () => {
    test("updates the store", () => {
      const store = {};
      const actions = Actions.config({adapter: mobxAdapter, mutator: store});
      actions.updateResources(jsonApiPayload);
      expect(store).toMatchSnapshot();
    });
  });

  describe("GraphQl", () => {
    test("updates the store", () => {
      const store = {};
      const actions = Actions.config({adapter: mobxAdapter, mutator: store});
      actions.updateResources(graphQlPayload);
      expect(store).toMatchSnapshot();
    });
  });

  describe("updateResource", () => {});

  describe("removeResources", () => {
    test("clears the store for the provided resources", () => {
      const store = {
        checklists: {1: {}, 2: {}}
      };
      const actions = Actions.config({adapter: mobxAdapter, mutator: store});
      const resources = [
        {id: 1, type: "checklists"},
        {id: 2, type: "checklists"}
      ];

      actions.removeResources(resources);
      expect(store).toEqual({checklists: {}});
      expect(store).toMatchSnapshot();
    });
  });

  describe("removeResource", () => {
    test("clears the store for the provided resources", () => {
      const store = {
        checklists: {1: {}, 2: {}}
      };
      const actions = Actions.config({adapter: mobxAdapter, mutator: store});
      const resource = {id: 1, type: "checklists"};

      actions.removeResource(resource);
      expect(store).toEqual({checklists: {2: {}}});
      expect(store).toMatchSnapshot();
    });
  });

  describe("clearResources", () => {
    test("clears the store for the provided resources", () => {
      const store = {
        checklists: {1: {}},
        tasks: {1: {}}
      };
      const actions = Actions.config({adapter: mobxAdapter, mutator: store});
      const resourceTypes = ["checklists", "tasks"];

      actions.clearResources(resourceTypes);
      expect(store).toEqual({checklists: {}, tasks: {}});
      expect(store).toMatchSnapshot();
    });
  });
});
