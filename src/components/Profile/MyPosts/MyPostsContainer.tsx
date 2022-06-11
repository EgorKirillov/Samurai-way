import React from "react";
import {ActionTypes, ProfilePageType} from "../../../Redux/store";
import {addMyPostActionCreator, changeNewPostTextActionCreator} from "../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import { StoreContext } from "../../../StoreContext";
type PropsType = {
   // postState: ProfilePageType
   // dispatch: (action: ActionTypes) => void
}

export function MyPostsConteiner(props: PropsType) {
   // const addMyPost = () => props.dispatch(addMyPostActionCreator())
   // const onChangePostValueHandler = (text: string) => props.dispatch(changeNewPostTextActionCreator(text))
   //
   // return (<MyPosts posts={props.postState.posts}
   //                  newPostValue={props.postState.newPostText}
   //                  onClickAddPost={addMyPost}
   //                  changeNewPostText={onChangePostValueHandler}/>)
   return (
   <StoreContext.Consumer>
      {store =>{
         const addMyPost = () => store.dispatch(addMyPostActionCreator())
         const onChangePostValueHandler = (text: string) => store.dispatch(changeNewPostTextActionCreator(text))
   
         return (<MyPosts posts={store.getState().profilePage.posts}
         newPostValue={store.getState().profilePage.newPostText}
         onClickAddPost={addMyPost}
         changeNewPostText={onChangePostValueHandler}/>)
      }}
   </StoreContext.Consumer>
   )
   }

