import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogsItms/DialogItems';
import {Message} from './Messages/Mesages';
import {ActionTypes, DialogPagesType} from "../../Redux/stateApp";
import {InputAndButton} from './Messages/InputAndBatton';


type DialogsPropsType = {
    data: DialogPagesType
    dispatch: (action: ActionTypes)=> void

}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogElements = props.data.dialogsData.map(dialog =>
        <DialogItem linkID={dialog.linkID}
                    userName={dialog.userName}
                    avatarLink={dialog.avatarLink}/>)




    let messageElements = props.data.messagesData.map(message =>
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
                <InputAndButton
                    key={'key of universal input'}
                    valueTextarea={props.data.newMessageText}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    );
}


