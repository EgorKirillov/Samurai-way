import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {PropfileInfo} from "./ProfileInfo/PropfileInfo";
import {MyPostsType} from "../../App";


type ProfilePropsTypes = {
    posts: Array<MyPostsType>
}

export function Profile(props:ProfilePropsTypes) {
    return <div className={s.content}>
        <PropfileInfo/>
        <MyPosts posts={props.posts}/>
    </div>
}