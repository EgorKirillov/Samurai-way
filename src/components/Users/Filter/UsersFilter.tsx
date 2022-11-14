import React, { useState } from 'react'
import { Radio, RadioChangeEvent } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks'
import { setUserQueryParam } from '../../../Redux/usersReducer'

export const UsersFilter = () => {
  const queryParams = useAppSelector(state => state.usersPage.usersQueryParam)
  const dispatch = useAppDispatch()
  const [friends, setFriends] = useState<'friends' | 'notFriends' | 'all'>('all')

  const onChangeFriends = (e: RadioChangeEvent) => {
    console.log(e.target.value)
    let friend: boolean | undefined = undefined
    if (e.target.value === 'friends') {
      friend = true
    } else if (e.target.value === 'notFriends') {
      friend = false
    }

    dispatch(setUserQueryParam({ ...queryParams, friend, page: 1 }))
    setFriends(e.target.value)
  }

  return (
    <div style={{ display: 'inline-block' }}>
      <Radio.Group value={friends} onChange={onChangeFriends}>
        <Radio.Button value='friends'>Friends</Radio.Button>
        <Radio.Button value='notFriends'>Not friends</Radio.Button>
        <Radio.Button value='all'>All users</Radio.Button>
      </Radio.Group>
    </div>
  )
}
