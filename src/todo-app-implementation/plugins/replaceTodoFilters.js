import React from 'react';
import Paper from '@material-ui/core/Paper';

const MyTodoFilters = props => {
  console.log(props)
  return (
    <Paper style= {{ padding: '24px 24px'}}>
      <h3> My Todo Filter Plugin</h3>
    </Paper>
  );
}

export const replaceTodoFilters = {
  target: 'TodoFilters',
  modus: 'replace',
  component: MyTodoFilters,
}
