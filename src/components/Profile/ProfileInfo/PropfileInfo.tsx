import React, {useState} from 'react';
import {updateProfile, UpdateProfileType, UsersContactType} from "../../../Redux/profileReducer";
import {ContactForm} from "./ContactForm/ContactForm";
import {Button} from 'antd';
import {PhotoBlock} from "./photoBlock/PhotoBlock";
import {ContactsBlock} from "./ContactsBlock/ContactsBlock";
import s from './ProfileInfo.module.css'
import {useAppDispatch, useAppSelector} from "../../../Redux/hooks";

type ProfileInfoType = { isOwner: boolean }

export const PropfileInfo = (props: ProfileInfoType) => {
  
  const profile = useAppSelector(state => state.profilePage.userProfile)
  
  const dispatch = useAppDispatch()
  const [showForm, setShowForm] = useState<boolean>(false)
  
  const openContactsForm = () => {
    setShowForm(true)
  }
  
  const submitContsctForm = (data: UsersContactType) => {
    const updatedProfile: UpdateProfileType = {
      contacts: {...data},
      userId: profile.userId,
      aboutMe: profile.aboutMe,
      lookingForAJob: profile.lookingForAJob,
      lookingForAJobDescription: profile.lookingForAJobDescription,
      fullName: profile.fullName
    }
    setShowForm(false)
    dispatch(updateProfile(updatedProfile))
  }
  
  return (
    <div>
      <PhotoBlock isOwner={props.isOwner}/>
      <div className={s.contactsTitile}>
        Contacts:
        {props.isOwner && <Button size={'small'} onClick={openContactsForm}>change contacts</Button>}
      </div>
      {!showForm && <ContactsBlock/>}
      {showForm && <ContactForm contacts={profile.contacts} submit={submitContsctForm}/>}
    </div>
  );
};

