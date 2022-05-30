import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addMyPost,  changeMessageText, state, subscribe} from './Redux/stateApp'


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            state={state}
            changeMessageText={changeMessageText}
            addMessageText={addMessage}
            addMyPost={addMyPost}


        />,
        document.getElementById('root')
    );
}

rerenderEntireTree()

subscribe(rerenderEntireTree)