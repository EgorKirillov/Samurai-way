import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {PropfileInfo} from "./ProfileInfo/PropfileInfo";
import {ActionTypes, ProfilePageType} from "../../Redux/stateApp";

type PropsType = {
    postsPage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

export function Profile(props: PropsType) {
    return <div className={s.content}>
        <PropfileInfo/>
        <MyPosts posts={props.postsPage.posts}
                 newPostValue={props.postsPage.newPostText}
                 dispatch={props.dispatch}
        />
    </div>
}