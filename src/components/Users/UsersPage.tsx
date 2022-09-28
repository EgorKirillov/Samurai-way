import React from 'react';
import s from "./UserPage.module.css"
import {UsersPaginator} from "./Paginator/UserPaginator";
import {UsersList} from "./Users/Users";
import {UsersFilter} from "./Filter/UsersFilter";
import {UsersSearch} from './Filter/UsersSearch';


export const UsersPage = () => {
  
  return (<div className={s.conteiner}>
      
      <UsersPaginator/>
      
      <div className={s.filterWithSearch}>
        <UsersSearch/>
        <UsersFilter/>
      </div>
      
      <UsersList/>
    
    </div>
  );
};

