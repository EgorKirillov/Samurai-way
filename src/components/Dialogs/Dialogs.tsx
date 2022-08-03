import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogsItms/DialogItems';
import {Message} from './Messages/Mesages';
import {AddMessageForm} from './Messages/AddMessageForm';
import {DialogsFromConteinerType} from "./DialogsContainer";


type DialogsPropsType = DialogsFromConteinerType

export const Dialogs = (props: DialogsPropsType) => {
    
    const onSubmit = (newText: string) => {
        props.addNewMessage(newText)
    }
    
    let dialogElements = props.dialogsPage.dialogsData.map(dialog =>
        <DialogItem
            linkID={dialog.linkID}
            userName={dialog.userName}
            avatarLink={dialog.avatarLink}/>)
    
    let messageElements = props.dialogsPage.messagesData.map(message =>
        <Message messageText={message.messageText}/>)
    
    return (
        <div className={s.content}>
            <div className={s.dialogList}>
                {dialogElements}
            </div>
            <div>
                <div className={s.messageList}>
                    {messageElements}
                </div>
                <AddMessageForm onSubmit={onSubmit}
                />
            </div>
        </div>
    );
}


