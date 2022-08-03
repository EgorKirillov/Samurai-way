import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
//import {AuthStateType} from "../../Redux/authReducer";
import {HeaderContainerPropsType} from "./HeaderContainer";


export const Header = (props: HeaderContainerPropsType) => {
   
   return <header className={s.header}>
      <img
        src='https://w7.pngwing.com/pngs/376/116/png-transparent-flame-fire-logo-flame-orange-poster-logo.png'
        alt='img'/>
      
      <div className={s.loginBlock}>
         {!props.isAuth
           ? <NavLink to={"/login"}>not authorised Login </NavLink>
           : <div>
              <div>name:{props.login}</div>
              {/*<div>id:{props.id}</div>*/}
              {/*<div>email:{props.email}</div>*/}
                <button onClick={props.logoutThunk}>log out</button>
           </div>
         }
      </div>
   
   </header>
}