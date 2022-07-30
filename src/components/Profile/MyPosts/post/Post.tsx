import React from "react";
import s from "./Post.module.css"
import {MyPostsType} from "../../../../Redux/profileReducer";

export function Post(props: MyPostsType) {
    return <div>
        <div className={s.post}>
            <img className={s.imgAva} src={"http://hypeava.ru/uploads/posts/2018-03/1522076645_4.jpg"} alt={""}/>
            {props.postText}
            <span className={s.span}> __ <img
                src={'https://i.pinimg.com/originals/f3/6f/5a/f36f5a757623195f555f3c76ff0cc0e0.jpg'}
                alt={""}
            />  +{props.likeCount}</span>
        </div>
    </div>
}