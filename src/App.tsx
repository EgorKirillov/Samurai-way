import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

import {News} from "./components/news/news";
import {Music} from "./components/music";
import {Settings} from "./components/settings/settings";


export type MessageTypes = {
    messageText: string
}

export type DialogItemTypes = {
    linkID: number,
    userName: string
}
export type MyPostsType = {
    id: number,
    postText: string,
    likeCount: number
}

type AppPropsType = {
    dialogsData: Array<DialogItemTypes>
    messagesData: Array<MessageTypes>
    posts:Array<MyPostsType>
}

function App(props:AppPropsType) {




    return (
        <BrowserRouter >
            <div className={'app-wrapper'}>

                <Header/>
                <Navbar/>

                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={
                        ()=><Dialogs dialogsData={props.dialogsData}
                                     messagesData={props.messagesData} />
                    }/>
                    <Route path={'/profile'} render={
                        ()=> <Profile posts={props.posts} />
                    }/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>



            </div>
        </BrowserRouter>
    );
}

export default App;
