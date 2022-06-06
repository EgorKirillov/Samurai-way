import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  store } from './Redux/stateApp'


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            state={store.getState()}
            changeMessageText={store.changeMessageText.bind(store)}
            addMessageText={store.addMessage.bind(store)}
            addMyPost={store.addMyPost.bind(store)}
            changeNewPostText={store.changeNewPostText.bind(store)}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)