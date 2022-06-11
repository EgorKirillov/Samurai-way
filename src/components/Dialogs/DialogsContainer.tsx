import React from 'react';
import {ActionTypes, DialogPagesType} from "../../Redux/store";
import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, changeMessageTextActionCreator} from '../../Redux/dialogsReducer';
import {StoreContext} from '../../StoreContext';

type DialogsPropsType = {
   // data: DialogPagesType
   // dispatch: (action: ActionTypes) => void
}

export const DialogsContainer = (props: DialogsPropsType) => {
   return (
     <StoreContext.Consumer>
        {store => {
           const onAddNewMessageText = () => store.dispatch(addMessageActionCreator())
           const onChangeTextAreaValue = (text: string) => store.dispatch(changeMessageTextActionCreator(text))
           
           return (<Dialogs messagesData={store.getState().dialogsPage.messagesData}
                            dialogsData={store.getState().dialogsPage.dialogsData}
                            newMessageTextValue={store.getState().dialogsPage.newMessageText}
                            changeNewMessageValue={onChangeTextAreaValue}
                            addNewMessage={onAddNewMessageText}/>
           );
           
        }
        }
     </StoreContext.Consumer>
   )
   
   // const onAddNewMessageText = () => props.dispatch(addMessageActionCreator())
   // const onChangeTextAreaValue = (text: string) => props.dispatch(changeMessageTextActionCreator(text))
   //
   // return (<Dialogs messagesData={props.data.messagesData}
   //                  dialogsData={props.data.dialogsData}
   //                  newMessageTextValue={props.data.newMessageText}
   //                  changeNewMessageValue={onChangeTextAreaValue}
   //                  addNewMessage={onAddNewMessageText}/>
   // );
   //
   
   
}

