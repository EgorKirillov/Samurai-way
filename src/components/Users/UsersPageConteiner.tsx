import React from 'react';
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {
   changeCurrentPageAC,
   changeTotalUsersCountAC,
   followAC,
   setUsersAC,
   unfollowAC,
   UserType
} from "../../Redux/usersReducer";
import {Dispatch} from "redux";
import UsersC from './UsersC';


export type MapDispatchPropType = {
   getUsers: (users: Array<UserType>) => void
   changeCurrentUserPage: (currentUserPage:number) => void
   onClickFollow: (userid: number) => void
   onClickUnfollow: (userid: number) => void
   changeTotalUsersCount: (totalUsersCount: number) => void
}
export type MapStatePropType = {
   users: Array<UserType>
   totalUsersCount: number
   totalPagesCount: number
   countUsersPerPage: number
   currentUsersPage: number
}

const mapStateToProps = (state: AppStateType) => {
   return {
      users: state.usersPage.users,
      totalUsersCount: state.usersPage.totalUsersCount,
      totalPagesCount: state.usersPage.totalPagesCount,
      countUsersPerPage: state.usersPage.countUsersPerPage,
      currentUsersPage: state.usersPage.currentUsersPage,
      
   }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropType => { // import Dispatch from REDUX!!
   return {
      getUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
      onClickFollow: (userid: number) => dispatch(followAC(userid)),
      onClickUnfollow: (userid: number) => dispatch(unfollowAC(userid)),
      changeCurrentUserPage: (currentUserPage: number) => dispatch(changeCurrentPageAC(currentUserPage)),
      changeTotalUsersCount: (totalUsersCount: number) => dispatch(changeTotalUsersCountAC(totalUsersCount)),
   }
}
export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)