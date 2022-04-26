import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";

export function MyPosts() {
    return <div>

        <div>my post</div>
        <textarea> </textarea>
        <button> Add </button>
        <button> Submitt </button>
        <div> new post</div>
        <div>
          <Post message={"First post "} likeCount={55}/>
          <Post message={"It's my second post "} likeCount={12}/>

        </div>
    </div>
}