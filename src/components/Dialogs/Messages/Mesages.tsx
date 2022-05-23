import React from 'react';
import s from './../Dialogs.module.css'
import {MessageTypes}  from "../../../Redux/stateApp";


export const Message = (props: MessageTypes) => {
    return (
        <div className={s.message}>{props.messageText}</div>
    )
}
