import React, { createElement, memo, useState } from 'react'
import { MyPostsType } from '../../../../Redux/profileReducer'
import noavatar from '../../../../assets/images/user50.png'
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons'
import { useAppSelector } from '../../../../Redux/hooks'
import { Avatar, Comment, Tooltip } from 'antd'

export const Post = memo((props: MyPostsType) => {
  const avatar = useAppSelector(state => state.auth.photo)
  const name = useAppSelector(state => state.auth.login)
  const [likes, setLikes] = useState(props.likeCount)
  const [dislikes, setDislikes] = useState(0)
  const [action, setAction] = useState<string | null>(null)

  const like = () => {
    setLikes(likes + 1)
    setAction('liked')
  }

  const dislike = () => {
    setDislikes(dislikes - 1)
    setAction('disliked')
  }

  const actions = [
    <Tooltip key='comment-basic-like' title='Like'>
      <span onClick={like} style={{ color: '#1890ff' }}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className='comment-action'>{likes}</span>
      </span>
    </Tooltip>,

    <Tooltip key='comment-basic-dislike' title='Dislike'>
      <span onClick={dislike} style={{ color: '#1890ff' }}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className='comment-action'>{dislikes}</span>
      </span>
    </Tooltip>,
  ]

  return (
    <Comment
      style={{ color: 'white' }}
      actions={actions}
      author={
        <a style={{ color: '#1890ff' }} href={''}>
          {name}
        </a>
      }
      avatar={<Avatar src={avatar ? avatar : noavatar} alt={name} />}
      content={<p> {props.postText}</p>}
      datetime={
        <Tooltip title='2016-11-22 11:22:33' style={{ color: 'grey' }}>
          <span>{props.id} hours ago</span>
        </Tooltip>
      }
    />
  )
})
