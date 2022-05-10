import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";

export function MyPosts() {
    const posts = [
        {id: 11, postText: "First post ", likeCount: 25},
        {id: 12, postText: "Second post ", likeCount: 5},
        {id: 13, postText: "Bad post ", likeCount: 11},
        {id: 14, postText: "Good post ", likeCount: 12},
        {id: 15, postText: "Last post ", likeCount: 0},
        {id: 16, postText: "And Last post ", likeCount: 35},
        {id: 17, postText: "Lastest post ", likeCount: 99}
    ]
    const postsElements = posts.map(p => <Post message={p.postText} likeCount={p.likeCount}/>)


    return <div className={s.postsBlocks}>


        <h3>my post</h3>
        <div>
            <textarea> </textarea>
        </div>
        <div>
            <button> Add</button>
            <button> clear</button>
        </div>
        <div> new post</div>
        <div className={s.post}>
            {postsElements}
        </div>
    </div>
}