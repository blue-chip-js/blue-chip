export default {
  index: {
    purchaseOrders: [1],
    contacts: [1],
    purchaseOrderContacts: [1],
    vendors: [1],
    vendorContacts: [1]
  },
  purchaseOrders: {
    1: {
      id: 1,
      type: "purchaseOrders",
      attributes: {i: "j"}
    }
  },
  contacts: {
    1: {
      id: 1,
      type: "contacts",
      attributes: {g: "h"}
    }
  },
  purchaseOrderContacts: {
    1: {
      id: 1,
      type: "purchaseOrderContacts",
      attributes: {d: "f"},
      relationships: {
        vendorContact: {data: {id: 1, type: "vendorContacts"}}
      }
    }
  },
  vendors: {
    1: {
      id: 1,
      type: "vendors",
      attributes: {b: "c"}
    }
  },
  vendorContacts: {
    1: {
      id: 1,
      type: "vendorContacts",
      attributes: {a: "b"},
      relationships: {
        contact: {data: {id: 1, type: "contact"}}
      }
    }
  }
};
