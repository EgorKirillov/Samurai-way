import React, {useCallback} from "react";
import {addMyPost} from "../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {useAppDispatch, useAppSelector} from "../../../Redux/hooks";


export const MyPostsContainer = () => {
  const posts = useAppSelector(state => state.profilePage.posts)
  const avatar = useAppSelector(state => state.profilePage.userProfile.photos.small)
  const dispatch = useAppDispatch()
  
  const addMyPostHandler = useCallback((newPost:string) => {
   dispatch(addMyPost(newPost))
  },[dispatch])
  
  return <div><MyPosts posts={posts} addMyPost={addMyPostHandler} avatar={avatar}/></div>
}


