import axios from 'axios';
import React from 'react';
import s from "./UserPage.module.css"
import userphoto from "./../../assets/images/user.png"
import {MapDispatchPropType, MapStatePropType} from "./UsersPageConteiner";


// type UserPagePropsType = {
//    usersPage: UserPageStateType
//    onClickSetUsers: () => void
//    onClickFollow: (id: number) => void
//    onClickUnfollow: (id: number) => void
//    }
type UserPagePropsType = MapDispatchPropType & MapStatePropType

export const UsersPage = (props: UserPagePropsType) => {
   
   /*   if (props.users.length === 0) {
         debugger
         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            console.log(response.data.item)
            props.onClickSetUsers(response.data.items)
         })
         /!*  props.onClickSetUsers(
             [
               {
                id: 1,
                avatarLink: "http://ling.ulstu.ru/linguistics/resourses/student_works/nazimova/people/5.jpg",
                followed: true,
                name: 'Egor K.V.',
                status: "I am dandelion",
                location: {country: "Belarus", city: "Minsk"}
             },
                {
                   id: 2,
                   avatarLink: "http://ling.ulstu.ru/linguistics/resourses/student_works/nazimova/people/6.jpg",
                   followed: false,
                   name: 'Den S.G.',
                   status: "I am dumn",
                   location: {country: "Somali", city: "Dhahar"}
                },
                {
                   id: 3,
                   avatarLink: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/5c020550-2e0f-495a-a2d6-fd6b70da3567/1920x",
                   followed: false,
                   name: 'Yang I.G.',
                   status: "sun is great",
                   location: {country: "China", city: "China"}
                },
                {
                   id: 4,
                   avatarLink: "https://izsambo.by/upload/iblock/485/4853c6fcb09f50fa795a3cab14f25330.jpg",
                   followed: false,
                   name: 'Mal G.',
                   status: "HollyWood",
                   location: {country: "Use", city: "NY"}
                },
             ]
           )*!/
      }*/
   
   const onClickHandler = () => {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
           props.getUsers(response.data.items)
        })
   }
   
   return (
     <div className={s.conteiner}>
        {props.users.map(u => {
           return <div className={s.oneUser} key={u.id}>
              <div className={s.oneUserAva}>
                 <img className={s.ava} src={u.photos.small !== null ? u.photos.small : userphoto} alt=""/>
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
        <button onClick={onClickHandler}>add</button>
     </div>
   );
};

export default UsersPage;