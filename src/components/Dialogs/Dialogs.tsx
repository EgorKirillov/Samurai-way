import React from 'react';
import { DialogItemTypes, MessageTypes } from '../../App';
import s from './Dialogs.module.css'
import { DialogItem } from './DialogsItms/DialogItems';
import { Message } from './Messages/Mesages';


type DialogsTypes = {
    dialogsData: Array<DialogItemTypes>
    messagesData: Array<MessageTypes>
}
export const Dialogs = (props:DialogsTypes) => {



    let dialogElements = props.dialogsData.map(dialog => <DialogItem linkID={dialog.linkID} userName={dialog.userName}/>)
    let messageElements = props.messagesData.map(message => <Message messageText={message.messageText}/>)
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

