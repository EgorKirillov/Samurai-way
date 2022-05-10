import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {PropfileInfo} from "./ProfileInfo/PropfileInfo";

const posts = [
    {id: 11, postText: "First post ", likeCount: 25},
    {id: 12, postText: "Second post ", likeCount: 5},
    {id: 13, postText: "Bad post ", likeCount: 11},
    {id: 14, postText: "Good post ", likeCount: 12},
    {id: 15, postText: "Last post ", likeCount: 0},
    {id: 16, postText: "And Last post ", likeCount: 35},
    {id: 17, postText: "Lastest post ", likeCount: 99}
]

export function Profile() {
    return <div className={s.content}>
        <PropfileInfo/>
        <MyPosts posts={posts}/>
    </div>
}