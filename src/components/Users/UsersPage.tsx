import React from 'react';
import s from "./UserPage.module.css"
import {UserType} from "../../Redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";
import {User} from "./User";

type UserPagePropsType = {
  pagesArr: Array<number>
  users: Array<UserType>
  currentUsersPage: number
  totalUsersCount: number
  onClickFollowToggle: (id: number, isFollow: boolean) => void
  onChangeCurrentUsersPage: (n: number) => void
  isFatching: boolean
  followingIsProgress: Array<number>
  toggleFollowInProgress: (isFatchung: boolean, id: number) => void
}

const UsersPage = (props: UserPagePropsType) => {
  
  return (<div className={s.conteiner}>
      {props.pagesArr.map(p => {
        if (Math.abs(p - props.currentUsersPage) < 3 || p === props.pagesArr.length || p === 1) {
          return <span onClick={() => props.onChangeCurrentUsersPage(p)}
                       className={(props.currentUsersPage === p) ? s.selectedPages : ''}>
              {p}.
           </span>
        } else if (Math.abs(p - props.currentUsersPage) < 5) {
          return <span>..</span>
        } else return ""
      })}
      
      <div>{`total count=${props.totalUsersCount}`}</div>
      {props.isFatching
        ? <Preloader/>
        : props.users.map(u =>
          <User user={u} onClickFollowToggle={props.onClickFollowToggle}
                followingIsProgress={props.followingIsProgress}/>
        )}
    </div>
  );
};

export default UsersPage;