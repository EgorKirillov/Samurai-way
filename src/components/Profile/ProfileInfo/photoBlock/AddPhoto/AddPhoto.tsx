import React, {ChangeEvent, useRef} from 'react';
import addPhoto from "../../../../../assets/images/add-photo.png";
import {savePhoto} from "../../../../../Redux/profileReducer";
import {useAppDispatch} from "../../../../../Redux/hooks";

export const AddPhoto = () => {
  
  const inRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()
  
  const onClickUploadHandler = () => {
    inRef && inRef.current?.click()
  }
  
  const upload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      dispatch(savePhoto(e.target.files[0]))
    }
  }
  
  return (
    <>
      <img onClick={onClickUploadHandler} width={'30px'}
           style={{marginLeft: '-30px', position: 'absolute'}}
           color={'inherit'} src={addPhoto} alt={'avatar'}
      />
      <input ref={inRef} type={'file'}
             onChange={upload} accept={'image/*'} style={{display: 'none'}}
      />
    </>
  );
};

