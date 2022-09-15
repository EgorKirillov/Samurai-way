import React from 'react';
import {UserProfileType, UsersContactType} from "../../../../Redux/profileReducer";
import {SubmitHandler, useForm} from 'react-hook-form';

type ContactFormProps = {
  profile: UserProfileType
  submit: (data:UsersContactType) => void
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
    
    return (<div>
        <div>Contacts:</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>facebook:
          <input defaultValue={props.profile.contacts.facebook} {...register('facebook')}/></div>
          <div>website:
          <input defaultValue={props.profile.contacts.website} {...register("website")} /></div>
          <div>vk:
          <input defaultValue={props.profile.contacts.vk} {...register("vk")} /></div>
          <div>twitter:
          <input defaultValue={props.profile.contacts.twitter} {...register("twitter")} /></div>
          <div>instagram:
          <input defaultValue={props.profile.contacts.instagram} {...register("instagram")} /></div>
          <div>youtube:
          <input defaultValue={props.profile.contacts.youtube} {...register("youtube")} /></div>
          <div>github:
          <input defaultValue={props.profile.contacts.github} {...register("github")} /></div>
          <div>mainLink:
          <input defaultValue={props.profile.contacts.mainLink} {...register("mainLink")} /></div>
          
          
          {/* include validation with required or other standard HTML validation rules */}
          {/*<input {...register("exampleRequired", { required: true })} />*/}
          {/* errors will return when field validation fails  */}
          {/*{errors.exampleRequired && <span>This field is required</span>}*/}
          <button type={'submit'}>submit</button>
          {/*<input type="submit" />*/}
        </form>
      
      
      </div>
    );
  }
;

