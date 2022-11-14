import { SubmitHandler, useForm } from 'react-hook-form'
import React from 'react'
import Button from 'antd/lib/button'
import { useAppSelector } from '../../../../../Redux/hooks'

type AddPostFormType = {
  postValue: string
}

export const AddPostForm = (props: { addPost: (value: string) => void }) => {
  const isAuth = useAppSelector(state => state.auth.isAuth)

  const {
    register,
    resetField,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm<AddPostFormType>()

  const onSubmit: SubmitHandler<AddPostFormType> = data => {
    console.log(data)
    props.addPost(data.postValue)
    resetField('postValue')
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <textarea
            style={{
              width: '50%',
              minWidth: '250px',
              height: '30px',
              color: 'black',
            }}
            placeholder={'new post'}
            {...register('postValue', {
              required: { value: true, message: 'field required' },
              // maxLength: {value: 255, message: "max 255"}
            })}
          />
          {errors.postValue && touchedFields && <span>{errors.postValue.message}</span>}
        </div>
        <div>
          <Button size={'small'} disabled={!isAuth} htmlType={'submit'}>
            {' '}
            Add new post
          </Button>
          {!isAuth && <p>only authorized users write posts</p>}
        </div>
      </form>
    </>
  )
}
