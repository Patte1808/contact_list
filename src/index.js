import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import contacts from './reducers/ContactReducer';

import { Router, Route, browserHistory } from 'react-router';
import { hashHistory } from 'react-router'

const logger = createLogger();
const store = createStore(contacts, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
