import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppStateType, state, StateType} from './Redux/stateApp'


export const rerenderEntireTree = (state:AppStateType) => {
    ReactDOM.render(
        <App state={state}

        />,
        document.getElementById('root')
    );
}

