import React from 'react';
import userphoto from "../../../../assets/images/user300.png";
import {Col, Image, Row} from 'antd';
import ProfileStatusWithHooks from '../ProfileStatusWithHooks';
import {AddPhoto} from "./AddPhoto/AddPhoto";
import {useAppSelector} from "../../../../Redux/hooks";

type PhotoBlockType = {
  // profile: UserProfileType
  isOwner: boolean
}

export const PhotoBlock = (props: PhotoBlockType) => {
  
  const photoLarge = useAppSelector(state => state.profilePage.userProfile.photos.large)
  const name = useAppSelector(state => state.profilePage.userProfile.fullName)
  const aboutMe = useAppSelector(state => state.profilePage.userProfile.aboutMe)
  const lookingForAJob = useAppSelector(state => state.profilePage.userProfile.lookingForAJob)
  const lookingForAJobDescription = useAppSelector(state => state.profilePage.userProfile.lookingForAJobDescription)
  
  
  return (
    <div>
      <Row wrap={false}>
        
        <Col span={5} style={{minWidth: '180px'}}>
          <div>
            <Image
              width={150}
              src={photoLarge || userphoto}
            />
            {props.isOwner && <AddPhoto/>}
          </div>
        </Col>
        
        <Col span={14}>
          {<h1>{name || "No NAME"}</h1>}
          {(aboutMe) && <div>About me: {aboutMe}</div>}
          <div>Status: {' '}
            <ProfileStatusWithHooks isOwner={props.isOwner}/>
          </div>
          <div>
            <div>{`I am ${lookingForAJob ? '' : 'not'} looking for a job`}</div>
            {(lookingForAJobDescription) && <div>job status:{' ' + lookingForAJobDescription}</div>}
          </div>
        </Col>
      
      </Row>
    
    
    </div>
  );
};

