var get = require("lodash.get");

export default function handleConversion(query, conversionType) {
  if (!query.currentResources) return [];
  return _reduceCurrentResources(query, conversionType);
}

function _reduceCurrentResources(query, reducerType) {
  const conversion =
    reducerType === "models" ? _convertToModel : _convertToObject;
  const {currentResources, resources, resourceName} = query;
  return Object.values(currentResources)
    .sort((resource1, resource2) =>
      _sortByIndex(resource1, resource2, resources, resourceName)
    )
    .map(({id, attributes, relationships, _types, _links}) =>
      _convertResource({
        id,
        attributes,
        relationships,
        conversion,
        query
      })
    );
}

function _convertResource({id, attributes, relationships, conversion, query}) {
  const {klass, currentIncludes, resources, hasMany, belongsTo} = query;

  const newFormattedResource = conversion(
    klass,
    resources,
    {
      id,
      ...attributes
    },
    hasMany,
    belongsTo
  );

  if (!currentIncludes.length) return newFormattedResource;

  return _handleResourceConversionWithIncludedRelations({
    newFormattedResource,
    conversion,
    query,
    resources,
    relationships
  });
}

function _handleResourceConversionWithIncludedRelations({
  newFormattedResource,
  conversion,
  query,
  relationships
}) {
  const {klass, resources, hasMany, belongsTo} = query;
  return conversion(
    klass,
    resources,
    {
      ...newFormattedResource,
      ..._flattenRelationships(relationships).reduce(
        (nextRelationshipObjects, {id, name, type}) =>
          _buildRelationships(query, conversion, nextRelationshipObjects, {
            id,
            name,
            type
          }),
        {}
      )
    },
    hasMany,
    belongsTo
  );
}

function _buildRelationships(
  query,
  conversion,
  nextRelationshipObjects,
  {id, name, type}
) {
  const {klass, currentIncludes, resources, hasMany, belongsTo} = query;
  const handleRelationArgs = {
    resources,
    id,
    type,
    nextRelationshipObjects,
    conversion,
    currentIncludes,
    name
  };

  // for the case when the relation class is hasMany
  let relationClass = hasMany.find(klass => {
    return klass.pluralName() === type;
  });
  if (relationClass) {
    _setRelationShipKeyToValues({
      ...handleRelationArgs,
      relationType: "hasMany",
      relationClass
    });
  }

  // for the case when the relation class is belongsTo
  relationClass = belongsTo.find(klass => {
    return klass.pluralName() === type;
  });
  if (relationClass) {
    _setRelationShipKeyToValues({
      ...handleRelationArgs,
      relationType: "belongsTo",
      relationClass
    });
  }

  return nextRelationshipObjects;
}

function _setRelationShipKeyToValues({
  relationType,
  resources,
  id,
  type,
  nextRelationshipObjects,
  conversion,
  relationClass,
  currentIncludes,
  name
}) {
  const directIncludesRalationships = currentIncludes.map(
    relation => relation.split(".")[0]
  );
  if (!directIncludesRalationships.includes(name))
    return nextRelationshipObjects;
  if (!(name in nextRelationshipObjects)) {
    if (relationType === "hasMany") {
      nextRelationshipObjects[name] = [];
    } else if (relationType === "belongsTo") {
      nextRelationshipObjects[name] = null;
    }
  }
  if (!resources[type]) return nextRelationshipObjects;
  const relationData = resources[type][id];
  if (!relationData) return nextRelationshipObjects;

  if (relationClass) {
    const [relationModel, nestedResourceData] = _buildRelationModel(
      resources,
      currentIncludes,
      relationClass,
      id,
      type,
      name,
      relationData
    );

    nestedResourceData.forEach(
      ([nestedResourceName, nestedResourceType, nestedResourceIds]) => {
        const nestedResources = _convertWithNestedResources(
          conversion,
          relationClass,
          resources,
          id,
          relationData,
          relationModel,
          nestedResourceName,
          nestedResourceType,
          nestedResourceIds
        );

        if (relationType === "hasMany") {
          const objIndex = nextRelationshipObjects[name].findIndex(
            obj => obj.id == nestedResources.id
          );
          if (objIndex < 0) {
            nextRelationshipObjects[name].push(nestedResources);
          } else {
            const objIndex = nextRelationshipObjects[name].findIndex(
              obj => obj.id == nestedResources.id
            );
            nextRelationshipObjects[name][objIndex] = {
              ...nextRelationshipObjects[name][objIndex],
              ...nestedResources
            };
          }
        } else if (relationType === "belongsTo") {
          // TODO: this fails
          nextRelationshipObjects[name] = conversion(relationClass, resources, {
            ...nextRelationshipObjects[name],
            ...nestedResources
          });
        }
      }
    );
  }
  return nextRelationshipObjects;
}

function _convertWithNestedResources(
  conversion,
  relationClass,
  resources,
  id,
  relationData,
  relationModel,
  nestedResourceName,
  nestedResourceType,
  nestedResourceIds
) {
  const query =
    relationModel &&
    relationModel[nestedResourceType] &&
    relationModel[nestedResourceType]();

  const model =
    relationModel &&
    relationModel[nestedResourceName] &&
    relationModel[nestedResourceName]();

  let nestedResponse;
  if (query && query.toObjects) {
    nestedResponse = query.klass
      .query(resources)
      .where({id: nestedResourceIds})
      .toObjects();
  } else if (model && model.toObject) {
    nestedResponse = model.toObject();
  }

  return conversion(relationClass, resources, {
    id,
    ...relationData.attributes,
    ...(nestedResponse && {
      [nestedResourceName]: nestedResponse
    })
  });
}

function _buildRelationModel(
  resources,
  currentIncludes,
  relationClass,
  id,
  type,
  name,
  relationData
) {
  let relationModel, nestedResourceType, nestedResourceIds, nestedResourceNames;

  nestedResourceNames = [];
  currentIncludes
    .filter(
      relation =>
        relation.split(".")[0] == type || relation.split(".")[0] == name
    )
    .forEach(includesName => {
      const splitName = includesName.split(".")[1];
      if (splitName && splitName.includes("[")) {
        const nestedNames = splitName
          .replace(/[\[\]']+/g, "")
          .split(",")
          .map(rn => rn.trim());
        nestedResourceNames = nestedResourceNames.concat(nestedNames);
      } else {
        // Yes, even push undefined
        nestedResourceNames.push(splitName);
      }
    });

  const nestedResourceData = nestedResourceNames.map(nestedResourceName => {
    nestedResourceType = null;
    nestedResourceIds = null;
    if (nestedResourceName) {
      // sets the nested class if it is a has many relationship
      let nestedClass = relationClass.belongsTo.filter(
        klass => nestedResourceName === klass.singularName()
      )[0];

      // handles the belongsTo cases
      if (nestedClass) {
        const belongsToData = get(
          resources,
          `${relationClass.pluralName()}.${id}.relationships.${nestedResourceName}.data`
        );
        if (belongsToData) {
          nestedResourceType = belongsToData.type;
          nestedResourceIds = [belongsToData.id];
        }
      } else {
        // handles the hasMany cases
        const nestedClassDataArray =
          relationClass.hasMany &&
          relationClass.hasMany.reduce((nestedClassData, klass) => {
            let nestedRelationshipData = get(
              resources,
              `${relationClass.pluralName()}.${id}.relationships.${nestedResourceName}.data`
            );
            if (!nestedRelationshipData) {
              nestedRelationshipData = [];
            }

            nestedResourceType = get(nestedRelationshipData, "[0].type");
            if (nestedResourceType === klass.pluralName()) {
              nestedResourceIds = nestedRelationshipData.reduce((ids, {id}) => {
                ids.push(id);
                return ids;
              }, []);

              nestedClassData.push([
                klass,
                nestedResourceType,
                nestedResourceIds
              ]);
            }

            return nestedClassData;
          }, []);

        if (nestedClassDataArray && nestedClassDataArray.length) {
          [
            nestedClass,
            nestedResourceType,
            nestedResourceIds
          ] = nestedClassDataArray[0];
        }
      }

      if (nestedClass) {
        relationModel = _convertToModel(
          relationClass,
          resources,
          {
            id,
            ...relationData.attributes
          },
          relationClass.hasMany,
          relationClass.belongsTo
        );
      }
    }
    return [nestedResourceName, nestedResourceType, nestedResourceIds];
  });

  return [relationModel, nestedResourceData];
}

function _flattenRelationships(relationships) {
  if (!relationships) {
    return [];
  }

  return Object.entries(relationships).reduce(
    (nextRelationships, [name, relationshipItem]) => {
      if (!nextRelationships || !relationshipItem || !relationshipItem.data) {
        return nextRelationships;
      }

      if (Array.isArray(relationshipItem.data)) {
        const dataArray = relationshipItem.data.map(item => ({
          ...item,
          name
        }));
        return [...nextRelationships, ...dataArray];
      }

      return [...nextRelationships, {...relationshipItem.data, name}];
    },
    []
  );
}

function _convertToModel(klass, resources, resource, hasMany, belongsTo) {
  return new klass(resources, resource, hasMany, belongsTo);
}

function _convertToObject(klass, resources, resource, hasMany, belongsTo) {
  return resource;
}

function _sortByIndex(resource1, resource2, resources, resourceName) {
  const index = resources.index[resourceName];
  return index.indexOf(resource1.id) - index.indexOf(resource2.id);
}
