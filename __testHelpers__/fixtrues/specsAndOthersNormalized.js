export default {
  index: {
    specs: [11, 12],
    specDetails: [7, 12],
    coms: [2, 3]
  },
  specs: {
    11: {
      id: 11,
      type: "specs",
      attributes: {specData: "Should show up"},
      relationships: {
        specDetails: {data: {id: 12, type: "specDetails"}}
      }
    },
    12: {
      id: 12,
      type: "specs",
      attributes: {specData: "Should not show up"}
    }
  },
  specDetails: {
    7: {
      id: 7,
      type: "specDetails",
      attributes: {specDetailData: "Should not show up"}
    },
    12: {
      id: 12,
      type: "specDetails",
      attributes: {specDetailData: "Should show up"},
      relationships: {
        coms: {data: {id: 2, type: "coms"}}
      }
    }
  },
  coms: {
    2: {
      id: 2,
      type: "coms",
      attributes: {comData: "Should show up"}
    },
    3: {
      id: 3,
      type: "coms",
      attributes: {comData: "Should not show up"}
    }
  }
};
