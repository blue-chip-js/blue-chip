export default {
  index: {
    purchaseOrders: [11],
    contacts: [12],
    purchaseOrderContacts: [13],
    vendors: [14],
    vendorContacts: [15]
  },
  purchaseOrders: {
    11: {
      id: 11,
      type: "purchaseOrders",
      attributes: {i: "j"}
    }
  },
  contacts: {
    12: {
      id: 12,
      type: "contacts",
      attributes: {contactData: "a"}
    }
  },
  purchaseOrderContacts: {
    13: {
      id: 13,
      type: "purchaseOrderContacts",
      attributes: {pocData: "f"},
      relationships: {
        vendorContact: {data: {id: 15, type: "vendorContacts"}}
      }
    }
  },
  vendors: {
    14: {
      id: 14,
      type: "vendors",
      attributes: {b: "c"}
    }
  },
  vendorContacts: {
    15: {
      id: 15,
      type: "vendorContacts",
      attributes: {vcData: "b"},
      relationships: {
        contact: {data: {id: 12, type: "contact"}}
      }
    }
  }
};
