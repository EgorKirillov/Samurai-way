import React from "react";
import s from "./Profile.module.css"
import {PropfileInfo} from "./ProfileInfo/PropfileInfo";
import {MyPostsConteiner} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../Redux/profileReducer";


type PropsType = {
  profile: UserProfileType
}

export function Profile(props: PropsType) {
   debugger
   return <div className={s.content}>
      <PropfileInfo profile={props.profile}/>
      <MyPostsConteiner/>
   </div>
}