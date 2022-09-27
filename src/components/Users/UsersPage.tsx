import React, {useEffect} from 'react';
import s from "./UserPage.module.css"
import {followToggleUserThunk, getUsersThunkCreator} from "../../Redux/usersReducer";
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import {UsersPaginator} from "./Paginator/UserPaginator";
import {UsersList} from "./Users/Users";
import {UsersFilter} from "./Filter/UsersFilter";
import UsersSearch from "./Filter/UsersSearch";

// type UserPagePropsType = {
//   pagesArr: Array<number>
//   users: Array<UserType>
//   currentUsersPage: number
//   totalUsersCount: number
//   onClickFollowToggle: (id: number, isFollow: boolean) => void
//   onChangeCurrentUsersPage: (n: number) => void
//   isFatching: boolean
//   followingIsProgress: Array<number>
//   toggleFollowInProgress: (isFatchung: boolean, id: number) => void
//   toggleShowFriends: () => void
// }

// const UsersPage = (props: UserPagePropsType) => {
const UsersPage = () => {
  
  const queryParams = useAppSelector(state => state.usersPage.usersQueryParam)
  const isFatching = useAppSelector(state => state.usersPage.isFatching)
  const users = useAppSelector(state => state.usersPage.users)
  const followingIsProgress = useAppSelector(state => state.usersPage.followingInProgress)
  
  
  // const currentUsersPage = useAppSelector(state => state.usersPage.usersQueryParam?.page)
  
  
  // const countUsersPerPage = useAppSelector(state => state.usersPage.usersQueryParam?.count)
  
  // const currentUsersPage = useAppSelector(state => state.usersPage.usersQueryParam?.page)
  
  // const totalPagesCount = useAppSelector(state => state.usersPage.totalPagesCount)
  
  //
  // const totalUsersCount = useAppSelector(state => state.usersPage.totalUsersCount)
  //
  // const followingIsProgress = useAppSelector(state => state.usersPage.followingInProgress)
  //
  
  const dispatch = useAppDispatch()
  // const [showFriends, setShowFriends] = useState(false)
  //
  // const changeUsersPerPageHandler = (currentUsersPage: number = props.currentUsersPage, countUsersPerPage: number) => {
  //   dispatch(changeUsersPerPage(countUsersPerPage))
  //
  // }
  //
  //
  // let pages = []
  // for (let i = 1; i <= totalPagesCount; i++) {
  //   pages.push(i)
  // }
  
  const onClickFollowToggle = (userid: number, isFollow: boolean) => {
    dispatch(followToggleUserThunk(userid, isFollow))
  }
  // const toggleFollowInProgressHandler = (isFatchung: boolean, id: number) => {
  //   dispatch(toggleFollowInProgress(isFatchung, id))
  // }
  // const onChangeCurrentUsersPageHandler = (pageNumber: number) => {
  //   // dispatch(getUsersThunkCreator(pageNumber, countUsersPerPage))
  //   dispatch(changeCurrentPage(pageNumber))
  // }
  
  useEffect(() => {

    if (queryParams) dispatch(getUsersThunkCreator(queryParams))

  }, [dispatch, queryParams])
  
  
  return (<div className={s.conteiner}>
   
      <UsersPaginator/>
      <UsersFilter />
      <UsersSearch />
      {/*<Switch defaultChecked={showFriends} onChange={toggleShowFriends} />*/}
    
    
      <UsersList />
      {/*<div className={s.usersContainer}>*/}
      {/*  */}
      {/*  */}
      {/*  {isFatching*/}
      {/*    ? <Preloader/>*/}
      {/*    : users.map(u =>*/}
      {/*      <User user={u} onClickFollowToggle={onClickFollowToggle}*/}
      {/*            followingIsProgress={followingIsProgress}/>*/}
      {/*    )}*/}
      
      {/*</div>*/}
    
    </div>
  );
};

export default UsersPage;