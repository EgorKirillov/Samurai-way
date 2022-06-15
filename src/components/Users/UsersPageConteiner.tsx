//import React from 'react';
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import { UsersPage } from './UsersPage';
import {followAC, setUsersAC, unfollowAC} from "../../Redux/usersReducer";



const mapStateToProps = (state: AppStateType) => {
   return {
         usersPage: state.usersPage
    
   }
}
const mapDispatchToProps = (dispatch: any) => { //// refactr
   
   return {
    
      onClickSetUsers: ()=> dispatch(setUsersAC()),
      onClickFollow: (userid:number) => dispatch(followAC(userid)),
      onClickUnfollow: (userid:number) => dispatch(unfollowAC(userid))
   
   }
}
export const UsersPageConteiner = connect(mapStateToProps, mapDispatchToProps)(UsersPage)