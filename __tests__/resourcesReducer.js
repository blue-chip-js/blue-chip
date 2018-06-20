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
    it("benchmark small payload 100,000 times", async () => {
      await smallPayloadReducerCall();
    });
    it("benchmark huge payload 1000 times", async () => {
      await hugePayloadReducerCall();
    });
  });

  describe("ADD_OR_REPLACE_RESOURCE_BY_ID", () => {
    it("should update the store given a ADD_OR_REPLACE_RESOURCE_BY_ID action", () => {
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

      expect(reducer({}, updateAction)).toEqual({
        checklists: { [checklist.id]: checklist }
      });
      expect(
        reducer({}, { ...updateAction, attributes: { name: "changed" } })
      ).toEqual({
        checklists: {
          [checklist.id]: { ...checklist, attributes: { name: "changed" } }
        }
      });
    });
  });
});

function smallPayloadReducerCall() {
  return new Promise((resolve, reject) => {
    // increase this count to benchmark
    const itterationCount = 1;
    const array = Array(itterationCount).fill();
    array.forEach((n, index) => {
      const checklistsMergeResourcesAction = {
        resourceType: "checklists",
        resourcesById: normalizedJsonApiChecklistsPayload,
        type: "MERGE_RESOURCES"
      };

      const firstUpdatedState = reducer({}, checklistsMergeResourcesAction);
      if (index === array.length - 1) resolve(firstUpdatedState);
    });
  });
}

function hugePayloadReducerCall() {
  return new Promise((resolve, reject) => {
    // increase this count to benchmark
    const itterationCount = 1;
    const array = Array(itterationCount).fill();
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
