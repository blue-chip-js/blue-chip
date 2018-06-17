export default {
  checklists: {
    1: {
      id: 1,
      type: "checklists",
      attributes: { name: "Onboarding Rest" },
      links: { self: "http://example.com/checklists/1" },
      relationships: {
        tasks: { data: [{ id: 1, type: "tasks" }, { id: 2, type: "tasks" }] }
      }
    },
    2: {
      id: 2,
      type: "checklists",
      attributes: { name: "Project Audit Rest" },
      links: { self: "http://example.com/checklists/2" },
      relationships: {
        tasks: { data: [{ id: 3, type: "tasks" }, { id: 4, type: "tasks" }] }
      }
    },
    3: {
      id: 3,
      type: "checklists",
      attributes: { name: "QA Checklist Rest" },
      links: { self: "http://example.com/checklists/3" },
      relationships: {
        tasks: { data: [{ id: 5, type: "tasks" }, { id: 6, type: "tasks" }] }
      }
    }
  },
  tasks: {
    1: {
      id: 1,
      type: "tasks",
      attributes: { description: "Onboarding REST 1" },
      links: { self: "http://example.com/tasks/1" }
    },
    2: {
      id: 2,
      type: "tasks",
      attributes: { description: "Onboarding REST 2" },
      links: { self: "http://example.com/tasks/2" }
    },
    3: {
      id: 3,
      type: "tasks",
      attributes: { description: "Project Audit Rest 3" },
      links: { self: "http://example.com/tasks/3" }
    },
    4: {
      id: 4,
      type: "tasks",
      attributes: { description: "Project Audit Rest 4" },
      links: { self: "http://example.com/tasks/4" }
    },
    5: {
      id: 5,
      type: "tasks",
      attributes: { description: "QA Checklist Rest 5" },
      links: { self: "http://example.com/tasks/5" }
    },
    6: {
      id: 6,
      type: "tasks",
      attributes: { description: "QA Checklist Rest 6" },
      links: { self: "http://example.com/tasks/6" }
    }
  }
};
