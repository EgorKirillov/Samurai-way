import React, { ChangeEvent } from 'react';
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../Redux/profileReducer";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userphoto from "../../../assets/images/user.png";

type ProfileInfoType = {
  profile: UserProfileType
  statusText: string
  updateStatus: (statusText: string) => void
  isOwner: boolean
  savePhoto: (photo:File)=>void
}

export const PropfileInfo = (props: ProfileInfoType) => {
  
  const onMainPhotoSelected =(e:ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      
      props.savePhoto(e.target.files[0])
      
    }
  }
  
  return (
    <div>
      
      {/*<img className={s.mainImg}*/}
      {/*  src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Moench_2339.jpg/1200px-Moench_2339.jpg'}*/}
      {/*  alt={'mountain image'}/>*/}
      
      <div>Photo<img className={s.mainPhoto} src={props.profile.photos.large || userphoto} alt={' avatar'}/></div>
      {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
      {(props.profile.fullName) && <div>Name: {props.profile.fullName}</div>}
      {(props.profile.aboutMe) && <div>About me: {props.profile.aboutMe}</div>}
      {(props.profile.lookingForAJob) && <div>I looking job: {props.profile.lookingForAJob}</div>}
      {(props.profile.lookingForAJobDescription) && <div>{props.profile.lookingForAJobDescription}</div>}
      {(props.profile.contacts) && <div>Contacts:
        {(props.profile.contacts.vk) && <div>vk:{props.profile.contacts.vk}</div>}
        {(props.profile.contacts.github) && <div>github:{props.profile.contacts.github}</div>}
        {(props.profile.contacts.facebook) && <div>facebook:{props.profile.contacts.facebook}</div>}
        {(props.profile.contacts.twitter) && <div>twitter:{props.profile.contacts.twitter}</div>}
        {(props.profile.contacts.website) && <div>website:{props.profile.contacts.website}</div>}
        {(props.profile.contacts.instagram) && <div>instagram:{props.profile.contacts.instagram}</div>}
        {(props.profile.contacts.mainLink) && <div>mainLink:{props.profile.contacts.mainLink}</div>}
        {(props.profile.contacts.youtube) && <div>youtube:{props.profile.contacts.youtube}</div>}
      </div>}
      
      <div className={s.discritpionInfo}>ava + description</div>
      <div>Status:</div>
      <ProfileStatus statusText={props.statusText}
                     updateStatus={props.updateStatus}
      
      />
      <ProfileStatusWithHooks statusText={props.statusText}
                              updateStatus={props.updateStatus}
      
      />
    
    
    </div>
  );
};

