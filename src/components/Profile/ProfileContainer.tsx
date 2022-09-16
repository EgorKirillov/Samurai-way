import React, {useEffect} from "react";
import s from "./Profile.module.css"
import {Profile} from "./Profile";
import {
  savePhoto,
  setStatusThunk,
  setUserProfileThunk,
  updateProfile,
  UpdateProfileType,
  updateStatusThunk
} from "../../Redux/profileReducer";
import {useHistory, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";

const ProfileContainer = () => {
  const profile = useAppSelector(state => state.profilePage.userProfile)
  const status = useAppSelector(state => state.profilePage.status)
  const authID = useAppSelector(state => state.auth.id)
  const  params  = useParams<{userId?:string|undefined}>();
  const userId = (params.userId) ? params?.userId : undefined
  const history = useHistory();
  const isOwner = !userId
  const dispatch = useAppDispatch()
  
  const updateStatusHandler = (status: string) => {
    dispatch(updateStatusThunk(status))
  }
  
  const savePhotoHandler = (photo: File) => {
    dispatch(savePhoto(photo))
  }
  
  const updateProfileHandler = (updatedProfile: UpdateProfileType) => {
    dispatch(updateProfile(updatedProfile))
  }
  

  useEffect(() => {
    if (!!userId) {
      dispatch(setUserProfileThunk(userId))
      dispatch(setStatusThunk(userId))
    } else if (!!authID) {
      dispatch(setUserProfileThunk(authID))
      dispatch(setStatusThunk(authID))
    } else {
      history.push("/login");
    }
  }, [userId, authID, dispatch])
  
  return (<div className={s.content}>
    {profile && <Profile profile={profile}
                         statusText={status}
                         isOwner={isOwner}
                         updateStatus={updateStatusHandler}
                         savePhoto={savePhotoHandler}
                         updateProfile={updateProfileHandler}
    />}
  </div>)
}

export default ProfileContainer