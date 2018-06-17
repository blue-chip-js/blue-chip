import { updateResources } from "../lib/actions";
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

        updateResources(dispatch, { jsonApiPayload });
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

        updateResources(dispatch, { graphQlPayload });
        expect(dispatch).toBeCalledWith(tasksMergeResourcesAction);
        expect(dispatch).toBeCalledWith(checklistsMergeResourcesAction);
        expect(dispatch).toMatchSnapshot();
      });
    });
  });
});
