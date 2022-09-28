import React, {ChangeEvent, useEffect, useState} from 'react';
import {Input} from 'antd';
import {setUserQueryParam} from "../../../Redux/usersReducer";
import {useAppDispatch, useAppSelector} from "../../../Redux/hooks";

const {Search} = Input;

export const UsersSearch = () => {
  const queryParams = useAppSelector(state => state.usersPage.usersQueryParam)
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState<string | undefined>(queryParams?.term)
  const [timerId, setTimerId] = useState(0)
  
  const onChangeText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTitle(e.currentTarget.value)
    const val = e.currentTarget.value
    
    clearTimeout(timerId)
    const id = +setTimeout(() => {
      dispatch(setUserQueryParam({...queryParams, term: val}))
    }, 500)
    setTimerId(id)
  }
  
  useEffect(() => {
    return clearTimeout(timerId)
  }, [])
  
  return (
    <div style={{display:"inline-block"}}>
      <Search
        placeholder="input search text"
        // enterButton="Search"
        allowClear
        size="middle"
        value={title}
        onChange={onChangeText}
      />
    </div>
  );
};

