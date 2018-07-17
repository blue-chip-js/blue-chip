export const GraphQL = "GraphQL";
export const JsonAPI = "JsonAPI";

export const isGraphQl = payload => {
  return (
    payload["data"] && payload["data"][0] && "__typename" in payload["data"][0]
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
