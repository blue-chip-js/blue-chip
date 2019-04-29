export default function handleConversion(query, conversionType) {
  if (!query.currentResources) return [];
  return _reduceCurrentResources(query, conversionType);
}

function _reduceCurrentResources(query, reducerType) {
  // TODO: needs to be refactored
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
  const {klass, currentIncludes, resources, hasMany, belongsTo} = query;
  return conversion(
    klass,
    resources,
    {
      ...newFormattedResource,
      ..._flattenRelationships(relationships).reduce(
        (nextRelationshipObjects, {id, name, type}) => {
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
            _handleHasManyIncludes({...handleRelationArgs, relationClass});
          }

          // for the case when the relation class is belongsTo
          relationClass = belongsTo.find(klass => {
            return klass.pluralName() === type;
          });
          if (relationClass) {
            _handleBelongsToIncludes({...handleRelationArgs, relationClass});
          }

          return nextRelationshipObjects;
        },
        {}
      )
    },
    hasMany,
    belongsTo
  );
}

function _handleHasManyIncludes({
  resources,
  id,
  type,
  nextRelationshipObjects,
  conversion,
  relationClass,
  currentIncludes,
  name
}) {
  // TODO: _handleHasManyIncludes and _handleBelongsToIncludes are so similar they should be combined
  const directIncludesRalationships = currentIncludes.map(
    relation => relation.split(".")[0]
  );
  if (!directIncludesRalationships.includes(name))
    return nextRelationshipObjects;
  if (!(name in nextRelationshipObjects)) {
    nextRelationshipObjects[name] = [];
  }
  if (!resources[type]) return nextRelationshipObjects;
  const relationData = resources[type][id];
  if (!relationData) return nextRelationshipObjects;

  if (relationClass) {
    const [relationModel, nestedResourceName] = _buildRelationModel(
      resources,
      currentIncludes,
      relationClass,
      id,
      name,
      relationData
    );

    nextRelationshipObjects[name].push(
      _convertWithNestedResources(
        conversion,
        relationClass,
        resources,
        id,
        relationData,
        relationModel,
        nestedResourceName
      )
    );
  }
  return nextRelationshipObjects;
}

function _handleBelongsToIncludes({
  resources,
  id,
  type,
  nextRelationshipObjects,
  conversion,
  relationClass,
  currentIncludes,
  name
}) {
  // TODO: _handleHasManyIncludes and _handleBelongsToIncludes are so similar they should be combined
  const directIncludesRalationships = currentIncludes.map(
    relation => relation.split(".")[0]
  );
  if (!directIncludesRalationships.includes(name))
    return nextRelationshipObjects;
  if (!(name in nextRelationshipObjects)) {
    nextRelationshipObjects[name] = null;
  }
  if (!resources[type]) return nextRelationshipObjects;
  const relationData = resources[type][id];
  if (!relationData) return nextRelationshipObjects;

  if (relationClass) {
    const [relationModel, nestedResourceName] = _buildRelationModel(
      resources,
      currentIncludes,
      relationClass,
      id,
      name,
      relationData
    );

    nextRelationshipObjects[name] = _convertWithNestedResources(
      conversion,
      relationClass,
      resources,
      id,
      relationData,
      relationModel,
      nestedResourceName
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
  nestedResourceName
) {
  return conversion(relationClass, resources, {
    id,
    ...relationData.attributes,
    ...(relationModel &&
      relationModel[nestedResourceName]() && {
        [nestedResourceName]: relationModel[nestedResourceName]().toObject()
      })
  });
}

function _buildRelationModel(
  resources,
  currentIncludes,
  relationClass,
  id,
  name,
  relationData
) {
  let relationModel;
  const nestedResourceName = currentIncludes
    .filter(relation => relation.split(".")[0] == name)[0]
    .split(".")[1];

  if (nestedResourceName) {
    let nestedClass = relationClass.belongsTo.filter(
      klass => nestedResourceName === klass.singularName()
    )[0];

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

  return [relationModel, nestedResourceName];
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
