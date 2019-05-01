export default {
  index: {
    specDetails: [1, 2],
    specs: [11],
    areas: [51],
    specDetailComs: [99],
    specCategories: [7]
  },
  specs: {
    11: {
      id: 11,
      type: "specs",
      attributes: {specData: "Should show up"},
      relationships: {
        area: {data: {id: 51, type: "areas"}},
        specDetails: [{data: {id: 1, type: "specDetails"}}, {data: {id: 2, type: "specDetails"}}],
        specCategory: {data: {id: 7, type: "specCategories"}}
      }
    }
  },
  specDetails: {
    1: {
      id: 1,
      type: "specDetails",
      attributes: {specDetailsData: "Should show up 1"}
    },
    2: {
      id: 2,
      type: "specDetails",
      attributes: {specDetailsData: "Should show up 2"}
    }
  },
  specDetailComs: {
    99: {
      id: 99,
      type: "specDetailComs",
      attributes: {comData: "Should show up"},
      relationships: {
        spec: {data: {id: 11, type: "specs"}}
      }
    }
  },
  specCategories: {
    7: {
      id: 7,
      type: "specCategories",
      attributes: {specCategoryData: "Should show up"}
    }
  },
  areas: {
    51: {
      id: 51,
      type: "areas",
      attributes: {areasData: "Should show up"}
    }
  }
};
