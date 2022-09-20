import React from 'react';
import {UsersContactType} from "../../../../Redux/profileReducer";
import {SubmitHandler, useForm} from 'react-hook-form';
import Button from 'antd/lib/button/button';
import s from './ContactForm.module.css'

type ContactFormProps = {
  contacts: UsersContactType
  submit: (data: UsersContactType) => void
}

export const ContactForm = (props: ContactFormProps) => {
    
    const {register, handleSubmit, watch, formState: {errors}} = useForm<UsersContactType>();
    
    const onSubmit: SubmitHandler<UsersContactType> = (data) => {
      props.submit(data)
    }
    
    return (<div className={s.contactFormContainer}>
        <form className={s.formContact} onSubmit={handleSubmit(onSubmit)}>
          
          <label className={s.formLabel}>vk:</label>
          <input className={s.formInput} defaultValue={props.contacts.vk} {...register("vk")} />
          
          <label className={s.formLabel}>github:</label>
          <input className={s.formInput} defaultValue={props.contacts.github} {...register("github")} />
          
          <label className={s.formLabel}>facebook:</label>
          <input className={s.formInput} defaultValue={props.contacts.facebook} {...register('facebook')}/>
          
          <label className={s.formLabel}>twitter:</label>
          <input className={s.formInput} defaultValue={props.contacts.twitter} {...register("twitter")} />
          
          <label className={s.formLabel}>website:</label>
          <input className={s.formInput} defaultValue={props.contacts.website} {...register("website")} />
          
          <label className={s.formLabel}>instagram:</label>
          <input className={s.formInput} defaultValue={props.contacts.instagram} {...register("instagram")} />
          
          <label className={s.formLabel}>youtube:</label>
          <input className={s.formInput} defaultValue={props.contacts.youtube} {...register("youtube")} />
          
          <label className={s.formLabel}>mainLink:</label>
          <input className={s.formInput} defaultValue={props.contacts.mainLink} {...register("mainLink")} />
          
          <Button htmlType={'submit'}>submit</Button>
        
        </form>
      
      </div>
    );
  }
;

