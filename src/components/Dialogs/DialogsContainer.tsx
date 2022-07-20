//import React from 'react';
import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, changeMessageTextActionCreator} from '../../Redux/dialogsReducer';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {DialogPagesType} from "../../Redux/store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapDispatchPropsType = {
   changeNewMessageValue: (text: string) => void
   addNewMessage: () => void
}
type MapStateToPropsType = {
   dialogsPage: DialogPagesType
//   isAuth: boolean
}
export type DialogsFromConteinerType = MapDispatchPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStateType) => {
   return {
      dialogsPage: state.dialogsPage,
      //    isAuth: state.auth.isAuth,
   }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => { // import Dispatch from REDUX!!
   return {
      changeNewMessageValue: (text: string) => dispatch(changeMessageTextActionCreator(text)),
      addNewMessage: () => dispatch(addMessageActionCreator())
   }
}
//export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs)

