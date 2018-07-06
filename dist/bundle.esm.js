import jsonApiNormalize from 'json-api-normalizer';
import { GraphQLNormalizr } from 'graphql-normalizr';
import pluralize from 'pluralize';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var PROXY_STATE = typeof Symbol !== "undefined" ? Symbol("immer-proxy-state") : "__$immer_state";

var RETURNED_AND_MODIFIED_ERROR = "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.";

function verifyMinified() {}

var inProduction = typeof process !== "undefined" && process.env.NODE_ENV === "production" || verifyMinified.name !== "verifyMinified";

var autoFreeze = !inProduction;
var useProxies = typeof Proxy !== "undefined";

function getUseProxies() {
    return useProxies;
}

function isProxy(value) {
    return !!value && !!value[PROXY_STATE];
}

function isProxyable(value) {
    if (!value) return false;
    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object") return false;
    if (Array.isArray(value)) return true;
    var proto = Object.getPrototypeOf(value);
    return proto === null || proto === Object.prototype;
}

function freeze(value) {
    if (autoFreeze) {
        Object.freeze(value);
    }
    return value;
}

var assign = Object.assign || function assign(target, value) {
    for (var key in value) {
        if (has(value, key)) {
            target[key] = value[key];
        }
    }
    return target;
};

function shallowCopy(value) {
    if (Array.isArray(value)) return value.slice();
    var target = value.__proto__ === undefined ? Object.create(null) : {};
    return assign(target, value);
}

function each(value, cb) {
    if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) {
            cb(i, value[i]);
        }
    } else {
        for (var key in value) {
            cb(key, value[key]);
        }
    }
}

function has(thing, prop) {
    return Object.prototype.hasOwnProperty.call(thing, prop);
}

// given a base object, returns it if unmodified, or return the changed cloned if modified
function finalize(base) {
    if (isProxy(base)) {
        var state = base[PROXY_STATE];
        if (state.modified === true) {
            if (state.finalized === true) return state.copy;
            state.finalized = true;
            return finalizeObject(useProxies ? state.copy : state.copy = shallowCopy(base), state);
        } else {
            return state.base;
        }
    }
    finalizeNonProxiedObject(base);
    return base;
}

function finalizeObject(copy, state) {
    var base = state.base;
    each(copy, function (prop, value) {
        if (value !== base[prop]) copy[prop] = finalize(value);
    });
    return freeze(copy);
}

function finalizeNonProxiedObject(parent) {
    // If finalize is called on an object that was not a proxy, it means that it is an object that was not there in the original
    // tree and it could contain proxies at arbitrarily places. Let's find and finalize them as well
    if (!isProxyable(parent)) return;
    if (Object.isFrozen(parent)) return;
    each(parent, function (i, child) {
        if (isProxy(child)) {
            parent[i] = finalize(child);
        } else finalizeNonProxiedObject(child);
    });
    // always freeze completely new data
    freeze(parent);
}



function is(x, y) {
    // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}

// @ts-check

var proxies = null;

var objectTraps = {
    get: get$1,
    has: function has$$1(target, prop) {
        return prop in source(target);
    },
    ownKeys: function ownKeys(target) {
        return Reflect.ownKeys(source(target));
    },

    set: set$1,
    deleteProperty: deleteProperty,
    getOwnPropertyDescriptor: getOwnPropertyDescriptor,
    defineProperty: defineProperty$1,
    setPrototypeOf: function setPrototypeOf() {
        throw new Error("Immer does not support `setPrototypeOf()`.");
    }
};

var arrayTraps = {};
each(objectTraps, function (key, fn) {
    arrayTraps[key] = function () {
        arguments[0] = arguments[0][0];
        return fn.apply(this, arguments);
    };
});

function createState(parent, base) {
    return {
        modified: false,
        finalized: false,
        parent: parent,
        base: base,
        copy: undefined,
        proxies: {}
    };
}

function source(state) {
    return state.modified === true ? state.copy : state.base;
}

function get$1(state, prop) {
    if (prop === PROXY_STATE) return state;
    if (state.modified) {
        var value = state.copy[prop];
        if (value === state.base[prop] && isProxyable(value))
            // only create proxy if it is not yet a proxy, and not a new object
            // (new objects don't need proxying, they will be processed in finalize anyway)
            return state.copy[prop] = createProxy(state, value);
        return value;
    } else {
        if (has(state.proxies, prop)) return state.proxies[prop];
        var _value = state.base[prop];
        if (!isProxy(_value) && isProxyable(_value)) return state.proxies[prop] = createProxy(state, _value);
        return _value;
    }
}

function set$1(state, prop, value) {
    if (!state.modified) {
        if (prop in state.base && is(state.base[prop], value) || has(state.proxies, prop) && state.proxies[prop] === value) return true;
        markChanged(state);
    }
    state.copy[prop] = value;
    return true;
}

function deleteProperty(state, prop) {
    markChanged(state);
    delete state.copy[prop];
    return true;
}

function getOwnPropertyDescriptor(state, prop) {
    var owner = state.modified ? state.copy : has(state.proxies, prop) ? state.proxies : state.base;
    var descriptor = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (descriptor && !(Array.isArray(owner) && prop === "length")) descriptor.configurable = true;
    return descriptor;
}

function defineProperty$1() {
    throw new Error("Immer does not support defining properties on draft objects.");
}

function markChanged(state) {
    if (!state.modified) {
        state.modified = true;
        state.copy = shallowCopy(state.base);
        // copy the proxies over the base-copy
        Object.assign(state.copy, state.proxies); // yup that works for arrays as well
        if (state.parent) markChanged(state.parent);
    }
}

// creates a proxy for plain objects / arrays
function createProxy(parentState, base) {
    if (isProxy(base)) throw new Error("Immer bug. Plz report.");
    var state = createState(parentState, base);
    var proxy = Array.isArray(base) ? Proxy.revocable([state], arrayTraps) : Proxy.revocable(state, objectTraps);
    proxies.push(proxy);
    return proxy.proxy;
}

function produceProxy(baseState, producer) {
    if (isProxy(baseState)) {
        // See #100, don't nest producers
        var returnValue = producer.call(baseState, baseState);
        return returnValue === undefined ? baseState : returnValue;
    }
    var previousProxies = proxies;
    proxies = [];
    try {
        // create proxy for root
        var rootProxy = createProxy(undefined, baseState);
        // execute the thunk
        var _returnValue = producer.call(rootProxy, rootProxy);
        // and finalize the modified proxy
        var result = void 0;
        // check whether the draft was modified and/or a value was returned
        if (_returnValue !== undefined && _returnValue !== rootProxy) {
            // something was returned, and it wasn't the proxy itself
            if (rootProxy[PROXY_STATE].modified) throw new Error(RETURNED_AND_MODIFIED_ERROR);

            // See #117
            // Should we just throw when returning a proxy which is not the root, but a subset of the original state?
            // Looks like a wrongly modeled reducer
            result = finalize(_returnValue);
        } else {
            result = finalize(rootProxy);
        }
        // revoke all proxies
        each(proxies, function (_, p) {
            return p.revoke();
        });
        return result;
    } finally {
        proxies = previousProxies;
    }
}

// @ts-check

var descriptors = {};
var states = null;

function createState$1(parent, proxy, base) {
    return {
        modified: false,
        hasCopy: false,
        parent: parent,
        base: base,
        proxy: proxy,
        copy: undefined,
        finished: false,
        finalizing: false,
        finalized: false
    };
}

function source$1(state) {
    return state.hasCopy ? state.copy : state.base;
}

function _get(state, prop) {
    assertUnfinished(state);
    var value = source$1(state)[prop];
    if (!state.finalizing && value === state.base[prop] && isProxyable(value)) {
        // only create a proxy if the value is proxyable, and the value was in the base state
        // if it wasn't in the base state, the object is already modified and we will process it in finalize
        prepareCopy(state);
        return state.copy[prop] = createProxy$1(state, value);
    }
    return value;
}

function _set(state, prop, value) {
    assertUnfinished(state);
    if (!state.modified) {
        if (is(source$1(state)[prop], value)) return;
        markChanged$1(state);
        prepareCopy(state);
    }
    state.copy[prop] = value;
}

function markChanged$1(state) {
    if (!state.modified) {
        state.modified = true;
        if (state.parent) markChanged$1(state.parent);
    }
}

function prepareCopy(state) {
    if (state.hasCopy) return;
    state.hasCopy = true;
    state.copy = shallowCopy(state.base);
}

// creates a proxy for plain objects / arrays
function createProxy$1(parent, base) {
    var proxy = shallowCopy(base);
    each(base, function (i) {
        Object.defineProperty(proxy, "" + i, createPropertyProxy("" + i));
    });
    var state = createState$1(parent, proxy, base);
    createHiddenProperty(proxy, PROXY_STATE, state);
    states.push(state);
    return proxy;
}

function createPropertyProxy(prop) {
    return descriptors[prop] || (descriptors[prop] = {
        configurable: true,
        enumerable: true,
        get: function get$$1() {
            return _get(this[PROXY_STATE], prop);
        },
        set: function set$$1(value) {
            _set(this[PROXY_STATE], prop, value);
        }
    });
}

function assertUnfinished(state) {
    if (state.finished === true) throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + JSON.stringify(state.copy || state.base));
}

// this sounds very expensive, but actually it is not that expensive in practice
// as it will only visit proxies, and only do key-based change detection for objects for
// which it is not already know that they are changed (that is, only object for which no known key was changed)
function markChanges() {
    // intentionally we process the proxies in reverse order;
    // ideally we start by processing leafs in the tree, because if a child has changed, we don't have to check the parent anymore
    // reverse order of proxy creation approximates this
    for (var i = states.length - 1; i >= 0; i--) {
        var state = states[i];
        if (state.modified === false) {
            if (Array.isArray(state.base)) {
                if (hasArrayChanges(state)) markChanged$1(state);
            } else if (hasObjectChanges(state)) markChanged$1(state);
        }
    }
}

function hasObjectChanges(state) {
    var baseKeys = Object.keys(state.base);
    var keys = Object.keys(state.proxy);
    return !shallowEqual(baseKeys, keys);
}

function hasArrayChanges(state) {
    var proxy = state.proxy;

    if (proxy.length !== state.base.length) return true;
    // See #116
    // If we first shorten the length, our array interceptors will be removed.
    // If after that new items are added, result in the same original length,
    // those last items will have no intercepting property.
    // So if there is no own descriptor on the last position, we know that items were removed and added
    // N.B.: splice, unshift, etc only shift values around, but not prop descriptors, so we only have to check
    // the last one
    var descriptor = Object.getOwnPropertyDescriptor(proxy, proxy.length - 1);
    // descriptor can be null, but only for newly created sparse arrays, eg. new Array(10)
    if (descriptor && !descriptor.get) return true;
    // For all other cases, we don't have to compare, as they would have been picked up by the index setters
    return false;
}

function produceEs5(baseState, producer) {
    if (isProxy(baseState)) {
        // See #100, don't nest producers
        var returnValue = producer.call(baseState, baseState);
        return returnValue === undefined ? baseState : returnValue;
    }
    var prevStates = states;
    states = [];
    try {
        // create proxy for root
        var rootProxy = createProxy$1(undefined, baseState);
        // execute the thunk
        var _returnValue = producer.call(rootProxy, rootProxy);
        // and finalize the modified proxy
        each(states, function (_, state) {
            state.finalizing = true;
        });
        // find and mark all changes (for parts not done yet)
        // TODO: store states by depth, to be able guarantee processing leaves first
        markChanges();
        var result = void 0;
        // check whether the draft was modified and/or a value was returned
        if (_returnValue !== undefined && _returnValue !== rootProxy) {
            // something was returned, and it wasn't the proxy itself
            if (rootProxy[PROXY_STATE].modified) throw new Error(RETURNED_AND_MODIFIED_ERROR);
            result = finalize(_returnValue);
        } else result = finalize(rootProxy);
        // make sure all proxies become unusable
        each(states, function (_, state) {
            state.finished = true;
        });
        return result;
    } finally {
        states = prevStates;
    }
}

function shallowEqual(objA, objB) {
    //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (is(objA, objB)) return true;
    if ((typeof objA === "undefined" ? "undefined" : _typeof(objA)) !== "object" || objA === null || (typeof objB === "undefined" ? "undefined" : _typeof(objB)) !== "object" || objB === null) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}

function createHiddenProperty(target, prop, value) {
    Object.defineProperty(target, prop, {
        value: value,
        enumerable: false,
        writable: true
    });
}

/**
 * produce takes a state, and runs a function against it.
 * That function can freely mutate the state, as it will create copies-on-write.
 * This means that the original state will stay unchanged, and once the function finishes, the modified state is returned
 *
 * @export
 * @param {any} baseState - the state to start with
 * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified
 * @returns {any} a new state, or the base state if nothing was modified
 */
function produce(baseState, producer) {
    // prettier-ignore
    if (arguments.length !== 1 && arguments.length !== 2) throw new Error("produce expects 1 or 2 arguments, got " + arguments.length);

    // curried invocation
    if (typeof baseState === "function") {
        // prettier-ignore
        if (typeof producer === "function") throw new Error("if first argument is a function (curried invocation), the second argument to produce cannot be a function");

        var initialState = producer;
        var recipe = baseState;

        return function () {
            var args = arguments;

            var currentState = args[0] === undefined && initialState !== undefined ? initialState : args[0];

            return produce(currentState, function (draft) {
                args[0] = draft; // blegh!
                return recipe.apply(draft, args);
            });
        };
    }

    // prettier-ignore
    {
        if (typeof producer !== "function") throw new Error("if first argument is not a function, the second argument to produce should be a function");
    }

    // if state is a primitive, don't bother proxying at all
    if ((typeof baseState === "undefined" ? "undefined" : _typeof(baseState)) !== "object" || baseState === null) {
        var returnValue = producer(baseState);
        return returnValue === undefined ? baseState : returnValue;
    }

    if (!isProxyable(baseState)) throw new Error("the first argument to an immer producer should be a primitive, plain object or array, got " + (typeof baseState === "undefined" ? "undefined" : _typeof(baseState)) + ": \"" + baseState + "\"");
    return getUseProxies() ? produceProxy(baseState, producer) : produceEs5(baseState, producer);
}

const initialState = {};

function resourcesReducer(state = initialState, action) {
  const {
    type,
    id,
    attributes,
    links,
    relationships,
    resourcesById,
    resourceTypes,
    resourceType,
    resources
  } = action;
  return produce(state, draft => {
    switch (type) {
      case "ADD_OR_REPLACE_RESOURCE_BY_ID":
        _initializeResource(draft, resourceType);

        draft[resourceType][id] = {
          type: resourceType,
          id,
          attributes,
          links,
          relationships
        };
        break;
      case "MERGE_RESOURCES":
        _initializeResource(draft, resourceType);

        Object.entries(resourcesById).forEach(
          ([id, resource]) => (draft[resourceType][id] = resource)
        );
        break;
      case "REMOVE_RESOURCE_BY_ID":
        delete draft[resourceType][id];
        break;
      case "REMOVE_RESOURCES_BY_ID":
        resources.forEach(resource => {
          delete draft[resource.type][resource.id];
        });
        break;
      case "CLEAR_RESOURCES":
        resourceTypes.forEach(resourceType => {
          draft[resourceType] = {};
        });
        break;
    }
  });
}

const _initializeResource = (draft, resourceType) => {
  if (resourceType in draft) return;
  draft[resourceType] = {};
};

var resourcesMutation = {
  UPDATE_RESOURCES: (state, {resourceType, resourcesById}) => {
    Object.entries(resourcesById).forEach(([id, resource]) => {
      if (!state[resourceType]) {
        state[resourceType] = {};
      }
      state[resourceType][id] = resource;
    });
  }
};

const GraphQL = "GraphQL";
const JsonAPI = "JsonAPI";

const isGraphQl = payload => {
  return (
    payload["data"] && payload["data"][0] && "__typename" in payload["data"][0]
  );
};

const isRedux = storeUpdater => {
  return (
    storeUpdater.name === "dispatch" ||
    (typeof storeUpdater.toString() === "string" &&
      !!storeUpdater.toString().match(/dispatch/))
  );
};

const isMobx = storeUpdater => {
  return typeof storeUpdater === "object";
};

const isSetState = storeUpdater => {
  return typeof storeUpdater === "function";
};

const isVuex = storeUpdater => {
  return (
    storeUpdater.name === "boundCommit" ||
    (typeof storeUpdater.toString() === "string" &&
      !!storeUpdater.toString().match(/boundCommit/))
  );
};

const toJsonApiSpec = (resourceType, resourcesById) => {
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

const buildRelationships = resource => {
  return Object.entries(resource).reduce((newObject, [key, value]) => {
    if (value && Array.isArray(value)) {
      if (!newObject[key]) {
        newObject[key] = {data: []};
      }

      newObject[key].data = value.map(id => ({type: key, id}));
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

const graphQLNormalizr = new GraphQLNormalizr();
const graphQlNormalize = graphQLNormalizr.normalize;

var updateResources = (payload, storeUpdater) => {
  isGraphQl(payload)
    ? _updateResourcesByStateManger(GraphQL, payload, storeUpdater)
    : _updateResourcesByStateManger(JsonAPI, payload, storeUpdater);
};

const _updateResourcesByStateManger = (spec, payload, storeUpdater) => {
  Object.entries(
    spec === GraphQL ? graphQlNormalize(payload) : jsonApiNormalize(payload)
  ).forEach(([resourceType, resourcesById]) => {
    const rById = spec === GraphQL
      ? toJsonApiSpec(resourceType, resourcesById)
      : resourcesById;
    if (isRedux(storeUpdater)) {
      _updateResourcesRedux(storeUpdater, resourceType, rById);
    } else if (isMobx(storeUpdater)) {
      _updateResourcesMobx(storeUpdater, resourceType, rById);
    } else if (isVuex(storeUpdater)) {
      _updateResourcesVuex(storeUpdater, resourceType, rById);
    } else if (isSetState(storeUpdater)) {
      _updateResourcesSetState(storeUpdater, resourceType, rById);
    }
  });
};

const _updateResourcesRedux = (storeUpdater, resourceType, resourcesById) => {
  storeUpdater({type: "MERGE_RESOURCES", resourceType, resourcesById});
};

const _updateResourcesMobx = (storeUpdater, resourceType, resourcesById) => {
  Object.entries(resourcesById).forEach(([id, resource]) => {
    if (!storeUpdater[resourceType]) {
      storeUpdater[resourceType] = {};
    }
    storeUpdater[resourceType][id] = resource;
  });
};

const _updateResourcesSetState = (
  storeUpdater,
  resourceType,
  resourcesById
) => {
  Object.entries(resourcesById).forEach(([id, resource]) => {
    storeUpdater(state => {
      if (!state.resources[resourceType]) {
        state.resources[resourceType] = {};
      }

      state.resources[resourceType][id] = resource;
      return state;
    });
  });
};

const _updateResourcesVuex = (storeUpdater, resourceType, resourcesById) => {
  storeUpdater("MERGE_RESOURCES", {resourceType, resourcesById});
};

var updateResource = ({id, type, attributes, links, relationships}, storeUpdater) => {
  if (isRedux(storeUpdater)) {
    storeUpdater({
      type: "ADD_OR_REPLACE_RESOURCE_BY_ID",
      resourceType: type,
      id,
      attributes,
      links,
      relationships: relationships || buildRelationships(type, attributes)
    });
  } else if (isMobx(storeUpdater)) {
    if (!(type in storeUpdater)) {
      storeUpdater[type] = {};
    }

    storeUpdater[type][id] = {
      type,
      id,
      attributes,
      links,
      relationships: relationships || buildRelationships(type, attributes)
    };
  } else if (isSetState(storeUpdater)) {
    storeUpdater(state => {
      if (!(type in state.resources)) {
        state.resources[type] = {};
      }

      state.resources[type][id] = {
        type,
        id,
        attributes,
        links,
        relationships: relationships || buildRelationships(type, attributes)
      };
      return state;
    });
  }
};

var removeResources = (resources, storeUpdater) => {
  if (isRedux(storeUpdater)) {
    storeUpdater({
      type: "REMOVE_RESOURCES_BY_ID",
      resources
    });
  } else if (isMobx(storeUpdater)) {
    resources.forEach(({type, id}) => {
      delete storeUpdater[type][id];
    });
  }
};

var removeResource = ({id, type}, storeUpdater) => {
  if (isRedux(storeUpdater)) {
    storeUpdater({
      type: "REMOVE_RESOURCE_BY_ID",
      resourceType: type,
      id
    });
  } else if (isMobx(storeUpdater)) {
    delete storeUpdater[type][id];
  }
};

var clearResources = (resourceTypes, storeUpdater) => {
  if (isRedux(storeUpdater)) {
    storeUpdater({
      type: "CLEAR_RESOURCES",
      resourceTypes
    });
  } else if (isMobx(storeUpdater)) {
    resourceTypes.forEach(resourceType => {
      storeUpdater[resourceType] = {};
    });
  }
};

class Query {
  constructor(klass, resourceName, resources, hasMany = [], belongsTo = []) {
    this.klass = klass;
    this.resourceName = resourceName;
    this.resources = resources;
    this.currentIncludes = [];
    this.currentResources = {};
    this.hasMany = hasMany;
    this.belongsTo = belongsTo;
    this._setCurrentResources();
  }

  find(id) {
    const {
      resources,
      resourceName,
      klass,
      _convertToModel,
      hasMany,
      belongsTo
    } = this;
    const { attributes } =
      resources[resourceName] && resources[resourceName][id];
    return _convertToModel(
      klass,
      resources,
      { id, ...attributes },
      hasMany,
      belongsTo
    );
  }

  first() {
    const { resources, resourceName } = this;
    const _resources = resources[resourceName];
    return _resources && _resources[Object.keys(_resources)[0]];
  }

  all() {
    return this;
  }

  where(params) {
    this._filterAndSetCurrentResourcesByParams(params);
    return this;
  }

  whereRelated(relationship, params) {
    const { resourceName } = this;

    this.currentResources = relationship
      .query(this.resources)
      .where(params)
      .includes([resourceName])
      .toObjects()
      .reduce((newResource, relatedResource) => {
        const relation = relatedResource[resourceName];
        relation.forEach(({ type, id, ...attributes }) => {
          newResource[id] = { type, id, attributes };
        });
        return newResource;
      }, {});
    return this;
  }

  includes(relationshipTypes) {
    this.currentIncludes = relationshipTypes;
    return this;
  }

  toModels() {
    if (!this.currentResources) return [];
    return this._reduceCurrentResources("models");
  }

  toObjects() {
    if (!this.currentResources) return [];
    return this._reduceCurrentResources("objects");
  }

  // Private

  _reduceCurrentResources(reducerType) {
    // TODO: needs to be refactored
    const conversion = reducerType === "models"
      ? this._convertToModel
      : this._convertToObject;
    const {
      currentIncludes,
      currentResources,
      resources,
      _flattenRelationships,
      hasMany,
      belongsTo
    } = this;

    return Object.values(
      currentResources
    ).map(({ id, attributes, relationships, types, links }) => {
      const newFormattedResource = conversion(
        this.klass,
        resources,
        {
          id,
          ...attributes
        },
        hasMany,
        belongsTo
      );

      if (!currentIncludes.length) return newFormattedResource;
      return conversion(
        this.klass,
        resources,
        {
          ...newFormattedResource,
          ..._flattenRelationships(
            relationships
          ).reduce((nextRelationshipObjects, { id, type }) => {
            if (!currentIncludes.includes(type)) return nextRelationshipObjects;
            if (!(type in nextRelationshipObjects)) {
              nextRelationshipObjects[type] = [];
            }

            if (!resources[type]) return nextRelationshipObjects;
            const relationData = resources[type][id];
            if (!relationData) return nextRelationshipObjects;
            const relationClass = this.hasMany.find(klass => {
              return pluralize(klass.name.toLowerCase()) === type;
            });

            nextRelationshipObjects[type].push(
              conversion(relationClass, resources, {
                id,
                ...relationData.attributes
              })
            );

            return nextRelationshipObjects;
          }, {})
        },
        hasMany,
        belongsTo
      );
    });
  }

  _convertToModel(klass, resources, resource, hasMany, belongsTo) {
    return new klass(resources, resource, hasMany, belongsTo);
  }

  _convertToObject(klass, resources, resource, hasMany, belongsTo) {
    return resource;
  }

  _flattenRelationships(relationships) {
    return Object.values(
      relationships
    ).reduce((nextRelationships, { data }) => {
      return [...nextRelationships, ...data];
    }, []);
  }

  _setCurrentResources() {
    if (this._isEmpty(this.currentResources) && this.resources) {
      this.currentResources = this.resources[this.resourceName];
    }
  }

  _filterAndSetCurrentResourcesByParams(params) {
    const resourcesByID = Object.entries(
      this.currentResources
    ).reduce((newResource, [id, resource]) => {
      this._filterResourceByParams(params, newResource, resource, id);
      return newResource;
    }, {});
    this.currentResources = resourcesByID;
  }

  _filterResourceByParams(params, newResource, resource, id) {
    Object.entries(params).forEach(([key, value]) => {
      if (key === "id" && resource.id === value) {
        newResource[id] = resource;
      } else if (resource.attributes[key] === value) {
        newResource[id] = resource;
      }
    });
  }

  _isEmpty(obj) {
    if (
      obj === null ||
      obj === undefined ||
      Array.isArray(obj) ||
      typeof obj !== "object"
    ) {
      return true;
    }
    return Object.getOwnPropertyNames(obj).length === 0 ? true : false;
  }
}

class BaseModel {
  static query(resources) {
    return new Query(
      this,
      pluralize(this.name.toLowerCase()),
      resources,
      this.hasMany,
      this.belongsTo
    );
  }

  constructor(resources, attributes, hasMany = [], belongsTo = []) {
    Object.entries(attributes).forEach(([key, value]) => {
      this[key] = value;
    });

    if (hasMany.forEach) {
      hasMany.forEach(relationship =>
        this._buildHasManyQuery(this, resources, relationship)
      );
    }

    if (belongsTo.forEach) {
      belongsTo.forEach(relationship => {
        const relationshipKey = relationship.name.toLowerCase();
        this[relationshipKey] = () => {
          // needs to return the related model
        };
      });
    }
  }

  _filterResources(resource, resources, relationship, relationshipKey) {
    const currentResourceKey = pluralize(
      resource.constructor.name.toLowerCase()
    );
    const resourceClass = resource.constructor;
    const relationshipClass = relationship;
    return {
      ...resources,
      [currentResourceKey]: resources[currentResourceKey][resource.id],
      [relationshipKey]: relationshipClass
        .query(resources)
        .whereRelated(resourceClass, {
          id: resource.id
        }).currentResources
    };
  }

  _buildHasManyQuery(resource, resources, relationship) {
    const relationshipKey = pluralize(relationship.name.toLowerCase());
    if (!resource[relationshipKey]) {
      resource[relationshipKey] = () => {
        const newResouces = resource._filterResources(
          resource,
          resources,
          relationship,
          relationshipKey
        );

        return new Query(
          relationship,
          relationshipKey,
          newResouces,
          relationship.hasMany,
          relationship.belongsTo
        );
      };
    }
  }
}

export { updateResources, updateResource, removeResource, removeResources, clearResources, resourcesReducer, resourcesMutation as mutation, BaseModel };
