import React, {useEffect} from "react";
import s from "./Profile.module.css"
import {PropfileInfo} from "./ProfileInfo/PropfileInfo";
import {setStatusThunk, setUserProfileThunk,} from "../../Redux/profileReducer";
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import {useHistory, useParams} from "react-router-dom";
import {MyPosts} from "./MyPosts/MyPosts";

const Profile = () => {
  const authID = useAppSelector(state => state.auth.id)
  const params = useParams<{ userId?: string | undefined }>();
  const history = useHistory();
  const dispatch = useAppDispatch()
  
  const userId = (params.userId) ? params?.userId : undefined
  //if URL without userId then notOwner profile
  const isOwner = !userId
  
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
  }, [userId, authID, dispatch, history])
  
  return <div className={s.content}>
    <PropfileInfo isOwner={isOwner} />
    <MyPosts/>
  </div>
}
export default Profile;