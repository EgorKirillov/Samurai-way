import React from 'react';
import s from './../Dialogs.module.css'
import {MessageTypes}  from "../../../App";


export const Message = (props: MessageTypes) => {
    return (
        <div className={s.message}>{props.messageText}</div>
    )
}
