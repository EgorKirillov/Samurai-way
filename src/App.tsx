import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/news";
import {Music} from "./components/Music/music";
import {Settings} from "./components/settings/settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import { UsersPageContainer } from './components/Users/UsersPageConteiner';

// type AppPropsType = {
   //store: StoreType
// }

function App(/*props: AppPropsType*/) {
   
   return (
     <BrowserRouter>
        <div className={'app-wrapper'}>
           <Header/>
           <Navbar/>
           <div className={'app-wrapper-content'}>
              <Route exact path="/">
                 <Profile/>
                 {/*<Profile postsPage={props.store.getState().profilePage}*/}
                 {/*         dispatch={props.store.dispatch}*/}
                 {/*/>*/}
              </Route>
              <Route path={'/dialogs'} render={
                 ()=> <DialogsContainer />
                 // () => <DialogsContainer
                 //   data={props.store.getState().dialogsPage}
                 //   dispatch={props.store.dispatch}
                 // />
              }/>
              <Route path={'/profile'} render={
                 ()=><Profile/>
                 // () => <Profile postsPage={props.store.getState().profilePage}
                 //                dispatch={props.store.dispatch}
                 // />
              }/>
              <Route path={'/users'} render={
                 ()=><UsersPageContainer/>
                 // () => <Profile postsPage={props.store.getState().profilePage}
                 //                dispatch={props.store.dispatch}
                 // />
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
