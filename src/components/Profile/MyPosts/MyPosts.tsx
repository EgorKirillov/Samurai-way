import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";

type MyPostsType = {
    id: number,
    postText: string,
    likeCount: number
}
type PropsMyPostsType = {
    posts: Array<MyPostsType>
}

export function MyPosts(props: PropsMyPostsType) {

    const postsElements = props.posts.map(p => <Post message={p.postText} likeCount={p.likeCount}/>)

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