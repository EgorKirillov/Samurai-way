import React from "react";
import s from "./Profile.module.css"
import {PropfileInfo} from "./ProfileInfo/PropfileInfo";
import {MyPostsConteiner} from "./MyPosts/MyPostsContainer";


type PropsType = {
   // postsPage: ProfilePageType
   // dispatch: (action: ActionTypes) => void
}

export function Profile(props: PropsType) {
   return <div className={s.content}>
      <PropfileInfo/>
      <MyPostsConteiner/>
   </div>
}