import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/redux-store'
import {Provider} from 'react-redux';
// import {StoreType} from "./Redux/store";


// export const rerenderEntireTree = () => {
//
//    ReactDOM.render(
//      <Provider store={store}>
//         <App />
//      </Provider>
//      , document.getElementById('root')
//    );
// }
//
// rerenderEntireTree()

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>
  , document.getElementById('root')
);


//store.subscribe(rerenderEntireTree)