//import React from 'react';
import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, changeMessageTextActionCreator} from '../../Redux/dialogsReducer';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {DialogPagesType} from "../../Redux/store";

type MapDispatchPropsType = {
   changeNewMessageValue: (text: string) => void
   addNewMessage: () => void
}
type MapStateToPropsType = {
   dialogsPage: DialogPagesType
}
export type DialogsFromConteinerType = MapDispatchPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStateType) => {
   return {
      dialogsPage: state.dialogsPage
   }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => { // import Dispatch from REDUX!!
   return {
      changeNewMessageValue: (text: string) => dispatch(changeMessageTextActionCreator(text)),
      addNewMessage: () => dispatch(addMessageActionCreator())
   }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)



