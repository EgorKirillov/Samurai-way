import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

import {News} from "./components/news/news";
import {Music} from "./components/Music/music";
import {Settings} from "./components/settings/settings";
import {ActionTypes, AppStateType} from "./Redux/store"

type AppPropsType = {
   state: AppStateType
   dispatch: (action: ActionTypes) => void
}


function App(props: AppPropsType) {
   
   return (
     <BrowserRouter>
        <div className={'app-wrapper'}>
           <Header/>
           <Navbar/>
           <div className={'app-wrapper-content'}>
              <Route exact path="/">
                 <Profile postsPage={props.state.profilePage}
                          dispatch={props.dispatch}
                 />
              </Route>
              <Route path={'/dialogs'} render={
                 () => <Dialogs
                   data={props.state.dialogsPage}
                   dispatch={props.dispatch}
                 />
              }/>
              <Route path={'/profile'} render={
                 () => <Profile postsPage={props.state.profilePage}
                                dispatch={props.dispatch}
                 />
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
