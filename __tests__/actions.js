import {
  updateResources,
  updateResource,
  removeResource
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
import resourcesReducer from "../src/resourcesReducer";

describe("actions", () => {
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
        expect(dispatch).toMatchSnapshot();
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
        expect(dispatch).toMatchSnapshot();
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
          tasks: { data: [{ id: 1, type: "tasks" }, { id: 2, type: "tasks" }] }
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
      expect(dispatch).toMatchSnapshot();
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
      expect(dispatch).toMatchSnapshot();
    });
  });
});
