import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink key={'profile'} to={'/profile'} activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink key={'dialogs'} to={'/dialogs'} activeClassName={s.active}>
          Messages
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink key={'news'} to={'/news'} activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink key={'users'} to={'/users'} activeClassName={s.active}>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink key={'music'} to={'/music'} activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink key={'settings'} to={'/settings'} activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  )
}
