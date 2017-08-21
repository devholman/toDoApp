import cuid from 'cuid';

const initialState = [];
const ADD_TODO = 'ADD_TODO';
const COMPLETED_TODO = 'COMPLETED_TODO';
const LOAD_TODOS = 'LOAD_TODOS';
const GET_TODOS = 'GET_TODOS';

export const loadTodos = () => ({
  type: LOAD_TODOS
});
export const getTodos = todos => {
  return {
    type: GET_TODOS,
    payload: todos
  };
};
export const completedTodo = id => ({
  type: COMPLETED_TODO,
  payload: id
});

export const addTodo = ({ todo = '', completed = false, id = cuid() }) => ({
  type: ADD_TODO,
  payload: {
    id,
    completed,
    title: todo
  }
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.payload);
    case COMPLETED_TODO: {
      return state.map(
        todo => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
      );
    }
    case GET_TODOS: {
      return state.concat(action.payload);
    }
    default:
      return state;
  }
};
