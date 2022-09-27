import React, {ChangeEvent, useEffect, useState} from 'react';
import {Input} from 'antd';
import {AudioOutlined} from '@ant-design/icons';
import {setUserQueryParam} from "../../../Redux/usersReducer";
import {useAppDispatch, useAppSelector} from "../../../Redux/hooks";

const {Search} = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const UsersSearch = () => {
  const queryParams = useAppSelector(state => state.usersPage.usersQueryParam)

  const dispatch = useAppDispatch()
  const [title, setTitle] = useState<string | undefined>('')
  const [timerId, setTimerId] = useState(0)

  const onSearch = (value: string) => {
    console.log(value);
  }


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
    <div>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        value={title}
        suffix={suffix}
        onChange={onChangeText}
        onSearch={onSearch}
      />
    </div>
  );
};

export default UsersSearch;