import {useAppDispatch, useAppSelector } from "../../../Redux/hooks";
import { followToggleUserThunk, getUsersThunkCreator } from "../../../Redux/usersReducer";
import {useEffect} from "react";
import Preloader from "../../common/Preloader/Preloader";
import {User} from "./user/User";
import s from "./Users.module.css"

export const UsersList = () => {
  
  const queryParams = useAppSelector(state => state.usersPage.usersQueryParam)
  const isFatching = useAppSelector(state => state.usersPage.isFatching)
  const users = useAppSelector(state => state.usersPage.users)
  const followingIsProgress = useAppSelector(state => state.usersPage.followingInProgress)

  const dispatch = useAppDispatch()

  const onClickFollowToggle = (userid: number, isFollow: boolean) => {
    dispatch(followToggleUserThunk(userid, isFollow))
  }

  
  useEffect(() => {
    if (queryParams) dispatch(getUsersThunkCreator(queryParams))
  }, [dispatch, queryParams])
  
  
  return (
    
    <div className={s.usersContainer}>
      
      {isFatching
        ? <Preloader/>
        : users.map(u =>
          <User user={u} onClickFollowToggle={onClickFollowToggle}
                followingIsProgress={followingIsProgress}/>
        )}
    </div>)
};

