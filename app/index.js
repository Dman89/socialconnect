import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, browserHistory} from 'react-router';
import ReduxPromise from 'redux-promise'
import reducers from "./reducers";
import route from './route';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const APP = document.querySelector('.container');
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={route}/>
  </Provider>,
  APP);
