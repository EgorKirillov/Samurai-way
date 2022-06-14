import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogsItms/DialogItems';
import {Message} from './Messages/Mesages';
import {DialogItemTypes, DialogPagesType, MessageTypes} from "../../Redux/store";
import {InputAndButton} from './Messages/InputAndBatton';


type DialogsPropsType = {
   dialogsPage:DialogPagesType
   // newMessageTextValue: string
   // dialogsData: Array<DialogItemTypes>
   // messagesData: Array<MessageTypes>
   changeNewMessageValue: (newMessageTextValue: string) => void
   addNewMessage: () => void
   
}

export const Dialogs = (props: DialogsPropsType) => {
   
   
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
           <InputAndButton
             key={'key of universal input'}
             valueTextarea={props.dialogsPage.newMessageText}
             addMessage={props.addNewMessage}
             changeMessageValue={props.changeNewMessageValue}
           />
        </div>
     </div>
   );
}


