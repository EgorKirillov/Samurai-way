import React, { lazy, Suspense, useEffect, useState } from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import { News } from './components/news/news'
import { Music } from './components/Music/music'
import { Settings } from './components/settings/settings'
import { Login } from './components/Login/Login'
import { initializeAppThunk } from './Redux/appReducer'
import { useAppDispatch, useAppSelector } from './Redux/hooks'
import { Preloader } from './components/common/Preloader/Preloader'
import { AppHeader } from './components/Header/AppHeader'
import { Layout, Menu } from 'antd'

import { MessageOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import { UsersPage } from './components/Users/UsersPage'
import Profile from './components/Profile/Profile'

const Dialogs = lazy(() => import('./components/Dialogs/Dialogs'))
const { Sider, Content } = Layout

export const App = () => {
  const dispatch = useAppDispatch()
  const initialized = useAppSelector(state => state.app.initialized)
  const [collapsed, setCollapsed] = useState(false)

  const layoutCollapsedStyle = {
    marginLeft: !collapsed ? '200px' : '50px',
    transition: 'all 0.25s',
  }
  useEffect(() => {
    dispatch(initializeAppThunk())
  }, [dispatch])

  return (
    <BrowserRouter basename='/Samurai-way'>
      <div className={'app-wrapper'}>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme={'dark'}
            collapsedWidth={50}
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <div className='logo' />

            <Menu theme={'dark'} mode='inline' defaultSelectedKeys={['profile']}>
              <Menu.Item icon={<UserOutlined />} key={'profile'}>
                <NavLink key={'profile'} to={'/profile'}>
                  Profile
                </NavLink>
              </Menu.Item>

              <Menu.Item icon={<MessageOutlined key={'dialogs'} />}>
                <NavLink key={'dialogs'} to={'/dialogs'}>
                  Messages
                </NavLink>
              </Menu.Item>

              <Menu.Item icon={<TeamOutlined />} key={'users'}>
                <NavLink key={'users'} to={'/users'}>
                  Users
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout className='site-layout' style={layoutCollapsedStyle}>
            <AppHeader collapsed={collapsed} collapsedToggle={() => setCollapsed(!collapsed)} />

            <Content
              className='site-layout-background'
              style={{
                margin: '80px 16px 24px 16px',
                border: 'black 1px solid',
                padding: 24,
                minHeight: 280,
                backgroundColor: 'rgba(0, 62, 102)',
              }}
            >
              {!initialized ? (
                <div style={{ backgroundColor: 'grey' }}>
                  загрузка <Preloader />
                </div>
              ) : (
                <div className={'app-wrapper-content'}>
                  <Route exact path='/'>
                    <Profile />
                  </Route>
                  <Route exact path='/login'>
                    <Login />
                  </Route>
                  <Route
                    path={'/dialogs'}
                    render={() => (
                      <Suspense fallback={<div>.... loading....</div>}>
                        <Dialogs />
                      </Suspense>
                    )}
                  />
                  <Route path={'/profile/:userId?'} component={Profile} />
                  <Route path={'/users'} component={UsersPage} />
                  <Route path={'/news'} component={News} />
                  <Route path={'/music'} component={Music} />
                  <Route path={'/settings'} component={Settings} />
                </div>
              )}
            </Content>
          </Layout>
        </Layout>
      </div>
    </BrowserRouter>
  )
}
