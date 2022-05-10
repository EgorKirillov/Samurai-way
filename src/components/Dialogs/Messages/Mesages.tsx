import React from 'react';
import s from './../Dialogs.module.css'


type PropsMessageTypes = {
    messageText: string
}

export const Message = (props: PropsMessageTypes) => {
    return (
        <div className={s.message}>{props.messageText}</div>
    )
}
