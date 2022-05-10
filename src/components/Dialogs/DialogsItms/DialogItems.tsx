import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css'

type PropsDialogItemTypes = {
    linkID: number,
    userName: string
}


export const DialogItem = (props: PropsDialogItemTypes) => {
    return (
        <div className={s.dialog + ' ' + s.activeDialog}>
            <NavLink to={"/dialogs/" + props.linkID} activeClassName={s.dialogListActive}> {props.userName} </NavLink>
        </div>
    )
}
