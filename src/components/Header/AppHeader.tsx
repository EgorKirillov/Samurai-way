import React, {memo, useCallback} from "react";
import {NavLink, useHistory} from "react-router-dom";
import s from "./Header.module.css"
import logo from "../../assets/images/logo3-removebg-preview.png"
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import {logoutThunk} from "../../Redux/authReducer";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  RightCircleTwoTone,
  LeftCircleTwoTone
} from "@ant-design/icons";
import {Avatar, Col, Dropdown, Menu, MenuProps, Popover, Row, Space} from "antd";
import noAva from '../../assets/images/user.png'
import {Header} from "antd/lib/layout/layout";

type AppHeaderProps = {
  collapsed: boolean
  collapsedToggle: () => void
}
export const AppHeader = memo(({collapsed, collapsedToggle}: AppHeaderProps) => {
  
  const loginName = useAppSelector(state => state.auth.login)
  const isAuth = useAppSelector(state => state.auth.isAuth)
  const ava = useAppSelector(state => state.auth.photo)
  const history = useHistory()
  const dispatch = useAppDispatch()
  
  const avaCollapsedStyle = {
    flex: 'right',
    marginRight: !collapsed ? '200px' : '50px',
    transition: 'all 0.25s',
  }
  
  const onClick: MenuProps['onClick'] = async ({key}) => {
    if (key === 'logout') {
      await dispatch(logoutThunk())
      history.push('/login')
    } else if (key === 'profile') {
      history.push('/profile')
    } else if (key === 'login') {
      history.push('/login')
    }
    
    // alert(`Click on item ${key}`);
  };
  const menu = (
    <Menu
      onClick={onClick}
      items={
        isAuth
          ? [{label: 'profile', key: 'profile',},
            {label: 'logout', key: 'logout',}]
          : [{label: 'login', key: 'login',}]
      }
    />
  );
  
  const logoutHandler = useCallback(() => {
    dispatch(logoutThunk())
  }, [dispatch])
  
  return (
    <Header className={s.header} style={{position: 'fixed', zIndex: 1, width: '100%'}}>
      <Row justify="space-between" align={'middle'}>
        <Col style={{flex: 'left', display: 'inline-block', marginLeft: '-30px'}}>
          
          {collapsed ? <RightCircleTwoTone className={'trigger'} onClick={collapsedToggle}
                                           style={{fontSize: '30px'}}/> :
            <LeftCircleTwoTone className={'trigger'} onClick={collapsedToggle} style={{fontSize: '30px'}}/>}
          
          {/*<img className={s.logo}*/}
          {/*     src={logo}*/}
          {/*     alt='img'*/}
          {/*     onClick={collapsedToggle}/>*/}
        </Col>
        <Col style={avaCollapsedStyle}>
          <div className={s.loginBlock}>
            <Popover content={loginName} placement={'left'}>
              <Avatar src={ava ? ava : noAva} size={40}/>
            </Popover>
            <Dropdown overlay={menu}>
              <a onClick={e => e.preventDefault()}>
                <Space> <DownOutlined/> </Space>
              </a>
            </Dropdown>
            {!isAuth && <NavLink to={"/login"}>not authorized</NavLink>}
            
            {/*{isAuth && <Button onClick={logoutHandler}>log out</Button>}*/}
          
          </div>
        
        </Col>
      </Row>
    
    
    </Header>
  )
})


// import { DownOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Dropdown, Menu, message, Space } from 'antd';
