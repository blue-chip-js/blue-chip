import pluralize from "pluralize";
import Query from "./Query";
import {lowerCaseFirst} from "./utils";

export default class BaseModel {
  static query(resources) {
    return new Query(
      this,
      lowerCaseFirst(pluralize(this.name)),
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
        const relationshipKey = lowerCaseFirst(relationship.name);
        this[relationshipKey] = () => {
          // needs to return the related model
        };
      });
    }
  }

  _filterResources(resource, resources, relationship, relationshipKey) {
    const currentResourceKey = lowerCaseFirst(pluralize(
      resource.constructor.name
    ));
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
    const relationshipKey = lowerCaseFirst(pluralize(relationship.name));
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
