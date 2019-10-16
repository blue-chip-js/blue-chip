export default {
  index: {
    specs: [
      "220"
    ],
    specDetailRoomTypes: [
      "220"
    ],
    specDetails: [
      "220"
    ]
  },
  specs: {
    "220": {
      id: "220",
      type: "specs",
      attributes: {
        createdAt: "2019-10-15T18:25:52.906Z",
        updatedAt: "2019-10-15T18:25:52.906Z",
        projectId: "1",
        parentId: null,
        areaId: "23",
        specCategoryId: "2",
        fileCareWarrantyId: null,
        fileDesignerSpecsId: null,
        customNumber: "C20",
        description: "Regular Swivel Chair with long description including details about its aspect, dimentions and price",
        priceCurrency: "USD",
        unitOfMeasure: "EA",
        atticStock: 43,
        baseQuantity: 60,
        priceCents: 85492,
        clientBudgetCents: 1600,
        overagePercent: 85,
        isPlaceholder: false,
        bidGroupId: null,
        purchaseOrderId: "1",
        specDetailIdSequence: [
          "1976",
          "1979",
          "1981",
          "6051"
        ],
        vendorId: null,
        quoteFileId: null,
        invoiceFileId: null,
        shopDrawingsFileId: null,
        careWarrantyFileId: null,
        designedSpecsFileId: null,
        isCommitted: false,
        overageValue: 51,
        totalQuantity: 154,
        price: 854.92,
        totalPrice: 131657.68,
        totalForecast: 131657.68,
        totalQuantityWithoutOverage: 103
      },
      relationships: {
        specDetails: {
          data: [
            {
              id: "6051",
              type: "specDetails"
            },
            {
              id: "1981",
              type: "specDetails"
            },
            {
              id: "1979",
              type: "specDetails"
            },
            {
              id: "1976",
              type: "specDetails"
            }
          ]
        }
      }
    }
  },
  specDetailRoomTypes: {
    "1": {
      id: "1",
      type: "specDetailRoomTypes",
      attributes: {
        specDetailId: "6051",
        name: "AreaRoom 9",
        roomCount: 9,
        perRoom: 4,
        par: 4,
        createdAt: "2019-10-15T18:28:53.435Z",
        updatedAt: "2019-10-15T18:28:53.435Z"
      }
    },
    "2": {
      id: "2",
      type: "specDetailRoomTypes",
      attributes: {
        specDetailId: "6051",
        name: "AreaRoom 8",
        roomCount: 6,
        perRoom: 5,
        par: 6,
        createdAt: "2019-10-15T18:28:53.435Z",
        updatedAt: "2019-10-15T18:28:53.435Z"
      },
    },
    "3": {
      id: "3",
      type: "specDetailRoomTypes",
      attributes: {
        specDetailId: "6051",
        name: "AreaRoom 7",
        roomCount: 6,
        perRoom: 5,
        par: 6,
        createdAt: "2019-10-15T18:28:53.435Z",
        updatedAt: "2019-10-15T18:28:53.435Z"
      },
    }
  },
  specDetails: {
    "1976": {
      id: "1976",
      type: "specDetails",
      attributes: {
        specId: "220",
        title: "Score Fifteen",
        description: "Fallen Pet Thee About Health",
        unitsNeeded: 10,
        unitsPerCase: 11,
        createdAt: "2019-10-15T18:25:53.749Z",
        updatedAt: "2019-10-15T18:25:53.749Z",
        imageSrc: null,
        locked: false,
        type: "Description"
      },
      relationships: {
        roomTypes: {
          data: []
        },
        specDetailComs: {
          data: []
        }
      }
    },
    "1979": {
      id: "1979",
      type: "specDetails",
      attributes: {
        specId: "220",
        title: "Herd Somebody",
        description: "Small Partly Near Climb Actual",
        unitsNeeded: 10,
        unitsPerCase: 11,
        createdAt: "2019-10-15T18:25:53.749Z",
        updatedAt: "2019-10-15T18:25:53.749Z",
        imageSrc: null,
        locked: false,
        type: "Description"
      },
      relationships: {
        roomTypes: {
          data: []
        },
        specDetailComs: {
          data: []
        }
      }
    },
    "1981": {
      id: "1981",
      type: "specDetails",
      attributes: {
        specId: "220",
        title: "Itself Machinery",
        description: "Larger Dead Fewer Valley Selection",
        unitsNeeded: 10,
        unitsPerCase: 11,
        createdAt: "2019-10-15T18:25:53.749Z",
        updatedAt: "2019-10-15T18:25:53.749Z",
        imageSrc: null,
        locked: false,
        type: "Description"
      },
      relationships: {
        roomTypes: {
          data: []
        },
        specDetailComs: {
          data: []
        }
      }
    },
    "6051": {
      id: "6051",
      type: "specDetails",
      attributes: {
        specId: "220",
        title: null,
        description: null,
        unitsNeeded: null,
        unitsPerCase: 4,
        createdAt: "2019-10-15T18:28:53.422Z",
        updatedAt: "2019-10-15T18:28:53.422Z",
        imageSrc: null,
        locked: false,
        type: "QCParBased"
      },
      relationships: {
        roomTypes: {
          data: [
            {
              id: "1",
              type: "specDetailRoomTypes"
            },
            {
              id: "2",
              type: "specDetailRoomTypes"
            },
            {
              id: "3",
              type: "specDetailRoomTypes"
            }
          ]
        },
        specDetailComs: {
          data: []
        }
      }
    }
  }
};