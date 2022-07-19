import React from 'react';
import {ComponentType} from "react";
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {AppStateType} from '../Redux/redux-store';

type MspType = {
   isAuth: boolean
}

const msp = (state: AppStateType): MspType => {
   return {
      isAuth: state.auth.isAuth
   }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
   
   const ComponentWithRedirect = (props: MspType) => {
      let {isAuth, ...restProps} = props
      if (!isAuth) return <Redirect to={"/login"}/>
      return <Component {...restProps as T}/>
   }

   return connect(msp)(ComponentWithRedirect)
}