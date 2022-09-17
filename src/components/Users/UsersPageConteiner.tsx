import React, {useEffect} from 'react';
import {
  changeCurrentPage,
  followToggleUserThunk,
  getUsersThunkCreator,
  toggleFollowInProgress
} from "../../Redux/usersReducer";
import UsersPage from "./UsersPage";
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";


const UsersPageContainer = () => {
  const currentUsersPage = useAppSelector(state => state.usersPage.currentUsersPage)
  const totalPagesCount = useAppSelector(state => state.usersPage.totalPagesCount)
  const isFatching = useAppSelector(state => state.usersPage.isFatching)
  const users = useAppSelector(state => state.usersPage.users)
  const totalUsersCount = useAppSelector(state => state.usersPage.totalUsersCount)
  const countUsersPerPage = useAppSelector(state => state.usersPage.countUsersPerPage)
  const followingIsProgress = useAppSelector(state => state.usersPage.followingInProgress)
  
  const dispatch = useAppDispatch()
  
  let pages = []
  for (let i = 1; i <= totalPagesCount; i++) {
    pages.push(i)
  }
  
  const followToggleUser = (userid: number, isFollow: boolean) => {
    dispatch(followToggleUserThunk(userid, isFollow))
  }
  const toggleFollowInProgressHandler = (isFatchung: boolean, id: number) => {
    dispatch(toggleFollowInProgress(isFatchung, id))
  }
  const onChangeCurrentUsersPageHandler = (pageNumber: number) => {
    // dispatch(getUsersThunkCreator(pageNumber, countUsersPerPage))
    dispatch(changeCurrentPage(pageNumber))
  }
  useEffect(() => {
    dispatch(getUsersThunkCreator(currentUsersPage, countUsersPerPage))
  }, [dispatch,currentUsersPage,countUsersPerPage])
  
  return <UsersPage currentUsersPage={currentUsersPage}
                    pagesArr={pages}
                    onChangeCurrentUsersPage={onChangeCurrentUsersPageHandler}
                    users={users}
                    onClickFollowToggle={followToggleUser}
                    totalUsersCount={totalUsersCount}
                    isFatching={isFatching}
                    followingIsProgress={followingIsProgress}
                    toggleFollowInProgress={toggleFollowInProgressHandler}
  />
}
export default UsersPageContainer