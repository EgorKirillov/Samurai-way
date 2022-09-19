import React, {ChangeEvent, useEffect, useState} from 'react';


type ProfileStatusProps = {
  statusText: string
  updateStatus: (statusText: string) => void
  isOwner: boolean
}
// 84 lesson change to hooks

const ProfileStatusWithHooks = (props: ProfileStatusProps) => {
  
  const [editMode, setEditMode] = useState<boolean>(false)
  const [status, setStatus] = useState<string>(props.statusText)
  
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }
  
  const activateEditMode = () => {
   if (props.isOwner) setEditMode(true)
    
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  useEffect(() => {
    setStatus(props.statusText)
  }, [props.statusText] )

return (
  <span>
    {editMode && props.isOwner?
      <span>
        <input type="text" autoFocus={true} onBlur={deactivateEditMode} value={status} style={{backgroundColor:"inherit", border:'none'}}
               onChange={onStatusChange}/>
      </span>
      : <span>
        <span onDoubleClick={activateEditMode}>{props.statusText || "--*--"}</span>
      </span>}
  </span>
);
}

export default ProfileStatusWithHooks;