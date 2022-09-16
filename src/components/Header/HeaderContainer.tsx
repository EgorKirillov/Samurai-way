import React, {useCallback} from "react";
import {Header} from "./Header";
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import {logoutThunk} from "../../Redux/authReducer";

export const HeaderContainer = () => {
  const loginName = useAppSelector(state => state.auth.login)
  const isAuth = useAppSelector(state => state.auth.isAuth)
  // const id = useAppSelector(state => state.auth.id)
  
  const dispatch = useAppDispatch()
  
  const logoutHandler = useCallback(()=>{
    dispatch(logoutThunk())
  },[dispatch])
  
  return <Header key={'mainHeader'} isAuth={isAuth} loginName={loginName} logout={logoutHandler}/>
}

