import React from 'react';
import s from "./UserPaginator.module.css"
import Pagination from 'antd/lib/pagination';
import {useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import {setUserQueryParam} from "../../../Redux/usersReducer";


export const UsersPaginator = () => {
  const queryParams = useAppSelector(state => state.usersPage.usersQueryParam)
  
  // const currentUsersPage = useAppSelector(state => state.usersPage.usersQueryParam?.page)
  // const countUsersPerPage = useAppSelector(state => state.usersPage.usersQueryParam?.count)
  const totalUsersCount = useAppSelector(state => state.usersPage.totalUsersCount)
  
  const dispatch = useAppDispatch()

  const onChangeHandler = (page: number, count: number)  => {
    dispatch(setUserQueryParam({...queryParams, count, page}))
  }
 

  return (
      <Pagination current={queryParams?.page}
                  total={totalUsersCount}
                  pageSize={queryParams?.count}
                  onChange={onChangeHandler}
                  showQuickJumper
                  showSizeChanger
                  className={s.paginator}
                  pageSizeOptions={[4, 8, 16, 32, 64]}
                  size={'small'}
                  disabled={false}
      />
    
  );
};

