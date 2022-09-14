import React from 'react';
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {
  changeCurrentPage, changeTotalPagesCount, changeTotalUsersCount,
  setIsFatchingValue, getUsers, UserType, toggleFollowInProgress,
  getUsersThunkCreator, followToggleUserThunk
} from "../../Redux/usersReducer";
import UsersPage from "./UsersPage";
import {compose} from "redux";


export type MapDispatchPropType = {
  getUsers: (users: Array<UserType>) => void
  changeCurrentPage: (currentUserPage: number) => void
  changeTotalUsersCount: (totalUsersCount: number) => void
  changeTotalPagesCount: (totalPagesCount: number) => void
  setIsFatchingValue: (isFatchung: boolean) => void
  toggleFollowInProgress: (isFatchung: boolean, id: number) => void
  getUsersThunkCreator: (currentUsersPage: number, countUsersPerPage: number) => any
  followToggleUserThunk: (userid: number, isFollow: boolean) => any
}
export type MapStatePropType = {
  users: Array<UserType>
  totalUsersCount: number
  totalPagesCount: number
  countUsersPerPage: number
  currentUsersPage: number
  isFatching: boolean
  followingIsProgress: Array<number>
}

type UserPagePropsType = MapDispatchPropType & MapStatePropType

class UsersC extends React.Component<UserPagePropsType> {
  
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentUsersPage, this.props.countUsersPerPage)
  }
  
  onChangeCurrentUsersPage = (pageNumber: number) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.countUsersPerPage)
    this.props.changeCurrentPage(pageNumber)
  }
  
  render = () => {
    
    let pages = []
    for (let i = 1; i <= this.props.totalPagesCount; i++) {
      pages.push(i)
    }
    //if (!this.props.isAuth) return <Redirect to={"/login"} />
    return <UsersPage currentUsersPage={this.props.currentUsersPage}
                      pagesArr={pages}
                      onChangeCurrentUsersPage={this.onChangeCurrentUsersPage}
                      users={this.props.users}
                      onClickFollowToggle={this.props.followToggleUserThunk}
                      totalUsersCount={this.props.totalUsersCount}
                      isFatching={this.props.isFatching}
                      followingIsProgress={this.props.followingIsProgress}
                      toggleFollowInProgress={this.props.toggleFollowInProgress}
    />
  }
}


const mapStateToProps = (state: AppStateType): MapStatePropType => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    totalPagesCount: state.usersPage.totalPagesCount,
    countUsersPerPage: state.usersPage.countUsersPerPage,
    currentUsersPage: state.usersPage.currentUsersPage,
    isFatching: state.usersPage.isFatching,
    followingIsProgress: state.usersPage.followingInProgress,
  }
}

export default compose<React.ComponentType>(
  //withAuthRedirect,
  connect(mapStateToProps, {
    getUsers,
    changeCurrentPage,
    changeTotalUsersCount,
    changeTotalPagesCount,
    setIsFatchingValue,
    toggleFollowInProgress,
    getUsersThunkCreator,
    followToggleUserThunk,
  },)
)(UsersC)