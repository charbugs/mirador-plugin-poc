import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';

const deletedTodosReducer = (state = [], action) => {
  switch (action.type) {
    case 'EVENT_TODO_DELETED':
      return [ ...state, action.todo]
    default:
      return state;
  }
}

const DeletedTodos = props => (
  <Paper style={{ padding: '24px 24px' }}>
    <h3>Deleted Todos (Plugin)</h3>
    <ul>
      {
        props.deletedTodos.map((todo, index) => <li key={index}>{todo.text}</li>)
      }
    </ul>
  </Paper>
);

const mapStateToProps = state  => ({
  deletedTodos: state.deletedTodos
});

const ConnectedDeletedTodos = connect(mapStateToProps, null)(DeletedTodos);

export const listDeletedTodos = {
  target: 'App',
  modus: 'add',
  component: ConnectedDeletedTodos,
  reducers: {
    deletedTodos: deletedTodosReducer,
  }
};
