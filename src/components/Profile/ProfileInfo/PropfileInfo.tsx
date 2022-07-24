import React from 'react';
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../Redux/profileReducer";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
    profile: UserProfileType
    statusText: string
    updateStatus: (statusText: string) => void
}

export const PropfileInfo = (props:ProfileInfoType) => {
   
   return (
     <div>
        
        {/*<img className={s.mainImg}*/}
        {/*  src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Moench_2339.jpg/1200px-Moench_2339.jpg'}*/}
        {/*  alt={'mountain image'}/>*/}
        {(props.profile.photos.large) && <div>Photo<img src={props.profile.photos.large} alt={' avatar'}/></div>}
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
        
        
     </div>
   );
};

