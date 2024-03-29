import React, { memo } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import s from './Header.module.css'
import { useAppDispatch, useAppSelector } from '../../Redux/hooks'
import { logoutThunk } from '../../Redux/authReducer'
import { DownOutlined, LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons'
import { Avatar, Col, Dropdown, Menu, MenuProps, Popover, Row, Space } from 'antd'
import noAva from '../../assets/images/user100.png'
import { Header } from 'antd/lib/layout/layout'

type AppHeaderProps = {
  collapsed: boolean
  collapsedToggle: () => void
}
export const AppHeader = memo(({ collapsed, collapsedToggle }: AppHeaderProps) => {
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

  const onClick: MenuProps['onClick'] = async ({ key }) => {
    if (key === 'logout') {
      await dispatch(logoutThunk())
      history.push('/login')
    } else if (key === 'profile') {
      history.push('/profile')
    } else if (key === 'login') {
      history.push('/login')
    }
  }
  const menu = (
    <Menu
      onClick={onClick}
      items={
        isAuth
          ? [
              { label: 'profile', key: 'profile' },
              { label: 'logout', key: 'logout' },
            ]
          : [{ label: 'login', key: 'login' }]
      }
    />
  )

  return (
    <Header className={s.header} style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Row justify='space-between' align={'middle'}>
        <Col
          style={{
            flex: 'left',
            display: 'inline-block',
            marginLeft: '-30px',
          }}
        >
          {collapsed ? (
            <RightCircleTwoTone
              className={'trigger'}
              onClick={collapsedToggle}
              style={{ fontSize: '30px' }}
            />
          ) : (
            <LeftCircleTwoTone
              className={'trigger'}
              onClick={collapsedToggle}
              style={{ fontSize: '30px' }}
            />
          )}
        </Col>

        <Col style={avaCollapsedStyle}>
          <div className={s.loginBlock}>
            <Popover content={loginName} placement={'left'}>
              <Avatar src={ava ? ava : noAva} size={40} />
            </Popover>
            <Dropdown overlay={menu}>
              <a onClick={e => e.preventDefault()}>
                <Space>
                  {' '}
                  <DownOutlined />{' '}
                </Space>
              </a>
            </Dropdown>
            {!isAuth && <NavLink to={'/login'}>not authorized</NavLink>}
          </div>
        </Col>
      </Row>
    </Header>
  )
})
