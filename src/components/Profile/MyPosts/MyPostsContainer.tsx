import React from "react";
import {ActionTypes, ProfilePageType} from "../../../Redux/store";
import {addMyPostActionCreator, changeNewPostTextActionCreator} from "../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";

type PropsType = {
   postState: ProfilePageType
   dispatch: (action: ActionTypes) => void
}

export function MyPostsConteiner(props: PropsType) {
   
   const addMyPost = () => props.dispatch(addMyPostActionCreator())
   const onChangePostValueHandler = (text: string) => props.dispatch(changeNewPostTextActionCreator(text))
   
   return (<MyPosts posts={props.postState.posts}
                    newPostValue={props.postState.newPostText}
                    onClickAddPost={addMyPost}
                    changeNewPostText={onChangePostValueHandler}/>)
   
}

