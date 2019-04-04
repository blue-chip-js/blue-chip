import pluralize from "pluralize";
import Query from "./Query";
import {lowerCaseFirst, isFunction} from "./utils";

export default class BaseModel {
  static query(resources) {
    return new Query(
      this,
      this.pluralName(),
      resources,
      this.hasMany,
      this.belongsTo
    );
  }

  static pluralName() {
    return this.plural ? this.plural : lowerCaseFirst(pluralize(this.name));
  }

  static singularName() {
    return this.singular
      ? this.singular
      : lowerCaseFirst(pluralize(this.name, 1));
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
        const relationshipKey = relationship.singularName();
        if (!this[relationshipKey]) {
          this[relationshipKey] = () => {
            const ParentClass = this.constructor;
            const ChildClass = relationship;

            let childId;
            try {
              childId =
                resources[ParentClass.pluralName()][this.id].relationships[
                  ChildClass.singularName()
                ].data.id;
            } catch (e) {}

            return ChildClass.query(resources).find(childId);
          };
        }
      });
    }
  }

  toObject() {
    return Object.getOwnPropertyNames(this).reduce((obj, prop) => {
      if (!isFunction(this[prop])) {
        obj[prop] = this[prop];
      }
      return obj;
    }, {});
  }

  _filterResources(resource, resources, relationship, relationshipKey) {
    const currentResourceKey = resource.constructor.pluralName();

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
    const relationshipKey = relationship.pluralName();
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
