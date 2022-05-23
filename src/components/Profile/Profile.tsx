import React, {Props} from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {PropfileInfo} from "./ProfileInfo/PropfileInfo";
import {MyPostsType, ProfilePageType} from "../../Redux/stateApp";

type PropsType = {
    posts: Array<MyPostsType>
    addPost: (postText: string) => void
}

export function Profile(props: PropsType) {
    return <div className={s.content}>
        <PropfileInfo/>
        <MyPosts posts={props.posts}

                 addPost={props.addPost} />
    </div>
}