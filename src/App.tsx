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
import {AppStateType} from "./Redux/stateApp"

type AppPropsType = {
    state: AppStateType
    changeMessageText: (newText: string) => void
    addMessageText: (messageText: string) => void
    addMyPost: (postText: string) => void

}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>

                <div className={'app-wrapper-content'}>

                    <Route path={'/dialogs'} render={
                        () => <Dialogs
                            data={props.state.dialogsPage}
                            changeMessageText={props.changeMessageText}
                            addMessageText={props.addMessageText}

                        />
                    }/>

                    <Route path={'/profile'} render={
                        () => <Profile posts={props.state.profilePage.posts}
                                       addPost={props.addMyPost}/>
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
