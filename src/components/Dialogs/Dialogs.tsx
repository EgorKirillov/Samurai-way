import React, {useState} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogsItms/DialogItems';
import {Message} from './Messages/Mesages';
import {DialogPagesType} from "../../Redux/stateApp";
import {InputAndButton} from './Messages/InputAndBatton';


export const Dialogs = (props: DialogPagesType) => {


    let dialogElements = props.dialogsData.map(dialog =>
        <DialogItem linkID={dialog.linkID}
                    userName={dialog.userName}
                    avatarLink={dialog.avatarLink}/>)

    let [messageElements, setMessageElements] = useState(props.messagesData.map(message =>
        <Message messageText={message.messageText}/>))

    const addMessage = (text: string) => {
        // const adedMessage = { messageText: text }

        setMessageElements([...messageElements, <Message messageText={text}/>])
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
                <InputAndButton key={'key of universal input'} callback={addMessage}/>
            </div>
        </div>
    );
}


