import React, { memo } from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import logo from "../../assets/images/logo3-removebg-preview.png"

type HeaderPropsType = {
  isAuth: boolean
  loginName: string
  logout: () => void
}
export const Header = memo((props: HeaderPropsType) => {
  console.log('render header')
  return (
    <header className={s.header}>
      <img
        src={logo}
        alt='img'/>
      
      <div className={s.loginBlock}>
        {!props.isAuth
          ? <NavLink to={"/login"}>not authorised Login </NavLink>
          : <div>
            <div>name:{props.loginName}</div>
            {/*<div>id:{props.id}</div>*/}
            {/*<div>email:{props.email}</div>*/}
            <button onClick={props.logout}>log out</button>
          </div>
        }
      </div>
    
    </header>
  )
})