import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  store } from './Redux/stateApp'


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            state={store.getState()}
            dispatch = {store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)