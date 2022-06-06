import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {PropfileInfo} from "./ProfileInfo/PropfileInfo";
import {MyPostsType} from "../../Redux/stateApp";

type PropsType = {
    posts: Array<MyPostsType>
    addPost: () => void
    changeNewPostText: (postText: string) => void
    newPostValue: string
}

export function Profile(props: PropsType) {
    return <div className={s.content}>
        <PropfileInfo/>
        <MyPosts posts={props.posts}
                 newPostValue={props.newPostValue}
                 addPost={props.addPost}
                 changeNewPostText={props.changeNewPostText}

        />
    </div>
}