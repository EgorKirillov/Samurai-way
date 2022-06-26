import React from 'react';
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {
   changeCurrentPageAC, changeTotalPagesCountAC,
   changeTotalUsersCountAC,
   followAC,
   setUsersAC,
   unfollowAC,
   UserType
} from "../../Redux/usersReducer";
import {Dispatch} from "redux";
import axios from "axios";
import UsersPage from "./UsersPage";


export type MapDispatchPropType = {
   getUsers: (users: Array<UserType>) => void
   changeCurrentUserPage: (currentUserPage: number) => void
   onClickFollow: (userid: number) => void
   onClickUnfollow: (userid: number) => void
   changeTotalUsersCount: (totalUsersCount: number) => void
   changeTotalPagesCount: (totalPagesCount: number) => void
}
export type MapStatePropType = {
   users: Array<UserType>
   totalUsersCount: number
   totalPagesCount: number
   countUsersPerPage: number
   currentUsersPage: number
}

type UserPagePropsType = MapDispatchPropType & MapStatePropType

class UsersC extends React.Component<UserPagePropsType> {
   
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentUsersPage}&count=${this.props.countUsersPerPage}`)
        .then(response => {
           this.props.getUsers(response.data.items)
           this.props.changeTotalUsersCount(response.data.totalCount)
           this.props.changeTotalPagesCount(Math.ceil(response.data.totalCount / this.props.countUsersPerPage))
           debugger
        })
   }
   
   onChangeCurrentUsersPage = (pageNumber: number) => {
      this.props.changeCurrentUserPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.countUsersPerPage}`)
        .then(response => {
           this.props.getUsers(response.data.items)
           this.props.changeTotalUsersCount(response.data.totalCount)
        })
   }
   
   render = () => {
      
      let pages = []
      for (let i = 1; i <= this.props.totalPagesCount; i++) {
         pages.push(i)
      }
      return <UsersPage currentUsersPage={this.props.currentUsersPage}
                        pagesArr={pages}
                        onChangeCurrentUsersPage={this.onChangeCurrentUsersPage}
                        users={this.props.users}
                        onClickFollow={this.props.onClickFollow}
                        onClickUnfollow={this.props.onClickUnfollow}
                        totalUsersCount={this.props.totalUsersCount}
      />
   }
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
      changeTotalPagesCount: (totalPagesCount: number) => dispatch(changeTotalPagesCountAC(totalPagesCount)),
      
      
   }
}
export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)