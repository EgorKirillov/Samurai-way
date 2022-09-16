import React, { memo } from "react";
import s from "./Post.module.css"
import {MyPostsType} from "../../../../Redux/profileReducer";
import likeImg from '../../../../assets/images/like (20).jpg'

export const Post = memo((props: MyPostsType & {avatar:string}) => {
    return <div>
        <div className={s.post}>
            <img className={s.imgAva} src={props.avatar} alt={""}/>
            {props.postText}
            <span className={s.span}> __ <img
                src={likeImg}
                alt={""}
            />  +{props.likeCount}</span>
        </div>
    </div>
})