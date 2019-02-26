import { setIn, updateIn, merge, removeIn } from 'immutable';
import { combineReducers } from 'redux';

const defaultTodoState = {
  'todo-1': {
    user: 'Rigby',
    text: 'Playing video games',
    date: (new Date()).toLocaleTimeString(),
  },
  'todo-2': {
    user: 'Mordecai',
    text: 'Meet with Margarete',
    date: (new Date()).toLocaleTimeString(),
  }
}

function todoReducer(state = defaultTodoState , action) {
  switch (action.type) {
    case 'CREATE_TODO':
      return setIn(state, [action.id], action.payload)
    case 'UPDATE_TODO':
      return updateIn(state, [action.id], orig => merge(orig, action.payload))
    case 'DELETE_TODO':
      return removeIn(state, [action.id])
    default:
      return state
  }
}

export default combineReducers({
  todos: todoReducer
})
