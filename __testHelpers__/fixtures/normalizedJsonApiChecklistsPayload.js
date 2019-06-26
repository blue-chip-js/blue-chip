export default {
  "1": {
    attributes: { name: "Onboarding Rest" },
    id: 1,
    links: { self: "http://example.com/checklists/1" },
    relationships: {
      tasks: {
        data: [{ id: 1, type: "tasks" }, { id: 2, type: "tasks" }],
        links: {
          related: "http://example.com/checklists/1/tasks",
          self: "http://example.com/checklists/1/relationships/tasks"
        }
      }
    },
    type: "checklists"
  },
  "2": {
    attributes: { name: "Project Audit Rest" },
    id: 2,
    links: { self: "http://example.com/checklists/2" },
    relationships: {
      tasks: {
        data: [{ id: 3, type: "tasks" }, { id: 4, type: "tasks" }],
        links: {
          related: "http://example.com/checklists/2/tasks",
          self: "http://example.com/checklists/2/relationships/tasks"
        }
      }
    },
    type: "checklists"
  },
  "3": {
    attributes: { name: "QA Checklist Rest" },
    id: 3,
    links: { self: "http://example.com/checklists/3" },
    relationships: {
      tasks: {
        data: [{ id: 5, type: "tasks" }, { id: 6, type: "tasks" }],
        links: {
          related: "http://example.com/checklists/3/tasks",
          self: "http://example.com/checklists/3/relationships/tasks"
        }
      }
    },
    type: "checklists"
  }
};
