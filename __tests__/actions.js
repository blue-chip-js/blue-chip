import { normalizeAndMergePayload } from "../src/actions";
import jsonApiPayload
  from "../__testHelpers__/fixtrues/checklistsJsonApiResponse";
import graphQlPayload
  from "../__testHelpers__/fixtrues/checklistsGraphQlResponse";
import normalizedJsonApiTaskPayload
  from "../__testHelpers__/fixtrues/normalizedJsonApiTasksPayload";
import normalizedJsonApiChecklistPayload
  from "../__testHelpers__/fixtrues/normalizedJsonApiChecklistsPayload";
import normalizedGraphQlTaskPayload
  from "../__testHelpers__/fixtrues/normalizedGraphQlTasksPayload";
import normalizedGraphQlChecklistPayload
  from "../__testHelpers__/fixtrues/normalizedGraphQlChecklistsPayload";

describe("actions", () => {
  describe("normalizeAndMergePayload", () => {
    describe("JsonApi", () => {
      test("dispatches MERGE_RESOURCES for each ", () => {
        const dispatch = jest.fn();

        const tasksMergeResourcesAction = {
          resourceType: "tasks",
          resourcesById: normalizedJsonApiTaskPayload,
          type: "MERGE_RESOURCES"
        };

        const checklistsMergeResourcesAction = {
          resourceType: "checklists",
          resourcesById: normalizedJsonApiChecklistPayload,
          type: "MERGE_RESOURCES"
        };

        normalizeAndMergePayload(dispatch, { jsonApiPayload });
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

        normalizeAndMergePayload(dispatch, { graphQlPayload });
        expect(dispatch).toBeCalledWith(tasksMergeResourcesAction);
        expect(dispatch).toBeCalledWith(checklistsMergeResourcesAction);
        expect(dispatch).toMatchSnapshot();
      });
    });
  });
});
