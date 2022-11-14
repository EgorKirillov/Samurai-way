import React from 'react'
import s from './User.module.css'
import userphoto from '../../../../assets/images/user100.png'
import { UserType } from '../../../../Redux/usersReducer'
import { NavLink } from 'react-router-dom'
import { Button, Card } from 'antd'

const { Meta } = Card

type UserPropsType = {
  user: UserType
  followingIsProgress: Array<number>
  onClickFollowToggle: (id: number, isFollow: boolean) => void
}

export const User = ({ user, followingIsProgress, onClickFollowToggle }: UserPropsType) => {
  const disabledButton = followingIsProgress.some(id => id === user.id)
  const nameButton = user.followed ? 'unfollow' : 'follow'
  const userPhoto = user.photos.small !== null ? user.photos.small : userphoto

  const onClickFollowUnfollow = () => {
    onClickFollowToggle(user.id, !user.followed)
  }

  return (
    <Card
      className={s.card}
      extra={<NavLink to={'/profile/' + user.id}>More... </NavLink>}
      title={user.name}
      actions={[
        <Button disabled={disabledButton} onClick={onClickFollowUnfollow}>
          {nameButton}
        </Button>,
      ]}
    >
      <Meta
        avatar={<img className={s.avatar} alt={'user.id:' + user.id} src={userPhoto} />}
        description={user.status}
      />
    </Card>
  )
}
