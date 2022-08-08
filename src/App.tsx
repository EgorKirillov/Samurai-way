import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/news";
import {Music} from "./components/Music/music";
import {Settings} from "./components/settings/settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersPageContainer from './components/Users/UsersPageConteiner';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {initializeAppThunk} from "./Redux/appReducer";
import {useAppDispatch, useAppSelector} from "./Redux/hooks";
import Preloader from "./components/common/Preloader/Preloader";

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
                            <ProfileContainer/>
                        </Route>
                        <Route exact path="/login">
                            <Login/>
                        </Route>
                        <Route path={'/dialogs'} render={
                            () => <DialogsContainer/>
                        }/>
                        <Route path={'/profile/:userId?'} render={
                            () => <ProfileContainer/>
                        }/>
                        <Route path={'/users'} render={
                            () => <UsersPageContainer/>
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
