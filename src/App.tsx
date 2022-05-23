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
import {AppStateType, addMyPost} from "./Redux/stateApp"

function App(props: AppStateType) {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>

                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={
                        () => <Dialogs dialogsData={props.dialogsPage.dialogsData}
                                       messagesData={props.dialogsPage.messagesData}/>
                    }/>
                    <Route path={'/profile'} render={
                        () => <Profile posts={props.profilePage.posts}
                        addPost={addMyPost}/>
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
