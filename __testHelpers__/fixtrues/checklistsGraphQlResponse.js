export default {
  meta: {
    total: 3,
    count: 3,
    offset: 0,
    error: null
  },
  data: [
    {
      id: 4,
      __typename: "Checklist",
      name: "Onboarding GraphQL",
      tasks: [
        {
          id: 7,
          __typename: "Task",
          description: "Onboarding Graph 7"
        },
        {
          id: 8,
          __typename: "Task",
          description: "Onboarding Graph 8"
        }
      ]
    },
    {
      id: 5,
      __typename: "Checklist",
      name: "Project Audit GraphQL",
      tasks: [
        {
          id: 9,
          __typename: "Task",
          description: "Project Audit Graph 9"
        },
        {
          id: 10,
          __typename: "Task",
          description: "Project Audit Graph 10"
        }
      ]
    },
    {
      id: 6,
      __typename: "Checklist",
      name: "QA Checklist GraphQL",
      tasks: [
        {
          id: 11,
          __typename: "Task",
          description: "QA Checklist Graph 11"
        },
        {
          id: 12,
          __typename: "Task",
          description: "QA Checklist Graph 12"
        }
      ]
    }
  ]
};
