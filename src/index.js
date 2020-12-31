import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './reducers/userReducer';
const store = createStore(postReducer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  ,document.getElementById('root')
);
serviceWorker.unregister();
