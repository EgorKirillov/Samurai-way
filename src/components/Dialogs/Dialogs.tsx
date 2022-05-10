import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

type PropsDialogItemTypes = {
    linkID: number,
    userName: string
}
type PropsMessageTypes = {
    messageText: string
}

const DialogItem = (props: PropsDialogItemTypes) => {
    return (
        <div className={s.dialog + ' ' + s.activeDialog}>
            <NavLink to={"/dialogs/" + props.linkID} activeClassName={s.dialogListActive}> {props.userName} </NavLink>
        </div>
    )
}

const Message = (props: PropsMessageTypes) => {
    return (
        <div className={s.message}>{props.messageText}</div>
    )
}
export const Dialogs = () => {
    const dialogsData/*: Array<PropsDialogItemTypes>*/ = [
        {id: 1, user: 'Egor'},
        {id: 2, user: 'Vlad'},
        {id: 3, user: 'Sasha'},
        {id: 4, user: 'Sveta'},
        {id: 5, user: 'Dim'},
        {id: 6, user: 'Serg'},
        {id: 7, user: 'Mark'},
        {id: 71, user: 'Mark'},
        {id: 8, user: 'Player one'}
    ]

    const messagesData = [
        {messageText: "Hi!"},
        {messageText: "Hello!!"},
        {messageText: "yo"},
        {messageText: "sdfl dj"},
        {messageText: "||||||||||||||"},
        {messageText: "Zelt"},
        {messageText: "Zelt"},
        {messageText: "Zelt"},

    ]

    let dialogElements = dialogsData.map(dialog => <DialogItem linkID={dialog.id} userName={dialog.user}/>)
    let messageElements = messagesData.map(message => <Message messageText={message.messageText}/>)
    return (
        <div className={s.content}>
            <div className={s.dialogList}>
                {dialogElements}
            </div>
            <div className={s.messageList}>
                {messageElements}
            </div>
        </div>
    );
}

