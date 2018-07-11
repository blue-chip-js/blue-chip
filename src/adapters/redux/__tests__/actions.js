import jsonApiPayload
  from "../../../../__testHelpers__/fixtrues/checklistsJsonApiResponse";
import graphQlPayload
  from "../../../../__testHelpers__/fixtrues/checklistsGraphQlResponse";
import normalizedJsonApiTasksPayload
  from "../../../../__testHelpers__/fixtrues/normalizedJsonApiTasksPayload";
import normalizedJsonApiChecklistsPayload
  from "../../../../__testHelpers__/fixtrues/normalizedJsonApiChecklistsPayload";
import normalizedGraphQlTaskPayload
  from "../../../../__testHelpers__/fixtrues/normalizedGraphQlTasksPayload";
import normalizedGraphQlChecklistPayload
  from "../../../../__testHelpers__/fixtrues/normalizedGraphQlChecklistsPayload";

import {Actions} from "../../../actions";
import reduxAdapter from "../";
const dispatch = jest.fn().mockName("dispatch");
const actions = Actions.config({
  adapter: reduxAdapter,
  mutator: dispatch
});

describe("Redux Actions", () => {
  describe("updateResources", () => {
    describe("JsonApi", () => {
      test("dispatches UPDATE_RESOURCES for each ", () => {
        const tasksMergeResourcesAction = {
          resourceType: "tasks",
          resourcesById: normalizedJsonApiTasksPayload,
          type: "UPDATE_RESOURCES"
        };

        const checklistsMergeResourcesAction = {
          resourceType: "checklists",
          resourcesById: normalizedJsonApiChecklistsPayload,
          type: "UPDATE_RESOURCES"
        };

        actions.updateResources(jsonApiPayload);
        expect(dispatch).toBeCalledWith(tasksMergeResourcesAction);
        expect(dispatch).toBeCalledWith(checklistsMergeResourcesAction);
      });
    });

    describe("GraphQl", () => {
      test("dispatches UPDATE_RESOURCES for each ", () => {
        const tasksMergeResourcesAction = {
          resourceType: "tasks",
          resourcesById: normalizedGraphQlTaskPayload,
          type: "UPDATE_RESOURCES"
        };

        const checklistsMergeResourcesAction = {
          resourceType: "checklists",
          resourcesById: normalizedGraphQlChecklistPayload,
          type: "UPDATE_RESOURCES"
        };

        actions.updateResources(graphQlPayload);
        expect(dispatch).toBeCalledWith(tasksMergeResourcesAction);
        expect(dispatch).toBeCalledWith(checklistsMergeResourcesAction);
      });
    });
  });

  describe("updateResource", () => {
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

      actions.updateResource(checklist);
      expect(dispatch).toBeCalledWith(updateAction);
    });
  });

  describe("removeResources", () => {
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

      actions.removeResources(checklists);
      expect(dispatch).toBeCalledWith(removeResourcesAction);
    });
  });

  describe("removeResource", () => {
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

      actions.removeResource(checklist);
      expect(dispatch).toBeCalledWith(deleteAction);
    });
  });

  describe("clearResources", () => {
    test("clears the store for the provided resources", () => {
      const resourceTypes = ["checklists", "tasks"];

      const clearResourcesAction = {
        type: "CLEAR_RESOURCES",
        resourceTypes
      };

      actions.clearResources(resourceTypes, dispatch);
      expect(dispatch).toBeCalledWith(clearResourcesAction);
    });
  });
});
