import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return <div className={s.content}>
        <img
            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Moench_2339.jpg/1200px-Moench_2339.jpg'}
            alt={'mountain'}/>
        <div> ava + description</div>
       <MyPosts/>
    </div>
}