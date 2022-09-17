import React, {memo, useCallback} from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import logo from "../../assets/images/logo3-removebg-preview.png"
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import {logoutThunk} from "../../Redux/authReducer";

export const Header = memo(() => {
  
  const loginName = useAppSelector(state => state.auth.login)
  const isAuth = useAppSelector(state => state.auth.isAuth)
  const dispatch = useAppDispatch()
  
  const logoutHandler = useCallback(()=>{
    dispatch(logoutThunk())
  },[dispatch])
  
  return (
    <header className={s.header}>
      <img
        src={logo}
        alt='img'/>
      
      <div className={s.loginBlock}>
        {!isAuth
          ? <NavLink to={"/login"}>not authorised Login </NavLink>
          : <div>
            <div>name:{loginName}</div>
            {/*<div>id:{props.id}</div>*/}
            {/*<div>email:{props.email}</div>*/}
            <button onClick={logoutHandler}>log out</button>
          </div>
        }
      </div>
    
    </header>
  )
})