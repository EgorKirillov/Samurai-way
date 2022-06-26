import React from 'react';
import s from "./UserPage.module.css"
import userphoto from "./../../assets/images/user.png"
import {UserType} from "../../Redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";

type UserPagePropsType = {
   pagesArr: Array<number>
   users: Array<UserType>
   currentUsersPage: number
   totalUsersCount: number
   onClickFollow: (id: number) => void
   onClickUnfollow: (id: number) => void
   onChangeCurrentUsersPage: (n: number) => void
   isFatching: boolean
}


const UsersPage = (props: UserPagePropsType) => {
   
   
   return (<div className={s.conteiner}>
        {props.pagesArr.map(p => {
           if (Math.abs(p - props.currentUsersPage) < 3 || p === props.pagesArr.length - 1 || p === 1) {
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
        ?<Preloader/>
        :props.users.map(u => {
           return <div className={s.oneUser} key={u.id}>
              <div className={s.oneUserAva}>
                 <img className={s.ava} src={u.photos.large !== null ? u.photos.large : userphoto} alt=""/>
                 {u.followed
                   ? <button onClick={() => props.onClickUnfollow(u.id)}>follow</button>
                   : <button onClick={() => props.onClickFollow(u.id)}>unfollow</button>}
              </div>
              <div className={s.oneUserDescription}>
                 <span><div className={s.name}>{u.name}</div>
                    <div className={s.status}>{u.status}</div></span>
                 <span className={s.location}><div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div></span>
              </div>
           </div>
           
        })}
        {/*<button onClick={()=>props.onClickSetUsers(setUsersAC())}>add</button>*/}
        {/*<button onClick={this.onClickHandler}>add</button>*/}
        {/*<button >add</button>*/}
     </div>
   );
};

export default UsersPage;