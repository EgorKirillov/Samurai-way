import React, {memo} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {MyPostsType} from "../../../Redux/profileReducer";
import {AddPostForm} from "./post/addPostForm/AddPostForm";


type PropsType = {
    posts: Array<MyPostsType>
    addMyPost: (newPost:string)=>void
    avatar: string
}


export const  MyPosts = memo((props: PropsType) => {
    
    const postsElements = (props.posts.map(p => <Post key={p.id} id={p.id} postText={p.postText} likeCount={p.likeCount} avatar={props.avatar}/>))
    
    return (<div className={s.postsBlocks}>
        <h3>my post</h3>
        <AddPostForm addPost={props.addMyPost}/>
        
        <div> new post</div>
        <div className={s.post}>
            {postsElements}
        </div>
    </div>)
})

