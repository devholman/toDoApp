import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Todos from '../features/todo/todo.reducer';
import rootSaga from '../features/todo/todo.saga.js';

const reducers = combineReducers({
  Todos
});

const sagaMiddleware = createSagaMiddleware();

const finalCreateStore = compose(
  applyMiddleware(sagaMiddleware),
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
    ? window.devToolsExtension && window.devToolsExtension()
    : f => f
)(createStore);

export default finalCreateStore(reducers);

sagaMiddleware.run(rootSaga);
