import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import Reducers from './store/reducers'
import rootSaga from "./sagas/root";

console.log('rootSaga', rootSaga);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
store.subscribe(() => console.log(store.getState()))
console.log(store.getState()) // 0

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
