import uuid from 'uuid/v4';

/***************************************
Basic Actions
***************************************/

export function createTodo(payload) {
  const id = `todo-${uuid()}`;
  return {
    id,
    type: 'CREATE_TODO',
    payload: { ...payload, id  }
  };
}

export function updateTodo(id, payload) {
  return { type: 'UPDATE_TODO', id, payload };
}

export function deleteTodo(id) {
  return { type: 'DELETE_TODO', id };
}

/***************************************
Higher Actions
***************************************/

export const addTodoItem = (user, text, date) =>
  (dispatch) => 
    dispatch(createTodo({ user, text, date: date.toLocaleTimeString() }));
