import React, {ChangeEvent, useRef} from 'react';
import userphoto from "../../../../assets/images/user.png";
import {Col, Image, Row} from 'antd';
import addPhoto from '../../../../assets/images/add-photo.png'
import {UserProfileType} from "../../../../Redux/profileReducer";
import ProfileStatusWithHooks from '../ProfileStatusWithHooks';

type PhotoBlockType = {
  profile: UserProfileType
  statusText: string
  updateStatus: (statusText: string) => void
  isOwner: boolean
  savePhoto: (photo: File) => void
  // updateProfile:(updatedProfile: UpdateProfileType)=>void
}

export const PhotoBlock = (props: PhotoBlockType) => {
  
  
  const inRef = useRef<HTMLInputElement>(null)
  
  
  const onClickUploadHandler = () => {
    inRef && inRef.current?.click()
  }
  
  
  const upload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  
  
  return (
    <div>
      <Row wrap={false}>
        <Col span={5} style={{minWidth:'180px'}}>
          <div>
            <Image
              width={150}
              src={props.profile.photos.large || userphoto}
            />
            
            
            {props.isOwner && <img onClick={onClickUploadHandler} width={'30px'}
                style={{marginLeft: '-30px', position: 'absolute'}}
                color={'inherit'} src={addPhoto} alt={'photo'}
            />}
            <input ref={inRef} type={'file'}
              onChange={upload} accept={'image/*'} style={{display: 'none'}}
            />
          </div>
        </Col>
        
        <Col span={14}>
          {<h1>{props.profile.fullName || "No NAME"}</h1>}
          {(props.profile.aboutMe) && <div>About me: {props.profile.aboutMe}</div>}
          
          <div>Status:  {' '}
   
          <ProfileStatusWithHooks statusText={props.statusText}
                                  updateStatus={props.updateStatus}
                                  isOwner={props.isOwner}
          
          /></div>
          <div>
            <div>{`I am ${props.profile.lookingForAJob ? '' : 'not'} looking for a job`}</div>
            {(props.profile.lookingForAJobDescription) && <div>job status:{' '+ props.profile.lookingForAJobDescription}</div>}
          </div>
        </Col>
      </Row>
    
    
    </div>
  );
};

