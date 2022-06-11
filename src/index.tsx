import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/redux-store'
import {StoreContext} from './StoreContext';

// import {StoreType} from "./Redux/store";


export const rerenderEntireTree = () => {
   
   ReactDOM.render(
     <StoreContext.Provider value={store}>
     <App
       //store={store}
       // state={store.getState()}
       // dispatch={store.dispatch.bind(store)}
     />
     </StoreContext.Provider>
     , document.getElementById('root')
   );
}
debugger

rerenderEntireTree()
store.subscribe(rerenderEntireTree)