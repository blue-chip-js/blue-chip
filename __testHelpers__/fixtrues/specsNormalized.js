export default {
  index: {
    specs: [11, 12],
    specDetails: [7, 12],
    specDetailComs: [2, 3],
    specDetailRoomTypes: [2, 19, 4],
    specCategories: [7]
  },
  specs: {
    11: {
      id: 11,
      type: "specs",
      attributes: {specData: "Should show up"},
      relationships: {
        specDetails: {data: [{id: 12, type: "specDetails"}]},
        specCategory: {data: {id: 7, type: "specCategories"}}
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
        coms: {data: [{id: 2, type: "specDetailComs"}]},
        roomTypes: {
          data: [
            {id: 4, type: "specDetailRoomTypes"},
            {id: 2, type: "specDetailRoomTypes"}
          ]
        }
      }
    }
  },
  specDetailComs: {
    2: {
      id: 2,
      type: "specDetailComs",
      attributes: {comData: "Should show up"}
    },
    3: {
      id: 3,
      type: "specDetailComs",
      attributes: {comData: "Should not show up"}
    }
  },
  specDetailRoomTypes: {
    2: {
      id: 2,
      type: "specDetailRoomTypes",
      attributes: {roomTypeData: "Should show up"}
    },
    19: {
      id: 19,
      type: "specDetailRoomTypes",
      attributes: {roomTypeData: "Should not show up"}
    },
    4: {
      id: 4,
      type: "specDetailRoomTypes",
      attributes: {roomTypeData: "Should show up"}
    }
  },
  specCategories: {
    7: {
      id: 7,
      type: "specCategories",
      attributes: {specCategoryData: "Should show up"}
    }
  }
};
