import {
  updateResources,
  updateResource,
  removeResource,
  removeResources,
  clearResources
} from "../lib/actions";
import jsonApiPayload
  from "../__testHelpers__/fixtrues/checklistsJsonApiResponse";
import graphQlPayload
  from "../__testHelpers__/fixtrues/checklistsGraphQlResponse";
import normalizedJsonApiTasksPayload
  from "../__testHelpers__/fixtrues/normalizedJsonApiTasksPayload";
import normalizedJsonApiChecklistsPayload
  from "../__testHelpers__/fixtrues/normalizedJsonApiChecklistsPayload";
import normalizedGraphQlTaskPayload
  from "../__testHelpers__/fixtrues/normalizedGraphQlTasksPayload";
import normalizedGraphQlChecklistPayload
  from "../__testHelpers__/fixtrues/normalizedGraphQlChecklistsPayload";

describe("actions", () => {
  describe("Redux", () => {
    describe("updateResources", () => {
      describe("JsonApi", () => {
        test("dispatches MERGE_RESOURCES for each ", () => {
          const dispatch = jest.fn();

          const tasksMergeResourcesAction = {
            resourceType: "tasks",
            resourcesById: normalizedJsonApiTasksPayload,
            type: "MERGE_RESOURCES"
          };

          const checklistsMergeResourcesAction = {
            resourceType: "checklists",
            resourcesById: normalizedJsonApiChecklistsPayload,
            type: "MERGE_RESOURCES"
          };

          updateResources(jsonApiPayload, dispatch);
          expect(dispatch).toBeCalledWith(tasksMergeResourcesAction);
          expect(dispatch).toBeCalledWith(checklistsMergeResourcesAction);
        });
      });

      describe("GraphQl", () => {
        test("dispatches MERGE_RESOURCES for each ", () => {
          const dispatch = jest.fn();

          const tasksMergeResourcesAction = {
            resourceType: "tasks",
            resourcesById: normalizedGraphQlTaskPayload,
            type: "MERGE_RESOURCES"
          };

          const checklistsMergeResourcesAction = {
            resourceType: "checklists",
            resourcesById: normalizedGraphQlChecklistPayload,
            type: "MERGE_RESOURCES"
          };

          updateResources(graphQlPayload, dispatch);
          expect(dispatch).toBeCalledWith(tasksMergeResourcesAction);
          expect(dispatch).toBeCalledWith(checklistsMergeResourcesAction);
        });
      });
    });

    describe("updateResource", () => {
      test("dispatches update action for a single resource", () => {
        const dispatch = jest.fn();

        const checklist = {
          id: 1,
          type: "checklists",
          attributes: { name: "Onboarding Rest" },
          links: { self: "http://example.com/checklists/1" },
          relationships: {
            tasks: {
              data: [{ id: 1, type: "tasks" }, { id: 2, type: "tasks" }]
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

    describe("removeResource", () => {
      test("dispatches remove resource action", () => {
        const dispatch = jest.fn();

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

    describe("removeResource", () => {
      test("dispatches remove resource action", () => {
        const dispatch = jest.fn();

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

    describe("clearResources", () => {
      test("clears the store for the provided resources", () => {
        const dispatch = jest.fn();

        const resourceTypes = ["checklists", "tasks"];

        const clearResourcesAction = {
          type: "CLEAR_RESOURCES",
          resourceTypes
        };

        clearResources(resourceTypes, dispatch);
        expect(dispatch).toBeCalledWith(clearResourcesAction);
      });
    });
  });

  describe("Mobx", () => {
    describe("JsonApi", () => {
      test("dispatches MERGE_RESOURCES for each ", () => {
        const store = {};

        updateResources(jsonApiPayload, store);
        expect(store).toMatchSnapshot();
      });
    });

    describe("clearResources", () => {
      test("clears the store for the provided resources", () => {
        const store = {
          checklists: { 1: {} },
          tasks: { 1: {} }
        };

        const resourceTypes = ["checklists", "tasks"];

        clearResources(resourceTypes, store);
        expect(store).toEqual({ checklists: {}, tasks: {} });
        expect(store).toMatchSnapshot();
      });
    });

    describe("removeResource", () => {
      test("clears the store for the provided resources", () => {
        const store = {
          checklists: { 1: {}, 2: {} }
        };

        const resource = { id: 1, type: "checklists" };

        removeResource(resource, store);
        expect(store).toEqual({ checklists: { 2: {} } });
        expect(store).toMatchSnapshot();
      });
    });

    describe("removeResources", () => {
      test("clears the store for the provided resources", () => {
        const store = {
          checklists: { 1: {}, 2: {} }
        };

        const resources = [
          { id: 1, type: "checklists" },
          { id: 2, type: "checklists" }
        ];

        removeResources(resources, store);
        expect(store).toEqual({ checklists: {} });
        expect(store).toMatchSnapshot();
      });
    });
  });
});
