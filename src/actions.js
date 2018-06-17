import jsonApiNormalize from "json-api-normalizer";
import { GraphQLNormalizr } from "graphql-normalizr";

const graphQLNormalizr = new GraphQLNormalizr();
const graphQlNormalize = graphQLNormalizr.normalize;

const normalizeAndMergePayload = (
  dispatch,
  { jsonApiPayload, graphQlPayload }
) => {
  if (jsonApiPayload) {
    Object.entries(
      jsonApiNormalize(jsonApiPayload)
    ).forEach(([resourceType, resourcesById]) => {
      dispatch({
        type: "MERGE_RESOURCES",
        resourceType,
        resourcesById
      });
    });
  }

  if (graphQlPayload) {
    Object.entries(graphQlNormalize(graphQlPayload)).forEach(array => {
      const [resourceType, resourcesById] = array;
      dispatch({
        type: "MERGE_RESOURCES",
        resourceType,
        resourcesById: _convertToJsonApiSpec(resourceType, resourcesById)
      });
    });
  }
};

const dispatchUpdateResourcesByID = (
  dispatch,
  { jsonApiPayload, graphQlPayload }
) => {
  if (jsonApiPayload) {
    _dispatchAddOrReplaceAllJsonApiResources(
      dispatch,
      jsonApiNormalize(jsonApiPayload)
    );
  }

  if (graphQlPayload) {
    _dispatchAddOrReplaceAllGraphQlResources(
      dispatch,
      // TODO: fix this hard coded value
      "<resource-name>",
      graphQlNormalize(graphQlPayload)
    );
  }
};

const _dispatchAddOrReplaceAllJsonApiResources = (dispatch, resourcesById) => {
  Object.entries(resourcesById).forEach(([resourceType, resources]) => {
    Object.entries(
      resources
    ).forEach(([id, { type, attributes, links, relationships }]) => {
      dispatch({
        type: "ADD_OR_REPLACE_RESOURCE_BY_ID",
        resourceType,
        id,
        attributes,
        links,
        relationships
      });
    });
  });
};

// TODO: this is not quite done parsing the graphql
const _dispatchAddOrReplaceAllGraphQlResources = (
  dispatch,
  type,
  resourcesById
) => {
  Object.entries(resourcesById).forEach(([resourceType, resources]) => {
    Object.entries(resources).forEach(([id, resource]) => {
      dispatch({
        type: "ADD_OR_REPLACE_RESOURCE_BY_ID",
        resourceType,
        id,
        attributes: resource,
        links: null,
        relationships: _buildRelationships(resourceType, resource)
      });
    });
  });
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

export { normalizeAndMergePayload, dispatchUpdateResourcesByID };
