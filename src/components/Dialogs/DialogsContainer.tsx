import React from 'react';
import {ActionTypes, DialogPagesType} from "../../Redux/store";
import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, changeMessageTextActionCreator} from '../../Redux/dialogsReducer';

type DialogsPropsType = {
   data: DialogPagesType
   dispatch: (action: ActionTypes) => void
}

export const DialogsContainer = (props: DialogsPropsType) => {
   
   const onAddNewMessageText = () => props.dispatch(addMessageActionCreator())
   const onChangeTextAreaValue = (text: string) => props.dispatch(changeMessageTextActionCreator(text))
   
   return (<Dialogs messagesData={props.data.messagesData}
                    dialogsData={props.data.dialogsData}
                    newMessageTextValue={props.data.newMessageText}
                    changeNewMessageValue={onChangeTextAreaValue}
                    addNewMessage={onAddNewMessageText}/>
   );
}

