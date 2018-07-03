export const GraphQL = "GraphQL";
export const JsonAPI = "JsonAPI";

export const isGraphQl = payload => {
  return (
    payload["data"] && payload["data"][0] && "__typename" in payload["data"][0]
  );
};

export const isRedux = storeUpdater => {
  return (
    storeUpdater.name === "dispatch" ||
    (typeof storeUpdater.toString() === "string" &&
      !!storeUpdater.toString().match(/dispatch/))
  );
};

export const isMobx = storeUpdater => {
  return typeof storeUpdater === "object";
};

export const isSetState = storeUpdater => {
  return typeof storeUpdater === "function";
};

export const toJsonApiSpec = (resourceType, resourcesById) => {
  return Object.entries(
    resourcesById
  ).reduce((formattedResourcesById, [id, resource]) => {
    formattedResourcesById[id] = {
      type: resourceType,
      id,
      attributes: _removeRelationships(resource),
      links: null,
      relationships: _buildRelationships(resource)
    };

    return formattedResourcesById;
  }, {});
};

const _buildRelationships = resource => {
  return Object.entries(resource).reduce((newObject, [key, value]) => {
    if (value && Array.isArray(value)) {
      if (!newObject[key]) {
        newObject[key] = {data: []};
      }

      newObject[key].data = value.map(id => ({type: key, id}));
    }

    if (value && typeof value === "object") {
      // TODO: handle hasOne and belongsTo
    }
    return newObject;
  }, {});
};

const _removeRelationships = resource => {
  return Object.entries(resource).reduce((newObject, [key, value]) => {
    if (
      !(value && Array.isArray(value)) ||
      !(value && typeof value === "object")
    ) {
      newObject[key] = value;
    }
    return newObject;
  }, {});
};
