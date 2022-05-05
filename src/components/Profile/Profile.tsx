import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {PropfileInfo} from "./ProfileInfo/PropfileInfo";

export function Profile() {
    return <div className={s.content}>
        <PropfileInfo/>
        <MyPosts/>
    </div>
}