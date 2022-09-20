import React from "react";
import s from "./ContactsBlock.module.css"
import {useAppSelector} from "../../../../Redux/hooks";

export const ContactsBlock = () => {
  
  const vk = useAppSelector(state => state.profilePage.userProfile.contacts.vk)
  const github = useAppSelector(state => state.profilePage.userProfile.contacts.github)
  const facebook = useAppSelector(state => state.profilePage.userProfile.contacts.facebook)
  const twitter = useAppSelector(state => state.profilePage.userProfile.contacts.twitter)
  const website = useAppSelector(state => state.profilePage.userProfile.contacts.website)
  const instagram = useAppSelector(state => state.profilePage.userProfile.contacts.instagram)
  const mainLink = useAppSelector(state => state.profilePage.userProfile.contacts.mainLink)
  const youtube = useAppSelector(state => state.profilePage.userProfile.contacts.youtube)
  
  return (<div className={s.contactsContainer}>
    {vk && <>
        <div className={s.contactName}>vk:</div>
        <div className={s.contactValue}>{vk}</div>
    </>}
    {github && <>
        <div className={s.contactName}>github:</div>
        <div className={s.contactValue}>{github}</div>
    </>}
    {facebook && <>
        <div className={s.contactName}>facebook:</div>
        <div className={s.contactValue}>{facebook}</div>
    </>}
    {twitter && <>
        <div className={s.contactName}>twitter:</div>
        <div className={s.contactValue}>{twitter}</div>
    </>}
    {website && <>
        <div className={s.contactName}>website:</div>
        <div className={s.contactValue}>{website}</div>
    </>}
    {instagram && <>
        <div className={s.contactName}>instagram:</div>
        <div className={s.contactValue}>{instagram}</div>
    </>}
    {youtube && <>
        <div className={s.contactName}>youtube:</div>
        <div className={s.contactValue}>{youtube}</div>
    </>}
    {mainLink && <>
        <div className={s.contactName}>mainLink:</div>
        <div className={s.contactValue}>{mainLink}</div>
    </>}
  </div>)
  
}