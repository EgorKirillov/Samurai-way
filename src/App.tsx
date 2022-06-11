import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/news";
import {Music} from "./components/Music/music";
import {Settings} from "./components/settings/settings";
import {Store} from "redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
   store: Store
}

function App(props: AppPropsType) {
   
   return (
     <BrowserRouter>
        <div className={'app-wrapper'}>
           <Header/>
           <Navbar/>
           <div className={'app-wrapper-content'}>
              <Route exact path="/">
                 <Profile postsPage={props.store.getState().profilePage}
                          dispatch={props.store.dispatch}
                 />
              </Route>
              <Route path={'/dialogs'} render={
                 () => <DialogsContainer
                   data={props.store.getState().dialogsPage}
                   dispatch={props.store.dispatch}
                 />
              }/>
              <Route path={'/profile'} render={
                 () => <Profile postsPage={props.store.getState().profilePage}
                                dispatch={props.store.dispatch}
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
