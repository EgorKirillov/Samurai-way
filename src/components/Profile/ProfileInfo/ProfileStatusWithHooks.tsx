import React, { ChangeEvent, useEffect, useState } from 'react'
import { updateStatusThunk } from '../../../Redux/profileReducer'
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks'

type ProfileStatusProps = {
  isOwner: boolean
}

const ProfileStatusWithHooks = (props: ProfileStatusProps) => {
  const statusText = useAppSelector(state => state.profilePage.status)
  const [editMode, setEditMode] = useState<boolean>(false)
  const [status, setStatus] = useState<string>(statusText)
  const dispatch = useAppDispatch()

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  const activateEditMode = () => {
    if (props.isOwner) setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    dispatch(updateStatusThunk(status))
  }

  useEffect(() => {
    setStatus(statusText)
  }, [statusText])

  return (
    <span>
      {editMode && props.isOwner ? (
        <span>
          <input
            type='text'
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
            style={{ backgroundColor: 'inherit', border: 'none' }}
            onChange={onStatusChange}
          />
        </span>
      ) : (
        <span>
          <span onDoubleClick={activateEditMode}>{statusText || '--*--'}</span>
        </span>
      )}
    </span>
  )
}

export default ProfileStatusWithHooks
