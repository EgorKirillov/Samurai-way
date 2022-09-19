import React from 'react';
import {UserProfileType, UsersContactType} from "../../../../Redux/profileReducer";
import {SubmitHandler, useForm} from 'react-hook-form';
import Button from 'antd/lib/button/button';
import s from './ContactForm.module.css'

type ContactFormProps = {
  profile: UserProfileType
  submit: (data: UsersContactType) => void
}

type ContactDataType = UsersContactType
// {
//   facebook: string
//   website: string
//   vk: string
//   twitter: string
//   instagram: string
//   youtube: string
//   github: string
//   mainLink: string
//
//   // example: string,
//   // exampleRequired: string,
// };


export const ContactForm = (props: ContactFormProps) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<ContactDataType>();
    const onSubmit: SubmitHandler<ContactDataType> = (data) => {
      
      console.log(data);
      props.submit(data)
    }
    
    return (<div className={s.contactFormContainer}>
        <div>Contacts:</div>
        <form className={s.formContact} onSubmit={handleSubmit(onSubmit)}>
          
          <label className={s.formLabel}>vk:</label>
          <input className={s.formInput} defaultValue={props.profile.contacts.vk} {...register("vk")} />
          
          <label className={s.formLabel}>github:</label>
          <input className={s.formInput} defaultValue={props.profile.contacts.github} {...register("github")} />
          
          <label className={s.formLabel}>facebook:</label>
          <input className={s.formInput} defaultValue={props.profile.contacts.facebook} {...register('facebook')}/>
          
          <label className={s.formLabel}>twitter:</label>
          <input className={s.formInput} defaultValue={props.profile.contacts.twitter} {...register("twitter")} />
          
          <label className={s.formLabel}>website:</label>
          <input className={s.formInput} defaultValue={props.profile.contacts.website} {...register("website")} />
          
          <label className={s.formLabel}>instagram:</label>
          <input className={s.formInput} defaultValue={props.profile.contacts.instagram} {...register("instagram")} />
          
          <label className={s.formLabel}>mainLink:</label>
          <input className={s.formInput} defaultValue={props.profile.contacts.mainLink} {...register("mainLink")} />
          
          <label className={s.formLabel}>youtube:</label>
          <input className={s.formInput} defaultValue={props.profile.contacts.youtube} {...register("youtube")} />
  
        
          
         
          
          
          {/* include validation with required or other standard HTML validation rules */}
          {/*<input {...register("exampleRequired", { required: true })} />*/}
          {/* errors will return when field validation fails  */}
          {/*{errors.exampleRequired && <span>This field is required</span>}*/}
          <Button htmlType={'submit'}>submit</Button>
          {/*<input type="submit" />*/}
        </form>
      
      
      </div>
    );
  }
;

