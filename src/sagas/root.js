import { all, call, takeEvery } from 'redux-saga/effects';
import { addTodoAction, toggleTodoAction } from "../store/actions";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* init() {
  yield call(delay, 1000);
  yield console.log('init saga run');
}

function* addTodo() {
  yield call(delay, 1000);
  yield console.log('add todo saga run');
}

function* changeDoneStatus() {
  yield call(delay, 2000);
  yield console.log('change status saga run');

}

function* watchAddTodo() {
  yield takeEvery(addTodoAction().type, addTodo);
}

function* watchChangeDoneStatus() {
  yield takeEvery(toggleTodoAction().type, changeDoneStatus);
}

export default function* rootSaga() {
  yield all([
    init(),
    watchAddTodo(),
    watchChangeDoneStatus()
  ])
};

