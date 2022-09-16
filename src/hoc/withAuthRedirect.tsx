import React from 'react';
import {ComponentType} from "react";
import {Redirect} from 'react-router-dom';
import {useAppSelector} from "../Redux/hooks";


export function withAuthRedirect<T>(Component: ComponentType<T>) {
  
  return (props: T) => {
    const isAuth = useAppSelector(state => state.auth.isAuth)
    if (!isAuth) return <Redirect to={"/login"}/>
    return <Component {...props}/>
  }
  
}