import React from 'react';

import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, changeMessageTextActionCreator} from '../../Redux/dialogsReducer';

import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";

// type DialogsPropsType = {
   // data: DialogPagesType
   // dispatch: (action: ActionTypes) => void
// }

// export const DialogsContaine1r = (props: DialogsPropsType) => {
//    return (
//      <StoreContext.Consumer>
//         {store => {
//            const onAddNewMessageText = () => store.dispatch(addMessageActionCreator())
//            const onChangeTextAreaValue = (text: string) => store.dispatch(changeMessageTextActionCreator(text))
//
//            return (<Dialogs messagesData={store.getState().dialogsPage.messagesData}
//                             dialogsData={store.getState().dialogsPage.dialogsData}
//                             newMessageTextValue={store.getState().dialogsPage.newMessageText}
//                             changeNewMessageValue={onChangeTextAreaValue}
//                             addNewMessage={onAddNewMessageText}/>
//            );
//
//         }
//         }
//      </StoreContext.Consumer>
//    )

const mapStateToProps = (state: AppStateType) => {
   return {
      dialogsPage: state.dialogsPage
   }
}
const mapDispatchToProps = (dispatch: any) => { //// refactr
   
   return {
      changeNewMessageValue: (text: string) => dispatch(changeMessageTextActionCreator(text)),
      addNewMessage: () => dispatch(addMessageActionCreator())
   }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


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
   
   


