import React from 'react';
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {
    changeCurrentPage, changeTotalPagesCount,
    changeTotalUsersCount,
    followSuccess, setIsFatchingValue,
    getUsers,
    unfollowSuccess,
    UserType, toggleFollowInProgress, getUsersThunkCreator, unfollowUserThunk, followUserThunk
} from "../../Redux/usersReducer";
import UsersPage from "./UsersPage";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export type MapDispatchPropType = {
    getUsers: (users: Array<UserType>) => void
    changeCurrentPage: (currentUserPage: number) => void
    followSuccess: (userid: number) => void
    unfollowSuccess: (userid: number) => void
    changeTotalUsersCount: (totalUsersCount: number) => void
    changeTotalPagesCount: (totalPagesCount: number) => void
    setIsFatchingValue: (isFatchung: boolean) => void
    toggleFollowInProgress: (isFatchung: boolean, id: number) => void
    getUsersThunkCreator: (currentUsersPage: number, countUsersPerPage: number) => any
    unfollowUserThunk: (userID: number) => any
    followUserThunk: (userID: number) => any
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
        this.props.changeCurrentPage(pageNumber) // не было в 66 уроке
        /*  this.props.setIsFatchingValue(true)
          this.props.changeCurrentPage(pageNumber)
          usersAPI.changePageUsers(pageNumber, this.props.countUsersPerPage)
            .then(data => {
               this.props.getUsers(data.items)
               this.props.changeTotalUsersCount(data.totalCount)
               this.props.setIsFatchingValue(false)
            })*/
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
                          onClickFollow={this.props.followUserThunk}
                          onClickUnfollow={this.props.unfollowUserThunk}
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

/*export const UsersPageContainer = withAuthRedirect(connect(mapStateToProps, {
   getUsers,
   followSuccess,
   unfollowSuccess,
   changeCurrentPage,
   changeTotalUsersCount,
   changeTotalPagesCount,
   setIsFatchingValue,
   toggleFollowInProgress,
   getUsersThunkCreator,
   unfollowUserThunk,
   followUserThunk,
})(UsersC))*/
export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        getUsers,
        followSuccess,
        unfollowSuccess,
        changeCurrentPage,
        changeTotalUsersCount,
        changeTotalPagesCount,
        setIsFatchingValue,
        toggleFollowInProgress,
        getUsersThunkCreator,
        unfollowUserThunk,
        followUserThunk,
    },)
)(UsersC)