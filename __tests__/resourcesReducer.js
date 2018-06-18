import reducer from "../lib/resourcesReducer";
import normalizedJsonApiChecklistsPayload
  from "../__testHelpers__/fixtrues/normalizedJsonApiChecklistsPayload";
import normalizedJsonApiTasksPayload
  from "../__testHelpers__/fixtrues/normalizedJsonApiTasksPayload";
import hugeNormalizedJsonApiChecklistsPayload
  from "../__testHelpers__/fixtrues/hugeNormalizedJsonApiChecklistsPayload";

describe("post reducer", () => {
  describe("MERGE_RESOURCES", () => {
    it("should return the initial state", () => {
      expect(reducer(undefined, {})).toEqual({});
    });

    it("should update the store given a MERGE_RESOURCES action", () => {
      const checklistsMergeResourcesAction = {
        resourceType: "tasks",
        resourcesById: normalizedJsonApiChecklistsPayload,
        type: "MERGE_RESOURCES"
      };

      expect(reducer({}, checklistsMergeResourcesAction)).toEqual({
        tasks: normalizedJsonApiChecklistsPayload
      });
    });

    it("should handle multiple resources given multiple MERGE_RESOURCES", () => {
      const checklistsMergeResourcesAction = {
        resourceType: "checklists",
        resourcesById: normalizedJsonApiChecklistsPayload,
        type: "MERGE_RESOURCES"
      };

      const tasksMergeResourcesAction = {
        resourceType: "tasks",
        resourcesById: normalizedJsonApiTasksPayload,
        type: "MERGE_RESOURCES"
      };

      const firstUpdatedState = reducer({}, checklistsMergeResourcesAction);

      expect(reducer(firstUpdatedState, tasksMergeResourcesAction)).toEqual({
        checklists: normalizedJsonApiChecklistsPayload,
        tasks: normalizedJsonApiTasksPayload
      });
    });

    it("should handle multiple updates with the same resources", () => {
      const checklistsMergeResourcesAction = {
        resourceType: "checklists",
        resourcesById: normalizedJsonApiChecklistsPayload,
        type: "MERGE_RESOURCES"
      };

      const firstUpdatedState = reducer({}, checklistsMergeResourcesAction);

      expect(
        reducer(firstUpdatedState, checklistsMergeResourcesAction)
      ).toEqual({ checklists: normalizedJsonApiChecklistsPayload });
    });

    it("benchmark small payload 100,000 times", () => {
      smallPayloadReducerCall();
    });

    it("benchmark huge payload 1000 times", () => {
      hugePayloadReducerCall();
    });
  });
});

function smallPayloadReducerCall() {
  return new Promise((resolve, reject) => {
    const array = Array(1000).fill();
    array.forEach(() => {
      const checklistsMergeResourcesAction = {
        resourceType: "checklists",
        resourcesById: normalizedJsonApiChecklistsPayload,
        type: "MERGE_RESOURCES"
      };

      const firstUpdatedState = reducer({}, checklistsMergeResourcesAction);
      if (index === array.length - 1) resolve();
    });
  });
}

function hugePayloadReducerCall() {
  return new Promise((resolve, reject) => {
    const array = Array(1000).fill();
    array.forEach((n, index) => {
      const checklistsMergeResourcesAction = {
        resourceType: "checklists",
        resourcesById: hugeNormalizedJsonApiChecklistsPayload,
        type: "MERGE_RESOURCES"
      };

      const firstUpdatedState = reducer({}, checklistsMergeResourcesAction);
      if (index === array.length - 1) resolve();
    });
  });
}
