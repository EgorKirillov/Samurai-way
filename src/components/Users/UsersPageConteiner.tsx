import React from 'react';
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC,  UserType} from "../../Redux/usersReducer";
import {Dispatch} from "redux";
import UsersC from './UsersC';


export type MapDispatchPropType = {
   getUsers: (users: Array<UserType>) => void
   onClickFollow: (userid:number) => void
   onClickUnfollow: (userid:number) => void
}
export type MapStatePropType = {
   users: Array<UserType>
}

const mapStateToProps = (state: AppStateType) => {
   return {
         users: state.usersPage.users
   }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropType => { // import Dispatch from REDUX!!
   return {
      getUsers: (users: Array<UserType>)=> dispatch(setUsersAC(users)),
      onClickFollow: (userid:number) => dispatch(followAC(userid)),
      onClickUnfollow: (userid:number) => dispatch(unfollowAC(userid))
   }
}
export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)