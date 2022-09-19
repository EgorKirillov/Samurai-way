import React from "react";
import {UsersContactType} from "../../../../Redux/profileReducer";
import s from "./ContactsBlock.module.css"

type ContactsBlockProps = {
  contacts: UsersContactType
}

export const ContactsBlock = (props: ContactsBlockProps) => {
  const {vk,github,facebook,twitter,website,instagram,mainLink,youtube} = props.contacts
  
  return (<div className={s.contactsContainer}>
{vk && <><div className={s.contactName}>vk:</div><div className={s.contactValue}>{vk}</div></>}
{github && <><div className={s.contactName}>github:</div><div className={s.contactValue}>{github}</div></>}
{facebook && <><div className={s.contactName}>facebook:</div><div className={s.contactValue}>{facebook}</div></>}
{twitter && <><div className={s.contactName}>twitter:</div><div className={s.contactValue}>{twitter}</div></>}
{website && <><div className={s.contactName}>website:</div><div className={s.contactValue}>{website}</div></>}
{instagram && <><div className={s.contactName}>instagram:</div><div className={s.contactValue}>{instagram}</div></>}
{youtube && <><div className={s.contactName}>youtube:</div><div className={s.contactValue}>{youtube}</div></>}
{mainLink && <><div className={s.contactName}>mainLink:</div><div className={s.contactValue}>{mainLink}</div></>}
  </div>)
  
  }