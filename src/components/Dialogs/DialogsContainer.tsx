//import React from 'react';
import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, DialogPagesType} from '../../Redux/dialogsReducer';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapDispatchPropsType = {
    addNewMessage: (newMessage: string) => void
}
type MapStateToPropsType = {
    dialogsPage: DialogPagesType
}
export type DialogsFromConteinerType = MapDispatchPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => { // import Dispatch from REDUX!!
    return {
        addNewMessage: (newMessage) => dispatch(addMessageActionCreator(newMessage))
    }
}
//export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)

