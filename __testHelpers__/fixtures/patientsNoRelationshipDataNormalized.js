export default {
  index: {
    patients: ["667","668","669"],
  },
  patients: {
    "667": {
      id: "667",
      type: "patients",
      attributes: {
        patientId: "0000",
        customers: ["0000"],
        serialNumbers: ["21601009"],
        createdAt: "2018-10-08T18:39:33.000Z",
        lastSessionDate: "2016-10-01T00:00:00.000Z",
        myPatient: true,
        sessionsCount: 127001,
        steps: 24099980,
        upTime: 68599053
      },
      relationships: {
        indication: {data: {id: "1", type: "indications"}},
        settingOfUse: {data: {id: "1", type: "settingOfUses"}},
        devices: {
          data: [{id: "1", type: "devices"}, {id: "9", type: "devices"}]
        }
      }
    },
    "668": {
        id: "668",
        type: "patients",
        attributes: {
          patientId: "0001",
          customers: ["0001"],
          serialNumbers: ["21601009"],
          createdAt: "2018-10-08T18:39:33.000Z",
          lastSessionDate: "2016-10-01T00:00:00.000Z",
          myPatient: true,
          sessionsCount: 127001,
          steps: 24099980,
          upTime: 68599053
        },
        relationships: {
          indication: {data: {id: "2", type: "indications"}},
          settingOfUse: {data: {id: "2", type: "settingOfUses"}},
          devices: {
            data: [{id: "1", type: "devices"}, {id: "9", type: "devices"}]
          }
        }
      },
      "669": {
        id: "669",
        type: "patients",
        attributes: {
          patientId: "0002",
          customers: ["0002"],
          serialNumbers: ["21601009"],
          createdAt: "2018-10-08T18:39:33.000Z",
          lastSessionDate: "2016-10-01T00:00:00.000Z",
          myPatient: true,
          sessionsCount: 127001,
          steps: 24099980,
          upTime: 68599053
        },
        relationships: {
          indication: {data: {id: "3", type: "indications"}},
          settingOfUse: {data: {id: "1", type: "settingOfUses"}},
          devices: {
            data: [{id: "1", type: "devices"}, {id: "9", type: "devices"}]
          }
        }
      }
  },
};
