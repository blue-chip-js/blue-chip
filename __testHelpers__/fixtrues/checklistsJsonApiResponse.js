export default {
  links: {
    self: "http://example.com/checklists",
    next: "http://example.com/checklists?page[offset]=2",
    last: "http://example.com/checklists?page[offset]=10"
  },
  data: [
    {
      type: "checklists",
      id: 1,
      attributes: {
        name: "Onboarding Rest"
      },
      relationships: {
        tasks: {
          links: {
            self: "http://example.com/checklists/1/relationships/tasks",
            related: "http://example.com/checklists/1/tasks"
          },
          data: [{ type: "tasks", id: 1 }, { type: "tasks", id: 2 }]
        }
      },
      links: {
        self: "http://example.com/checklists/1"
      }
    },
    {
      type: "checklists",
      id: 2,
      attributes: {
        name: "Project Audit Rest"
      },
      relationships: {
        tasks: {
          links: {
            self: "http://example.com/checklists/2/relationships/tasks",
            related: "http://example.com/checklists/2/tasks"
          },
          data: [{ type: "tasks", id: 3 }, { type: "tasks", id: 4 }]
        }
      },
      links: {
        self: "http://example.com/checklists/2"
      }
    },
    {
      type: "checklists",
      id: 3,
      attributes: {
        name: "QA Checklist Rest"
      },
      relationships: {
        tasks: {
          links: {
            self: "http://example.com/checklists/3/relationships/tasks",
            related: "http://example.com/checklists/3/tasks"
          },
          data: [{ type: "tasks", id: 5 }, { type: "tasks", id: 6 }]
        }
      },
      links: {
        self: "http://example.com/checklists/3"
      }
    }
  ],
  included: [
    {
      type: "tasks",
      id: 1,
      attributes: {
        description: "Onboarding REST 1"
      },
      links: {
        self: "http://example.com/tasks/1"
      }
    },
    {
      type: "tasks",
      id: 2,
      attributes: {
        description: "Onboarding REST 2"
      },
      links: {
        self: "http://example.com/tasks/2"
      }
    },
    {
      type: "tasks",
      id: 3,
      attributes: {
        description: "Project Audit Rest 3"
      },
      links: {
        self: "http://example.com/tasks/3"
      }
    },
    {
      type: "tasks",
      id: 4,
      attributes: {
        description: "Project Audit Rest 4"
      },
      links: {
        self: "http://example.com/tasks/4"
      }
    },
    {
      type: "tasks",
      id: 5,
      attributes: {
        description: "QA Checklist Rest 5"
      },
      links: {
        self: "http://example.com/tasks/5"
      }
    },
    {
      type: "tasks",
      id: 6,
      attributes: {
        description: "QA Checklist Rest 6"
      },
      links: {
        self: "http://example.com/tasks/6"
      }
    }
  ]
};
