import React from 'react';
import s from "./UserPage.module.css"
import userphoto from "./../../assets/images/user.png"
import {UserType} from "../../Redux/usersReducer";
import {NavLink} from 'react-router-dom';

type  UserPropsType = {
  user: UserType
  followingIsProgress: Array<number>
  onClickFollowToggle: (id: number, isFollow: boolean) => void
}

export const User = ({user,followingIsProgress,onClickFollowToggle}:UserPropsType) => {
  
  return (<div className={s.oneUser} key={user.id}>
    <div className={s.oneUserAva}>
      <NavLink to={"/profile/" + user.id}>
        <img className={s.ava} src={user.photos.large !== null ? user.photos.large : userphoto}
             alt=""/>
      </NavLink>
      <button disabled={followingIsProgress.some(id => id === user.id)} onClick={() => {
        onClickFollowToggle(user.id, !user.followed)
      }
      }>{user.followed ? 'unfollow' : 'follow'}</button>
    </div>
    <div className={s.oneUserDescription}>
                 <span><div className={s.name}>{user.name}</div>
                    <div className={s.status}>{user.status}</div></span>
      <span className={s.location}><div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div></span>
    </div>
  </div>)
};

