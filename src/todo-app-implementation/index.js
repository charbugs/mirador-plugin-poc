import React from 'react';
import ExtensibleTodoApp from '../extensible-todo-app';
import * as plugins from './plugins';

const pluginsToApply = [
  //plugins.removeTodoFilters,
  plugins.replaceTodoFilters,
  //plugins.addHeaderIcon
];

export default function(props) {
  return <ExtensibleTodoApp plugins={pluginsToApply}/>
}
