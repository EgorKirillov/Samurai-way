import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css'
import {DialogItemTypes} from "../../../App";

export const DialogItem = (props: DialogItemTypes) => {
    return (
        <div className={s.dialog + ' ' + s.activeDialog}>
            <NavLink to={"/dialogs/" + props.linkID} activeClassName={s.dialogListActive}> {props.userName} </NavLink>
        </div>
    )
}
