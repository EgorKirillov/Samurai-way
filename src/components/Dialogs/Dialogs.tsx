import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogsItms/DialogItems';
import {Message} from './Messages/Mesages';
import {AddMessageForm} from './Messages/AddMessageForm';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {addMessageActionCreator} from '../../Redux/dialogsReducer';
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";

export const Dialogs = withAuthRedirect(() => {
  
  const dialogsData = useAppSelector(state => state.dialogsPage.dialogsData)
  const messagesData = useAppSelector(state => state.dialogsPage.messagesData)
  
  const dispatch = useAppDispatch()
  
  const onSubmit = (newMessage: string) => {
    dispatch(addMessageActionCreator(newMessage))
  }

    
    let dialogElements = dialogsData.map(dialog =>
        <DialogItem
            linkID={dialog.linkID}
            userName={dialog.userName}
            avatarLink={dialog.avatarLink}/>)
    
    let messageElements = messagesData.map(message =>
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
})

export default Dialogs

