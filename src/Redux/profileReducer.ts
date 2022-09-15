import {ProfilePageType} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {AppThunk} from "./redux-store";

//action
export const addMyPost = (newPost: string) => ({
  type: "profile/ADD-POST",
  newPost
} as const)

export const setUserProfile = (profile: UserProfileType) => ({
  type: "profile/SET-USER-PROFILE",
  profile
} as const)

export const setStatus = (status: string) => ({
  type: "profile/SET-STATUS",
  status,
} as const)
export const setPhotoSuccess = (photos: ProfilePhotoType) => ({
  type: "profile/SET-PHOTO-SUCCESS",
  photos,
} as const)

//thunk
export const setUserProfileThunk = (userId: string): AppThunk =>
  async (dispatch: Dispatch) => {
    const res = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(res))
  }

export const setStatusThunk = (userId: string):AppThunk =>
  async dispatch => {
    const res = await profileAPI.getUserStatus(userId)
    dispatch(setStatus(res))
  }

export const updateStatusThunk = (status: string):AppThunk =>
  async dispatch => {
    const res = await profileAPI.updateMyStatus(status)
    if (res.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  }

export const savePhoto = (photo: File):AppThunk =>
  async dispatch => {
    const res = await profileAPI.savePhoto(photo)
    if (res.data.resultCode === 0) {
      debugger
      dispatch(setPhotoSuccess(res.data.data.photos))
    }
  }
  

const initialStateProfilePage = {
  posts: [
    {id: 0, postText: "First post ", likeCount: 25},
    {id: 1, postText: "Second post ", likeCount: 5},
    {id: 2, postText: "Bad post ", likeCount: 11},
    {id: 3, postText: "Good post ", likeCount: 12},
    {id: 4, postText: "Last post give me LIKE", likeCount: 0},
    {id: 5, postText: "And Last post ", likeCount: 35},
    {id: 6, postText: "Lastest post ", likeCount: 99}
  ],
  newPostText: "",
  userProfile: {
    aboutMe: "",
    contacts: {
      facebook: "",
      website: "",
      vk: "",
      twitter: "",
      instagram: "",
      youtube: "",
      github: "",
      mainLink: "",
    },
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
    userId: 0,
    photos: {
      small: "",
      large: "",
    }
  },
  status: ""
}

//reducer
export const profileReducer = (state: ProfilePageType = initialStateProfilePage, action: ProfileReducerActionType): ProfilePageType => {
  switch (action.type) {
    case "profile/ADD-POST": {
      return {
        ...state,
        posts: [{id: state.posts.length, postText: action.newPost, likeCount: 0}, ...state.posts],
      }
    }
    case "profile/SET-USER-PROFILE": {
      return {
        ...state,
        userProfile: {
          ...action.profile,
          contacts: {...action.profile.contacts},
          photos: {...action.profile.photos}
        }
      }
    }
    case "profile/SET-STATUS": {
      return {
        ...state,
        status: action.status
      }
    }
    case "profile/SET-PHOTO-SUCCESS": {
      debugger
      return {  ...state,
        userProfile: {
          ...state.userProfile,
          photos: {...action.photos}
        }}
    }
  }
  return state
}


//types
export type ProfileReducerActionType =
  ReturnType<typeof addMyPost>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof setPhotoSuccess>

export type UsersContactType = {
  facebook: string
  website: string
  vk: string
  twitter: string
  instagram: string
  youtube: string
  github: string
  mainLink: string
}
export type ProfilePhotoType = {
  small: string
  large: string
}
export type UserProfileType = {
  aboutMe: string
  contacts: UsersContactType
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: ProfilePhotoType
}
export type MyPostsType = {
  id: number
  postText: string
  likeCount: number
}