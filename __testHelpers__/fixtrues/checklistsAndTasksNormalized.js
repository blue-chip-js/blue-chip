export default {
  index: {
    checklists: [3,1,2],
    tasks: [1,2,3,4,5,6],
  },
  checklists: {
    1: {
      id: 1,
      type: "checklists",
      attributes: {name: "Onboarding Rest"},
      links: {self: "http://example.com/checklists/1"},
      relationships: {
        tasks: {data: [{id: 1, type: "tasks"}, {id: 2, type: "tasks"}]}
      }
    },
    2: {
      id: 2,
      type: "checklists",
      attributes: {name: "Project Audit Rest"},
      links: {self: "http://example.com/checklists/2"},
      relationships: {
        tasks: {data: [{id: 3, type: "tasks"}, {id: 4, type: "tasks"}]}
      }
    },
    3: {
      id: 3,
      type: "checklists",
      attributes: {name: "QA Checklist Rest"},
      links: {self: "http://example.com/checklists/3"},
      relationships: {
        tasks: {data: [{id: 5, type: "tasks"}, {id: 6, type: "tasks"}]}
      }
    }
  },
  tasks: {
    1: {
      id: 1,
      type: "tasks",
      attributes: {description: "Onboarding REST 1"},
      links: {self: "http://example.com/tasks/1"},
      relationships: {
        checklist: {data: {id: 1, type: "checklists"}}
      }
    },
    2: {
      id: 2,
      type: "tasks",
      attributes: {description: "Onboarding REST 2"},
      links: {self: "http://example.com/tasks/2"},
      relationships: {
        checklist: {data: {id: 1, type: "checklists"}}
      }
    },
    3: {
      id: 3,
      type: "tasks",
      attributes: {description: "Project Audit Rest 3"},
      links: {self: "http://example.com/tasks/3"},
      relationships: {
        checklist: {data: {id: 2, type: "checklists"}}
      }
    },
    4: {
      id: 4,
      type: "tasks",
      attributes: {description: "Project Audit Rest 4"},
      links: {self: "http://example.com/tasks/4"},
      relationships: {
        checklist: {data: {id: 2, type: "checklists"}}
      }
    },
    5: {
      id: 5,
      type: "tasks",
      attributes: {description: "QA Checklist Rest 5"},
      links: {self: "http://example.com/tasks/5"},
      relationships: {
        checklist: {data: {id: 3, type: "checklists"}}
      }
    },
    6: {
      id: 6,
      type: "tasks",
      attributes: {description: "QA Checklist Rest 6"},
      links: {self: "http://example.com/tasks/6"},
      relationships: {
        checklist: {data: {id: 3, type: "checklists"}}
      }
    }
  }
};
