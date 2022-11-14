import React, { memo, useCallback } from 'react'
import s from './MyPosts.module.css'
import { Post } from './post/Post'
import { addMyPost } from '../../../Redux/profileReducer'
import { AddPostForm } from './post/addPostForm/AddPostForm'
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks'

export const MyPosts = memo(() => {
  const posts = useAppSelector(state => state.profilePage.posts)

  const dispatch = useAppDispatch()

  const addMyPostHandler = useCallback(
    (newPost: string) => {
      dispatch(addMyPost(newPost))
    },
    [dispatch]
  )

  const postsElements = posts.map(p => (
    <Post key={p.id} id={p.id} postText={p.postText} likeCount={p.likeCount} />
  ))

  return (
    <div className={s.postsBlocks}>
      <h3>my post</h3>
      <AddPostForm addPost={addMyPostHandler} />
      <div className={s.post}>{postsElements}</div>
    </div>
  )
})
