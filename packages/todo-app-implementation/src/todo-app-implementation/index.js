import React from 'react';
import ExtensibleTodoApp from 'extensible-todo-app';
import * as plugins from '../plugins';
import createStore from '../state/store';
import {Provider} from 'react-redux'

/**
* Note that the consequences of applying multiple plugins are not investigated so far.
* Overridings and race conditions may happen.
*/
const pluginsToApply = [
  //plugins.removeTodoFilters,
  plugins.replaceTodoFilters,
  //plugins.addHeaderIcon,
  plugins.listDeletedTodos,
];
const store = createStore(pluginsToApply);

export default function(props) {
  return (
  <Provider store={store}>
    <ExtensibleTodoApp store={store} plugins={pluginsToApply}/>
  </Provider>)
}
