import React, {lazy, Suspense, useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/news";
import {Music} from "./components/Music/music";
import {Settings} from "./components/settings/settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersPageContainer from './components/Users/UsersPageConteiner';
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {initializeAppThunk} from "./Redux/appReducer";
import {useAppDispatch, useAppSelector} from "./Redux/hooks";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = lazy(() => import ('./components/Dialogs/DialogsContainer'))
const UsersPageContainer = lazy(() => import ('./components/Users/UsersPageConteiner'))
const ProfileContainer = lazy(() => import ('./components/Profile/ProfileContainer'))

function App() {
  const dispatch = useAppDispatch()
  const initialized = useAppSelector(state => state.app.initialized)
  
  useEffect(() => {
    dispatch(initializeAppThunk())
  }, [dispatch])
  console.log(initialized)
  return (
    <BrowserRouter>
      
      <div className={'app-wrapper'}>
        <HeaderContainer/>
        <Navbar/>
        {(!initialized) ? <div style={{backgroundColor: "grey"}}>загрузка <Preloader/></div>
          : <div className={'app-wrapper-content'}>
            <Route exact path="/">
              <Suspense fallback={<div>.... loading....</div>}>
                <ProfileContainer/>
              </Suspense>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route path={'/dialogs'} render={
              () =>
                <Suspense fallback={<div>.... loading....</div>}>
                  <DialogsContainer/>
                </Suspense>
            }/>
            <Route path={'/profile/:userId?'} render={
              () =>
                <Suspense fallback={<div>.... loading....</div>}>
                  <ProfileContainer/>
                </Suspense>
            }/>
            <Route path={'/users'} render={
              () =>
                <Suspense fallback={<div>.... loading....</div>}>
                  <UsersPageContainer/>
                </Suspense>
            }/>
            <Route path={'/news'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
          </div>
        }
      </div>
    
    </BrowserRouter>
  );
}

export default App;
