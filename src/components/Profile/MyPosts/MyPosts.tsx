import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";

export function MyPosts() {
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
            <Post message={"First post "} likeCount={55}/>
            <Post message={"It's my second post "} likeCount={12}/>

        </div>
    </div>
}