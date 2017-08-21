import { all, takeEvery, fork, call, put } from 'redux-saga/effects';
import { loadTodos } from './getTodos';
import { getTodos } from './todo.reducer';

function* callGetTodos(action) {
  try {
    const { data } = yield call(loadTodos, action.payload);
    yield put(getTodos(data));
  } catch (e) {
    yield console.log('ERROR', e);
  }
}

function* watchGetTodos() {
  yield takeEvery('LOAD_TODOS', callGetTodos);
}

export default function*() {
  yield all([fork(watchGetTodos)]);
}
