export default {
  index: {
    specDetails: [1, 2],
    specs: [11],
    areas: [51],
    specDetailComs: [99],
    specCategories: [7]
  },
  specs: {
    10: {
      id: 10,
      type: "specs",
      attributes: {specData: "Should NOT show up"},
      relationships: {
        area: {data: {id: 50, type: "areas"}},
        specDetails: {
          data: [{id: 3, type: "specDetails"}, {id: 4, type: "specDetails"}]
        },
        specCategory: {data: {id: 6, type: "specCategories"}}
      }
    },
    11: {
      id: 11,
      type: "specs",
      attributes: {specData: "Should show up"},
      relationships: {
        area: {data: {id: 51, type: "areas"}},
        specDetails: {
          data: [{id: 1, type: "specDetails"}, {id: 2, type: "specDetails"}]
        },
        specCategory: {data: {id: 7, type: "specCategories"}}
      }
    },
    12: {
      id: 12,
      type: "specs",
      attributes: {specData: "Should show up"},
      relationships: {
        area: {data: {id: 51, type: "areas"}},
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
    },
    3: {
      id: 3,
      type: "specDetails",
      attributes: {specDetailsData: "Should NOT show up 1"}
    },
    4: {
      id: 4,
      type: "specDetails",
      attributes: {specDetailsData: "Should NOT show up 2"}
    },
    5: {
      id: 5,
      type: "specDetails",
      attributes: {specDetailsData: "Should show up"},
      relationships: {
        spec: {data: {id: 12, type: "specs"}}
      }
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
    },
    98: {
      id: 98,
      type: "specDetailComs",
      attributes: {comData: "Should NOT show up"},
      relationships: {
        spec: {data: {id: 11, type: "specs"}}
      }
    },
    97: {
      id: 97,
      type: "specDetailComs",
      attributes: {comData: "Should show up"},
      relationships: {
        specDetail: {data: {id: 5, type: "specDetails"}}
      }
    }
  },
  specCategories: {
    6: {
      id: 6,
      type: "specCategories",
      attributes: {specCategoryData: "Should NOT show up"}
    },
    7: {
      id: 7,
      type: "specCategories",
      attributes: {specCategoryData: "Should show up"}
    }
  },
  areas: {
    50: {
      id: 50,
      type: "areas",
      attributes: {areasData: "Should NOT show up"}
    },
    51: {
      id: 51,
      type: "areas",
      attributes: {areasData: "Should show up"}
    }
  }
};
