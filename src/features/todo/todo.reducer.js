import cuid from 'cuid';

const initialState = [];
const ADD_TODO = 'ADD_TODO';
const COMPLETED_TODO = 'COMPLETED_TODO';

export const completedTodo = id => ({
  type: COMPLETED_TODO,
  payload: id
});

export const addTodo = ({ todo = '', completed = false, id = cuid() }) => ({
  type: ADD_TODO,
  payload: {
    todo,
    id,
    completed
  }
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.payload);
    case COMPLETED_TODO: {
      return state.map(todo => {
        console.log(todo.id, action.payload, !todo.completed);
        return todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo;
      });
    }
    default:
      return state;
  }
};
