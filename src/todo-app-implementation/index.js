import React from 'react';
import ExtensibleTodoApp from '../extensible-todo-app';
import * as plugins from './plugins';

/**
* Note that the consequences of applying multiple plugins are not investigated so far.
* Overridings and race conditions may happen.
*/
const pluginsToApply = [
  //plugins.removeTodoFilters,
  //plugins.replaceTodoFilters,
  //plugins.addHeaderIcon,
  plugins.listDeletedTodos,
];

export default function(props) {
  return <ExtensibleTodoApp plugins={pluginsToApply}/>
}
