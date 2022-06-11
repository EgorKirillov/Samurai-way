import React from "react";
import s from "./Profile.module.css"
import {PropfileInfo} from "./ProfileInfo/PropfileInfo";
import {ActionTypes, ProfilePageType} from "../../Redux/store";
import { MyPostsConteiner } from "./MyPosts/MyPostsContainer";

type PropsType = {
    postsPage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

export function Profile(props: PropsType) {
    return <div className={s.content}>
        <PropfileInfo/>
        <MyPostsConteiner dispatch={props.dispatch}
        postState={props.postsPage}/>
          {/*<MyPosts posts={props.postsPage.posts}*/}
        {/*         newPostValue={props.postsPage.newPostText}*/}
        {/*         dispatch={props.dispatch}*/}
        {/*/>*/}
    </div>
}