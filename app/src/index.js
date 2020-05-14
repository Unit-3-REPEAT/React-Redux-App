import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//All the extra imports needed for this project
import quoteReducer from './reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';




//Set up redux store
const store = createStore(quoteReducer, applyMiddleware(thunk, logger))


ReactDOM.render(
//Connect redux store by wrapping App inside Provider and passing in store={store}
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
