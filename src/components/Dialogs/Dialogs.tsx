import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogsItms/DialogItems';
import {Message} from './Messages/Mesages';
import {DialogPagesType} from "../../stateApp";


export const Dialogs = (props: DialogPagesType) => {


    let dialogElements = props.dialogsData.map(dialog =>
        <DialogItem linkID={dialog.linkID}
                    userName={dialog.userName}
                    avatarLink={dialog.avatarLink}/>)
    let messageElements = props.messagesData.map(message =>
        <Message messageText={message.messageText}/>)
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

