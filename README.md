
## Install

* `$ git clone https://github.com/charbugs/mirador-plugin-poc.git`
* `$ cd mirador-plugin-poc`
* `$ npm install`
* `$ npm start`

## Description

This repo shows how a plugin system for Mirador may look like. There are to folders under `./src`:

* `./src/extensible-todo-app` is a simple react todo application with a plugin system.
* `./src/todo-app-implementation` is a react application that uses/embeds the todo app and extends it with some plugins.

## Plugin scenarios

There are support for three kinds of plugins in the exentsible todo app:

* A plugin can remove a component from the todo app.
* A plugin can replace a component of the todo app.
* A plugin can add a component to one of the components of the todo app.

Furthermore, a plugin can provide custom reducers to the redux store of the todo app and therefore

* can have its own state in the store of the todo app,
* can write to this state via the reducer,
* can read its state (and the state of other reducers) via mapStateToProps.
* can intercept all action types that the todo app dispatches.

The ability to provide custom actions and the use of the existing actions is not fully examined so far.
