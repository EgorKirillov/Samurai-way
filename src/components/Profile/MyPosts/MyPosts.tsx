import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {MyPostsType} from "../../../Redux/stateApp";

type PropsType={
    posts: Array<MyPostsType>
    newPostValue: string
    addPost:()=>void
    changeNewPostText: (postText: string) => void
}
export function MyPosts(props: PropsType ) {

   const postsElements = (props.posts.map(p => <Post id={p.id} postText={p.postText} likeCount={p.likeCount}/>))


    const onClickAddButtonHandler = () => {
                    props.addPost()
            }

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
             props.changeNewPostText(e.currentTarget.value)
    }


    return <div className={s.postsBlocks}>
        <h3>my post</h3>
        <div>
            <textarea onChange={onChangeHandler} value={props.newPostValue}>

            </textarea>
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

