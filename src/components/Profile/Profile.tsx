import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {PropfileInfo} from "./ProfileInfo/PropfileInfo";
import {ProfilePageType} from "../../stateApp";

export function Profile(props:ProfilePageType) {
    return <div className={s.content}>
        <PropfileInfo/>
        <MyPosts posts={props.posts}/>
    </div>
}