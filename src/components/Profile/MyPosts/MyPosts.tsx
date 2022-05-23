import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {MyPostsType, ProfilePageType} from "../../../Redux/stateApp";

type PropsType={
    posts: Array<MyPostsType>
    addPost:(postText:string)=>void
}
export function MyPosts(props: PropsType ) {

    //let newPostElement=useRef<HTMLTextAreaElement>(null)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const postsElements = props.posts.map(p => <Post id={p.id} postText={p.postText} likeCount={p.likeCount}/>)


    const onClickAddButtonHandler = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value=""
        }
    }

    return <div className={s.postsBlocks}>
        <h3>my post</h3>
        <div>
            <textarea ref={newPostElement}> </textarea>
        </div>
        <div>
            <button onClick={onClickAddButtonHandler}> Add</button>
            <button> clear</button>
        </div>
        <div> new post</div>
        <div className={s.post}>
            {postsElements}
        </div>
    </div>
}