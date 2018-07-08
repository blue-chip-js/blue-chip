export const GraphQL = "GraphQL";
export const JsonAPI = "JsonAPI";

export const isGraphQl = payload => {
  return (
    payload["data"] && payload["data"][0] && "__typename" in payload["data"][0]
  );
};

export const isRedux = mutator => {
  return (
    mutator.name === "dispatch" ||
    (typeof mutator.toString() === "string" &&
      !!mutator.toString().match(/dispatch/))
  );
};

export const isMobx = mutator => {
  return typeof mutator === "object";
};

export const isSetState = mutator => {
  return typeof mutator === "function";
};

export const isVuex = mutator => {
  return (
    mutator.name === "boundCommit" ||
    (typeof mutator.toString() === "string" &&
      !!mutator.toString().match(/boundCommit/))
  );
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
      relationships: buildRelationships(resource)
    };

    return formattedResourcesById;
  }, {});
};

export const buildRelationships = resource => {
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
