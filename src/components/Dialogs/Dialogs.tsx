import React, {useState} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogsItms/DialogItems';
import {Message} from './Messages/Mesages';
import {changeMessageText, DialogPagesType} from "../../Redux/stateApp";
import {InputAndButton} from './Messages/InputAndBatton';


type DialogsPropsType = {
    data: DialogPagesType
    changeMessageText: (newText: string) => void
    addMessageText: (messageText: string) => void

}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogElements = props.data.dialogsData.map(dialog =>
        <DialogItem linkID={dialog.linkID}
                    userName={dialog.userName}
                    avatarLink={dialog.avatarLink}/>)




    let messageElements = props.data.messagesData.map(message =>
        <Message messageText={message.messageText}/>)

    const addMessage = (text: string) => {
        props.addMessageText(text)
    }

    return (
        <div className={s.content}>
            <div className={s.dialogList}>
                {dialogElements}
            </div>
            <div>
                <div className={s.messageList}>
                    {messageElements}
                </div>
                <InputAndButton
                    changeMessageText={props.changeMessageText}
                    key={'key of universal input'}
                    valueTextarea={props.data.newMessageText}
                    addMessage={addMessage}
                />
            </div>
        </div>
    );
}


