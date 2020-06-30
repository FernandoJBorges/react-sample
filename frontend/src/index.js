import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import * as serviceWorker from './serviceWorker';
import App from './App'
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import mainReducer from './store'
import ReduxMulti from 'redux-multi';

const store = applyMiddleware(ReduxThunk, ReduxMulti)(createStore)(mainReducer)

ReactDOM.render(
<Provider store={store}>
      <App />
</Provider>
, document.getElementById('root'));
serviceWorker.unregister();