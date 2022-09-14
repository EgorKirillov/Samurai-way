import React from 'react';
import s from "./UserPage.module.css"
import userphoto from "./../../assets/images/user.png"
import {UserType} from "../../Redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from 'react-router-dom';

type UserPagePropsType = {
    pagesArr: Array<number>
    users: Array<UserType>
    currentUsersPage: number
    totalUsersCount: number
    onClickFollow: (id: number) => void
    onClickUnfollow: (id: number) => void
    onClickFollowToggle:(id: number, isFollow: boolean) => void
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
                : props.users.map(u => {
                    return <div className={s.oneUser} key={u.id}>
                        <div className={s.oneUserAva}>
                            <NavLink to={"/profile/" + u.id}>
                                <img className={s.ava} src={u.photos.large !== null ? u.photos.large : userphoto}
                                     alt=""/>
                            </NavLink>
                            {/*{u.followed*/}
                            {/*  */}
                            {/*    ? */}
                              <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {
                                    props.onClickFollowToggle(u.id, !u.followed)
                                }
                                }>{u.followed ? 'unfollow': 'follow'}</button>
                              
                                {/*: <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {*/}
                                {/*  props.onClickFollowToggle(u.id, !u.followed)*/}
                                {/*}*/}
                                {/*}>follow</button>}*/}
                        </div>
                        <div className={s.oneUserDescription}>
                 <span><div className={s.name}>{u.name}</div>
                    <div className={s.status}>{u.status}</div></span>
                            <span className={s.location}><div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div></span>
                        </div>
                    </div>
                    
                })}
        </div>
    );
};

export default UsersPage;