import React, {ChangeEvent, useState} from 'react';
import {UpdateProfileType, UserProfileType, UsersContactType} from "../../../Redux/profileReducer";
import {ContactForm} from "./ContactForm/ContactForm";
import {Button} from 'antd';
import {PhotoBlock} from "./photoBlock/PhotoBlock";
import {ContactsBlock} from "./ContactsBlock/ContactsBlock";

type ProfileInfoType = {
  profile: UserProfileType
  statusText: string
  updateStatus: (statusText: string) => void
  isOwner: boolean
  savePhoto: (photo:File)=>void
  updateProfile:(updatedProfile: UpdateProfileType)=>void
}

export const PropfileInfo = (props: ProfileInfoType) => {
  const [showForm, setShowForm] = useState<boolean>(false)
  
  const onMainPhotoSelected =(e:ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  
  const submitForm = (data:UsersContactType) => {
    const updatedProfile: UpdateProfileType = {
  
      contacts:{...data},
      userId:props.profile.userId,
      aboutMe: props.profile.aboutMe,
      lookingForAJob: props.profile.lookingForAJob,
      lookingForAJobDescription: props.profile.lookingForAJobDescription,
      fullName: props.profile.fullName
    }
    setShowForm(false)
   props.updateProfile(updatedProfile)
   
  }
  
  
  return (
    <div>
 
  
      <PhotoBlock  savePhoto={props.savePhoto} profile={props.profile} updateStatus={props.updateStatus} statusText={props.statusText} isOwner={props.isOwner}/>
  

  
  
      
      {!showForm && (props.profile.contacts) && <div>Contacts:
        {props.isOwner && <Button size={'small'} onClick={()=>setShowForm(true)}>change contacts</Button>}

          <ContactsBlock contacts={props.profile.contacts}/>
        {/*{(props.profile.contacts.vk) && <div>vk:{props.profile.contacts.vk}</div>}*/}
        {/*{(props.profile.contacts.github) && <div>github:{props.profile.contacts.github}</div>}*/}
        {/*{(props.profile.contacts.facebook) && <div>facebook:{props.profile.contacts.facebook}</div>}*/}
        {/*{(props.profile.contacts.twitter) && <div>twitter:{props.profile.contacts.twitter}</div>}*/}
        {/*{(props.profile.contacts.website) && <div>website:{props.profile.contacts.website}</div>}*/}
        {/*{(props.profile.contacts.instagram) && <div>instagram:{props.profile.contacts.instagram}</div>}*/}
        {/*{(props.profile.contacts.mainLink) && <div>mainLink:{props.profile.contacts.mainLink}</div>}*/}
        {/*{(props.profile.contacts.youtube) && <div>youtube:{props.profile.contacts.youtube}</div>}*/}
      
      </div>}
      {showForm && <ContactForm profile={props.profile} submit={submitForm}/>}
      
    </div>
  );
};

