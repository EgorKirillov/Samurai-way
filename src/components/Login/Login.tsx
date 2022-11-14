import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { loginThunk } from '../../Redux/authReducer'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../Redux/store'
import { Redirect } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd'

export const Login = () => {
  const dispatch = useDispatch<any>()
  const isAuth: boolean = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
  const errorLogin: string = useSelector<AppStateType, string>(state =>
    state.auth.errorLogin ? state.auth.errorLogin : ''
  )

  const onSubmit = (data: LoginFormType) => {
    dispatch(loginThunk(data.login, data.password, data.rememberMe))
  }
  if (isAuth) {
    return <Redirect to='/profile' />
  }
  return (
    <div>
      <p style={{ color: 'white' }}>
        for example use username 'free@samuraijs.com' password 'free'
      </p>
      <LoginForm onSubmit={onSubmit} />
      {errorLogin}
    </div>
  )
}

type LoginFormType = {
  login: string
  password: string
  rememberMe: boolean
}

const LoginForm = (props: { onSubmit: (data: LoginFormType) => void }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormType>()
  const onSubmit: SubmitHandler<LoginFormType> = data => {
    console.log(data)
    props.onSubmit(data)
  }
  const onFinish = (values: any) => {
    console.log('Success:', values)
    props.onSubmit(values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  console.log(watch('login'))
  return (
    <Form
      style={{ display: 'inline-block', minWidth: '500px' }}
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item
        label='Username'
        name='login'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name='rememberMe' valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit'>
          Login
        </Button>
      </Form.Item>
    </Form>
  )
}
