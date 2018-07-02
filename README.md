# [BlueChip](https://bluechip.gitbook.io/project/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mfpiccolo/blue-chip/blob/master/LICENSE.md) [![npm version](https://img.shields.io/npm/v/blue-chip.svg?style=flat)](https://www.npmjs.com/package/blue-chip) [![Build Status](https://travis-ci.org/mfpiccolo/blue-chip.svg?branch=master)](https://travis-ci.org/mfpiccolo/blue-chip)

BlueChip accepts payloads from GraphQL or JsonAPI servers, normalizes them into your store and provides an ORM like syntax for retrieving the data for use.

## Source
[NPM](https://www.npmjs.com/package/blue-chip)

## Docs
[Documentation](https://bluechip.gitbook.io/project/)

[API](https://bluechip.gitbook.io/project/api)

## The Basics 
There are only two things that BlueChip does.

1. Normalize data and organize it in a store.
2. Retrieve the data from the store and prepare it for use.

## What BlueChip Is 
### State API
BlueChip will take your data, normalize it and place it into a shared resources store. The API on this side is pretty minimal.

1. updateResources() - Takes an entire payload of resources, normalize it and merge it into the store.
2. updateResource() - Merges in a single resource into your store
3. removeResources() - Removes a list of resource from the store
3. removeResource() - Removes a single resource from the store
3. clearResources()  - Clears a resource store by types

And that is it for the State API.

### Selector API  
This is the meat of BlueChip. The selector API is how you prepare your data to be consumed by components. To select data, BlueChip offers a robust ORM-style syntax complete with models, relationships, filtering, includes and more. You only needs access to the resources store to be able to use the selector api. 

Here is an example of using the ORM syntax to select from the store
```javascript
Checklist.query(resources)
  .where({ active: true })
  .includes(['tasks'])
  .toObjects()
```

## What BlueChip Is Not 
### Fetching
BlueChip is not interested in how you get your data. Fetch it, mock it, import it. However you get your data that is your business. The only requirement is that your data is formatted according to one of the adapters (JsonAPI, GraphQL). If it is not formatted you can write a custom adapter to normalize it.

### Client Side Store 
BlueChip is agnostic to which client-side state management library you choose to use (Redux, Mobx, Vuex, other). You only need access to a shared resources store for BlueChip to work.

## Why BlueChip?
1. You have multiple data sources (or multiple projects with different data sources) and want to consistently interact with all of them in the same way in your client-side state management systems.  You can easily normalize and connect components from GraphQL, JsonAPI and custom formatted API's.

2. You already have a state manager that you like or is a requirement of a project and do not want to adopt multiple to handle both GraphQL and JSON Rest data.

3. You would like to keep resources unnessted in your stores for ease of updating, simplicity of mutation schema and ability to easily share resources across your application.

You are familiar with and prefer using ORM's when querying and working with data. 

## Redux Demo
[Demo BlueChip/Redux Applicaiton](https://codesandbox.io/s/l5j9qk86q7)
## MobX Demo
[Demo BlueChip/Mobx Application](https://codesandbox.io/s/1qpv9r03qj)
## React setState Demo
[Demo BlueChip/React setState Application](https://codesandbox.io/s/4z5xw80q8w)
## Unstated Demo
[Demo Unstated Application](https://codesandbox.io/s/xjl733kjq4)

## Getting Started 
To start, choose your state management flavor. This is an example using Redux.

`$ npm i -S blue-chip`
Or
`yarn add blue-chip`
## Redux
### Actions
Batch update resources:
```javascript
import { updateResources } from 'blue-chip';
​
export const fetchChecklists = async (dispatch, state) => { 
  dispatch({ type: "LOADING_DATA" }); 
  try { 
    const response = await fetch("/checklists.json"); 
    const payload = await response.json();
    updateResources(payload, dispatch); 
    dispatch({ type: "LOADING_SUCCESS" }); } 
  catch (error) { 
    dispatch({ type: "LOADING_ERROR" }); 
  }
};
```
### Update a single resource:
```javascript
import { updateResource } from 'blue-chip';
​
export const updateTask = ({ id, ...attributes }, dispatch) => { 
  const resource = { id, attributes, type: "tasks" };
  updateResource(resource, dispatch);
};
```
### Reducers
```javascript
import { combineReducers } from "redux";
import { resourcesReducer as resources } from 'blue-chip';
​
export default combineReducers({resources});
```
### Models
Just like any other ORM you will be defining model classes:
```javascript
import { BaseModel } from "blue-chip";
import Task from "./Task";
​
export default class Checklist extends BaseModel { 
   static get hasMany() { return [Task]; }
}
```
```javascript
import { BaseModel } from "blue-chip";
import Checklist from "./Checklist";
​
export default class Task extends BaseModel { 
  static get belongsTo() { return [Checklist]; }
}
```
### Containers
```javascript
const mapStateToProps = state => { 
  const { resources } = state; 
  return { 
    checklists: Checklist.query(resources) 
                  .all() 
                  .includes(["tasks"]) 
                  .toObjects() 
  };
};
​
const mapDispatchToProps = dispatch => ({ 
  updateTask: task => updateTask(dispatch, task)
});
​
export default connect(mapStateToProps, mapDispatchToProps)(Container);
```
### Store Structure
The resources store is structured as an object with top-level keys as pluralized resource names.
```javascript
const store = {
  resources: {
    checklists: {},
    tasks: {}
  }
};
```
Each resource key points to an object that contains ids as keys and an JSON api object as a value.
```javascript
const store = {
  checklists: {
    1: {
      id: 1,
      attributes: { name: "Oboarding" },
      links: { self: "http://example.com/checklists/1" },
      relationships: {
        tasks: {
         data: [{ id: 1, type: "tasks: }, { id: 2, type: "tasks: }],
       },
       type: "checklists"
    }
  },
  tasks: {
  ...
}  
```
## Project Status
This project is currently in Alpha/Experimental phase.  The APIs will almost assuredly change prior to 1.0.  It is not ready for production yet, so use at your own risk.

## RoadMap
1. Increase Test Coverage
2. Setup tests on CI
3. More tests and examples with a diverse range of GraphQL and JsonAPI payloads.
4. Refactor state managment to be an adapter as an external packages
5. Add Vue and Vuex
6. Allow for configurable and custom normailzers so you can use ANY api and spec.
7. Bundle optimization
8. belongsTo relationship
9. Memoization
