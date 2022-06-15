import React from 'react';
import {UserPageStateType} from "../../Redux/usersReducer";
import s from "./UserPage.module.css"


type UserPagePropsType = {
   usersPage: UserPageStateType
   onClickSetUsers: () => void
   onClickFollow: (id: number) => void
   onClickUnfollow: (id: number) => void
   
}

export const UsersPage = (props: UserPagePropsType) => {
   return (
     <div className={s.conteiner} >
        {props.usersPage.users.map(u => {
           return <div className={s.oneUser} key={u.userid}>
              <div className={s.oneUserAva}>
                 <img className={s.ava} src={u.avatarLink} alt=""/>
                 {u.followed
                 ?<button onClick={()=>props.onClickUnfollow(u.userid)}>follow</button>
                 :<button onClick={()=>props.onClickFollow(u.userid)}>unfollow</button>}
              </div>
              <div className={s.oneUserDescription}>
                 <span><div className={s.name}>{u.fullUserName}</div>
                    <div className={s.status}>{u.status}</div></span>
                 <span className={s.location}><div>{u.location.country}</div>
                    <div>{u.location.city}</div></span>
              </div>
           </div>
           
        })}
        <button onClick={props.onClickSetUsers}>add</button>
     </div>
   );
};

export default UsersPage;