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
      if (_isRedux(storeUpdater)) {
        // if it is a function asume it is Redux dispatch
        storeUpdater({
          type: "MERGE_RESOURCES",
          resourceType,
          resourcesById: _convertToJsonApiSpec(resourceType, resourcesById)
        });
      } else if (_isMobx(storeUpdater)) {
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
      if (_isRedux(storeUpdater)) {
        // if it is a function asume it is Redux dispatch
        storeUpdater({
          type: "MERGE_RESOURCES",
          resourceType,
          resourcesById
        });
      } else if (_isMobx(storeUpdater)) {
        // TODO: pull out into a helper function.  Same method used in the reducer
        Object.entries(resourcesById).forEach(([id, resource]) => {
          if (!storeUpdater[resourceType]) {
            storeUpdater[resourceType] = {};
          }
          storeUpdater[resourceType][id] = resource;
        });
      } else if (_isSetState(storeUpdater)) {
        Object.entries(resourcesById).forEach(([id, resource]) => {
          storeUpdater(state => {
            if (!state.resources[resourceType]) {
              state.resources[resourceType] = {};
            }

            state.resources[resourceType][id] = resource;
            return state;
          });
        });
      }
    });
  }
};

const updateResource = (
  { id, type, attributes, links, relationships },
  storeUpdater
) => {
  if (_isRedux(storeUpdater)) {
    storeUpdater({
      type: "ADD_OR_REPLACE_RESOURCE_BY_ID",
      resourceType: type,
      id,
      attributes,
      links,
      relationships: relationships || _buildRelationships(type, attributes)
    });
  } else if (_isMobx(storeUpdater)) {
    if (!(type in storeUpdater)) {
      storeUpdater[type] = {};
    }

    storeUpdater[type][id] = {
      type,
      id,
      attributes,
      links,
      relationships: relationships || _buildRelationships(type, attributes)
    };
  } else if (_isSetState(storeUpdater)) {
    storeUpdater(state => {
      if (!(type in state.resources)) {
        state.resources[type] = {};
      }

      state.resources[type][id] = {
        type,
        id,
        attributes,
        links,
        relationships: relationships || _buildRelationships(type, attributes)
      };
      return state;
    });
  }
};

const removeResource = ({ id, type }, storeUpdater) => {
  if (_isRedux(storeUpdater)) {
    storeUpdater({
      type: "REMOVE_RESOURCE_BY_ID",
      resourceType: type,
      id
    });
  } else if (_isMobx(storeUpdater)) {
    delete storeUpdater[type][id];
  }
};

const removeResources = (resources, storeUpdater) => {
  if (_isRedux(storeUpdater)) {
    storeUpdater({
      type: "REMOVE_RESOURCES_BY_ID",
      resources
    });
  } else if (_isMobx(storeUpdater)) {
    resources.forEach(({ type, id }) => {
      delete storeUpdater[type][id];
    });
  }
};

const clearResources = (resourceTypes, storeUpdater) => {
  if (_isRedux(storeUpdater)) {
    storeUpdater({
      type: "CLEAR_RESOURCES",
      resourceTypes
    });
  } else if (_isMobx(storeUpdater)) {
    resourceTypes.forEach(resourceType => {
      storeUpdater[resourceType] = {};
    });
  }
};

const _isRedux = storeUpdater => {
  return storeUpdater.name === "dispatch";
};

const _isMobx = storeUpdater => {
  return typeof storeUpdater === "object";
};

const _isSetState = storeUpdater => {
  return typeof storeUpdater === "function";
};

const _isGraphQl = payload => {
  return (
    payload["data"] && payload["data"][0] && "__typename" in payload["data"][0]
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

export {
  updateResources,
  updateResource,
  removeResource,
  removeResources,
  clearResources
};
