//import React from 'react';
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import { UsersPage } from './UsersPage';
import {followAC, setUsersAC, unfollowAC, UserPageStateType} from "../../Redux/usersReducer";
import {Dispatch} from "redux";


export type MapDispatchPropType = {
   onClickSetUsers: ()=> void
   onClickFollow: (userid:number) => void
   onClickUnfollow: (userid:number) => void
}
export type MapStatePropType = {
   usersPage: UserPageStateType
}

const mapStateToProps = (state: AppStateType) => {
   return {
         usersPage: state.usersPage
   }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropType => { // import Dispatch from REDUX!!
   return {
      onClickSetUsers: ()=> dispatch(setUsersAC()),
      onClickFollow: (userid:number) => dispatch(followAC(userid)),
      onClickUnfollow: (userid:number) => dispatch(unfollowAC(userid))
   }
}
export const UsersPageConteiner = connect(mapStateToProps, mapDispatchToProps)(UsersPage)