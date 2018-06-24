import jsonApiNormalize from "json-api-normalizer";
import { GraphQLNormalizr } from "graphql-normalizr";
import { Validator } from "jsonapi-validator";

const jsonApiValidator = new Validator();
const graphQLNormalizr = new GraphQLNormalizr();
const graphQlNormalize = graphQLNormalizr.normalize;

const updateResources = (payload, storeUpdater) => {
  if (_isGraphQl(payload)) {
    // TODO: refactor and abstract these.  Several functions can be pulled out
    Object.entries(graphQlNormalize(payload)).forEach(array => {
      const [resourceType, resourcesById] = array;
      if (typeof storeUpdater === "function") {
        // if it is a function asume it is Redux dispatch
        storeUpdater({
          type: "MERGE_RESOURCES",
          resourceType,
          resourcesById: _convertToJsonApiSpec(resourceType, resourcesById)
        });
      } else if (typeof storeUpdater === "object") {
        // if it is a function asume it is MobX resources store
        // TODO: pull out into a helper function.  Same method used in the reducer
        Object.entries(
          _convertToJsonApiSpec(resourceType, resourcesById)
        ).forEach(([id, resource]) => {
          if (!storeUpdater[resourceType]) {
            storeUpdater[resourceType] = {};
          }
          storeUpdater[resourceType][id] = resource;
        });
      }
    });
  } else {
    Object.entries(
      jsonApiNormalize(payload)
    ).forEach(([resourceType, resourcesById]) => {
      if (typeof storeUpdater === "function") {
        // if it is a function asume it is Redux dispatch
        storeUpdater({
          type: "MERGE_RESOURCES",
          resourceType,
          resourcesById
        });
      } else if (typeof storeUpdater === "object") {
        // TODO: pull out into a helper function.  Same method used in the reducer
        Object.entries(resourcesById).forEach(([id, resource]) => {
          if (!storeUpdater[resourceType]) {
            storeUpdater[resourceType] = {};
          }
          storeUpdater[resourceType][id] = resource;
        });
      }
    });
  }
};

const updateResource = (
  { id, type, attributes, links, relationships },
  storeUpdater
) => {
  if (typeof storeUpdater === "function") {
    storeUpdater({
      type: "ADD_OR_REPLACE_RESOURCE_BY_ID",
      resourceType: type,
      id,
      attributes,
      links,
      relationships: relationships || _buildRelationships(type, attributes)
    });
  } else if (typeof storeUpdater === "object") {
    if (!(resourceType in storeUpdater)) {
      storeUpdater[resourceType] = {};
    }

    storeUpdater[resourceType][id] = {
      type,
      id,
      attributes,
      links,
      relationships: relationships || _buildRelationships(type, attributes)
    };
  }
};

const removeResource = ({ id, type }, dispatch) => {
  dispatch({
    type: "REMOVE_RESOURCE_BY_ID",
    resourceType: type,
    id
  });
};

const _isGraphQl = payload => {
  return (
    payload["data"] &&
    payload["data"][0] &&
    payload["data"][0] &&
    "__typename" in payload["data"][0]
  );
};

const _buildRelationships = (type, resource) => {
  return Object.entries(resource).reduce((newObject, [key, value]) => {
    if (value && Array.isArray(value)) {
      if (!newObject[key]) {
        newObject[key] = { data: [] };
      }

      newObject[key].data = value.map(id => ({ type: key, id }));
    }

    if (value && typeof value === "object") {
      // TODO: handle hasOne and belongsTo
    }
    return newObject;
  }, {});
};

const _convertToJsonApiSpec = (resourceType, resourcesById) => {
  return Object.entries(
    resourcesById
  ).reduce((formattedResourcesById, [id, resource]) => {
    formattedResourcesById[id] = {
      type: resourceType,
      id,
      attributes: resource,
      links: null,
      relationships: _buildRelationships(resourceType, resource)
    };

    return formattedResourcesById;
  }, {});
};

export { updateResources, updateResource, removeResource };
