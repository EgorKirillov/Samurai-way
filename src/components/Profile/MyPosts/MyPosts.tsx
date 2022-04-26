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
          <Post />
          <Post />
          <Post />
          <Post />

        </div>
    </div>
}