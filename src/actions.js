import jsonApiNormalize from "json-api-normalizer";
import { GraphQLNormalizr } from "graphql-normalizr";
import { Validator } from "jsonapi-validator";

const jsonApiValidator = new Validator();
const graphQLNormalizr = new GraphQLNormalizr();
const graphQlNormalize = graphQLNormalizr.normalize;

const updateResources = (payload, dispatch) => {
  if (_isGraphQl(payload)) {
    _tryNormalizingGraphQl(payload, dispatch);
  } else {
    _tryNormalizingJsonAPi(payload, dispatch);
  }
};

const updateResource = (
  { id, type, attributes, links, relationships },
  dispatch
) => {
  dispatch({
    type: "ADD_OR_REPLACE_RESOURCE_BY_ID",
    resourceType: type,
    id,
    attributes,
    links,
    relationships: relationships || _buildRelationships(type, attributes)
  });
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

const _tryNormalizingJsonAPi = (payload, dispatch) => {
  try {
    Object.entries(
      jsonApiNormalize(payload)
    ).forEach(([resourceType, resourcesById]) => {
      dispatch({
        type: "MERGE_RESOURCES",
        resourceType,
        resourcesById
      });
    });
  } catch (error) {
    console.log(error);
  }
};

const _tryNormalizingGraphQl = (payload, dispatch) => {
  try {
    Object.entries(graphQlNormalize(payload)).forEach(array => {
      const [resourceType, resourcesById] = array;
      dispatch({
        type: "MERGE_RESOURCES",
        resourceType,
        resourcesById: _convertToJsonApiSpec(resourceType, resourcesById)
      });
    });
  } catch (error) {
    console.log(error);
  }
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
