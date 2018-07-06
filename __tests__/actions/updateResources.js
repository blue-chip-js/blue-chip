import {updateResources} from "../../src/actions";
import jsonApiPayload
  from "../../__testHelpers__/fixtrues/checklistsJsonApiResponse";
import graphQlPayload
  from "../../__testHelpers__/fixtrues/checklistsGraphQlResponse";
import normalizedJsonApiTasksPayload
  from "../../__testHelpers__/fixtrues/normalizedJsonApiTasksPayload";
import normalizedJsonApiChecklistsPayload
  from "../../__testHelpers__/fixtrues/normalizedJsonApiChecklistsPayload";
import normalizedGraphQlTaskPayload
  from "../../__testHelpers__/fixtrues/normalizedGraphQlTasksPayload";
import normalizedGraphQlChecklistPayload
  from "../../__testHelpers__/fixtrues/normalizedGraphQlChecklistsPayload";

const dispatch = jest.fn().mockName("dispatch");
Object.defineProperty(dispatch, "name", {value: "dispatch"});

describe("updateResources", () => {
  describe("Redux", () => {
    describe("JsonApi", () => {
      test("dispatches MERGE_RESOURCES for each ", () => {
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

  describe("MobX", () => {
    describe("updateResources", () => {
      describe("JsonApi", () => {
        test("updates the store", () => {
          const store = {};
          updateResources(jsonApiPayload, store);
          expect(store).toMatchSnapshot();
        });
      });

      describe("GraphQl", () => {
        test("updates the store", () => {
          const store = {};
          updateResources(graphQlPayload, store);
          expect(store).toMatchSnapshot();
        });
      });
    });
  });
});
