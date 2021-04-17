//import './index.css';
//import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {createStore,applyMiddleware,compose}  from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
  reducers,
   compose(applyMiddleware(thunk),
    composeWithDevTools()
   ))
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
