import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//importing create store 
import {createStore} from 'redux';

//importing provider for connected with react 
import { Provider } from 'react-redux';

// reducer
import rootReducer from './services/reducer/rootReducer';

//creted a store file
const store=createStore(rootReducer);
// console.warn('store',store);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
