import React from 'react';
import ReactDOM from 'react-dom';
import ExtendableTodoApp from './extendable-todo-app/index';
import removeHeaderPlugin from './plugins/removeHeader';

ReactDOM.render(
  <ExtendableTodoApp plugins={[removeHeaderPlugin]}/>,
  document.getElementById('root')
);
