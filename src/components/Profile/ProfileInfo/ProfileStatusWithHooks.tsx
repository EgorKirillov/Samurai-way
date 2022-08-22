import React, {ChangeEvent, useEffect, useState} from 'react';


type ProfileStatusProps = {
  statusText: string
  updateStatus: (statusText: string) => void
}
// 84 lesson change to hooks

const ProfileStatusWithHooks = (props: ProfileStatusProps) => {
  
  const [editMode, setEditMode] = useState<boolean>(false)
  const [status, setStatus] = useState<string>(props.statusText)
  
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }
  
  const activateEditMode = () => {
    setEditMode(true)
    
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  useEffect(() => {
  }, [] )

return (
  <div>
    {editMode ?
      <div>
        <input type="text" autoFocus={true} onBlur={deactivateEditMode} value={status}
               onChange={onStatusChange}/>
      </div>
      : <div>
        <span onDoubleClick={activateEditMode}>{props.statusText || "--*--"}</span>
      </div>}
  </div>
);
}

export default ProfileStatusWithHooks;