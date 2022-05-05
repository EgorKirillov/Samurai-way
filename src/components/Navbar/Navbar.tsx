import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"

export function Navbar() {
    return (
        <nav className={s.nav} >
            <div className={s.item}>
                <NavLink to={"/profile"} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/dialogs"} activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={"/news"} activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/music"} activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/settings"} activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    )
}