import React, {memo, useCallback} from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import logo from "../../assets/images/logo3-removebg-preview.png"
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import {logoutThunk} from "../../Redux/authReducer";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import Button from "antd/lib/button/button";
import {Avatar, Col, Row} from "antd";
import noAva from '../../assets/images/user.png'

type AppHeaderProps = {
  collapsed:boolean
    collapsedToggle: ()=>void
}
export const AppHeader = memo(({collapsed, collapsedToggle}:AppHeaderProps) => {
  
  const loginName = useAppSelector(state => state.auth.login)
  const isAuth = useAppSelector(state => state.auth.isAuth)
  const ava = useAppSelector(state => state.auth.photo)
  const dispatch = useAppDispatch()
  
  const logoutHandler = useCallback(()=>{
    dispatch(logoutThunk())
  },[dispatch])
  
  return (
    <header className={s.header}>
      <Row justify="space-between" align={'middle'}>
        <Col span={10} push={0}>
          {collapsed ? <MenuUnfoldOutlined className={'trigger'} onClick={collapsedToggle} /> : <MenuFoldOutlined className={'trigger'} onClick={collapsedToggle}/>}
          <img className={s.logo}
            src={logo}
            alt='img'
            onClick={collapsedToggle} />
        </Col>
        <Col span={6} >
          <div className={s.loginBlock}>
            <Avatar src={ava ? ava : noAva} size={40} />
            {isAuth
              ?  <div style={{display:'inline-block'}}>{loginName}</div>
              :<NavLink to={"/login"}>not authorised Login </NavLink>}
              
            {isAuth && <Button onClick={logoutHandler}>log out</Button>}
            
          </div>
          
        </Col>
      </Row>
  
      
     
    
    </header>
  )
})