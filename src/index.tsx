import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const dialogsData = [
    {linkID: 1, userName: 'Egor'},
    {linkID: 2, userName: 'Vlad'},
    {linkID: 3, userName: 'Sasha'},
    {linkID: 4, userName: 'Sveta'},
    {linkID: 5, userName: 'Dim'},
    {linkID: 6, userName: 'Serg'},
    {linkID: 7, userName: 'Mark'},
    {linkID: 71, userName: 'Mark'},
    {linkID: 8, userName: 'Player one'},
    {linkID: 81, userName: 'Player two'}
]

const messagesData = [
    {messageText: "Hi!"},
    {messageText: "Hello!!"},
    {messageText: "yo"},
    {messageText: "sdfl dj"},
    {messageText: "||||||||||||||"},
    {messageText: "Zelt"},
    {messageText: "Zelt"},
    {messageText: "Zelt"},
    {messageText: "Zelt1"},
]

const posts = [
    {id: 11, postText: "First post ", likeCount: 25},
    {id: 12, postText: "Second post ", likeCount: 5},
    {id: 13, postText: "Bad post ", likeCount: 11},
    {id: 14, postText: "Good post ", likeCount: 12},
    {id: 15, postText: "Last post give me LIKE", likeCount: 0},
    {id: 16, postText: "And Last post ", likeCount: 35},
    {id: 17, postText: "Lastest post ", likeCount: 99}
]


ReactDOM.render(
    <App dialogsData={dialogsData}
         messagesData={messagesData}
         posts={posts}
    />,
  document.getElementById('root')
);