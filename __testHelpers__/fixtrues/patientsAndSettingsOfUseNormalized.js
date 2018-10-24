export default {
  index: {
    patients: [1],
    settingOfUses: [1]
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
    }
  },
  settingOfUses: {
    "1": {
      id: "1",
      type: "settingOfUses",
      attributes: {name: "Inpatient"}
    }
  }
};
