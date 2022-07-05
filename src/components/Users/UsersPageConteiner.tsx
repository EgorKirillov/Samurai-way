import React from 'react';
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {
   changeCurrentPage, changeTotalPagesCount,
   changeTotalUsersCount,
   follow, setIsFatchingValue,
   getUsers,
   unfollow,
   UserType
} from "../../Redux/usersReducer";
import axios from "axios";
import UsersPage from "./UsersPage";


export type MapDispatchPropType = {
   getUsers: (users: Array<UserType>) => void
   changeCurrentPage: (currentUserPage: number) => void
   follow: (userid: number) => void
   unfollow: (userid: number) => void
   changeTotalUsersCount: (totalUsersCount: number) => void
   changeTotalPagesCount: (totalPagesCount: number) => void
   setIsFatchingValue: (isFatchung: boolean) => void
}
export type MapStatePropType = {
   users: Array<UserType>
   totalUsersCount: number
   totalPagesCount: number
   countUsersPerPage: number
   currentUsersPage: number
   isFatching: boolean
}

type UserPagePropsType = MapDispatchPropType & MapStatePropType

class UsersC extends React.Component<UserPagePropsType> {
   
   componentDidMount() {
      this.props.setIsFatchingValue(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentUsersPage}&count=${this.props.countUsersPerPage}`,
        {
           withCredentials: true,
           headers: {
              "API-KEY": "8fa8d5a8-7252-4514-960a-b4b00d0670e7"
           }
        }
      )
        .then(response => {
           this.props.getUsers(response.data.items)
           this.props.changeTotalUsersCount(response.data.totalCount)
           this.props.changeTotalPagesCount(Math.ceil(response.data.totalCount / this.props.countUsersPerPage))
           this.props.setIsFatchingValue(false)
        })
   }
   
   onChangeCurrentUsersPage = (pageNumber: number) => {
      this.props.setIsFatchingValue(true)
      this.props.changeCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.countUsersPerPage}`,
        {
           withCredentials: true,
           headers: {
              "API-KEY": "8fa8d5a8-7252-4514-960a-b4b00d0670e7"
           }
        })
        .then(response => {
           this.props.getUsers(response.data.items)
           this.props.changeTotalUsersCount(response.data.totalCount)
           this.props.setIsFatchingValue(false)
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
                        onClickFollow={this.props.follow}
                        onClickUnfollow={this.props.unfollow}
                        totalUsersCount={this.props.totalUsersCount}
                        isFatching={this.props.isFatching}
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
      isFatching: state.usersPage.isFatching,
   }
}
/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropType => { // import Dispatch from REDUX!!
   return {
      getUsers: (users: Array<UserType>) => dispatch(getUsers(users)),
      follow: (userid: number) => dispatch(follow(userid)),
      unfollow: (userid: number) => dispatch(unfollow(userid)),
      changeCurrentPage: (currentUserPage: number) => dispatch(changeCurrentPage(currentUserPage)),
      changeTotalUsersCount: (totalUsersCount: number) => dispatch(changeTotalUsersCount(totalUsersCount)),
      changeTotalPagesCount: (totalPagesCount: number) => dispatch(changeTotalPagesCount(totalPagesCount)),
      setIsFatchingValue: (isFatchung: boolean) => dispatch(setIsFatchingValue(isFatchung)),
   }
}*/

export const UsersPageContainer = connect(mapStateToProps, {
   getUsers,
   follow,
   unfollow,
   changeCurrentPage,
   changeTotalUsersCount,
   changeTotalPagesCount,
   setIsFatchingValue
})(UsersC)