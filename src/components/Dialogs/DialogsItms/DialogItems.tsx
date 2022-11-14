import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'
import { DialogItemTypes } from '../../../Redux/dialogsReducer'

export const DialogItem = (props: DialogItemTypes) => {
  return (
    <div className={s.dialog}>
      <img
        src={require('../../../assets/avatar/' + props.avatarLink)}
        alt={'avatar' + props.avatarLink}
      />
      <NavLink to={'/dialogs/' + props.linkID} activeClassName={s.dialogListActive}>
        {' '}
        {props.userName}{' '}
      </NavLink>
    </div>
  )
}
