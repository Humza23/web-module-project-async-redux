import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { reducer } from './reducers/index'

const store = createStore(reducer, applyMiddleware(logger, thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
