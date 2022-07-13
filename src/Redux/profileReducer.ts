import {ProfilePageType} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type ProfileReducerStateType =
  ReturnType<typeof addMyPost>
  | ReturnType<typeof changeNewPostText>
  | ReturnType<typeof setUserProfile>

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

export const addMyPost = () => ({
   type: "ADD-POST",
} as const)
export const changeNewPostText = (newPostText: string) => ({
   type: "CHANGE-NEW-POST",
   newPostText: newPostText
} as const)
export const setUserProfile = (profile: UserProfileType) => ({
   type: "SET-USER-PROFILE",
   profile
   
} as const)
export const setUserProfileThunk = (userId: string) => {
   return (dispatch: Dispatch) => {
      profileAPI.getUserProfile(userId)
        .then(data => {
           dispatch(setUserProfile(data))
        })
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
   }
}


const profileReducer = (state: ProfilePageType = initialStateProfilePage, action: ProfileReducerStateType) => {
   
   
   switch (action.type) {
      case "ADD-POST": {
         const stateCopy = {
            ...state,
            posts: [{id: state.posts.length, postText: state.newPostText, likeCount: 0}, ...state.posts],
            newPostText: ""
         }
         return stateCopy
      }
      case "CHANGE-NEW-POST": {
         const stateCopy = {...state, newPostText: action.newPostText}
         return stateCopy
      }
      case "SET-USER-PROFILE": {
         const stateCopy = {
            ...state,
            userProfile: {
               ...action.profile,
               contacts: {...action.profile.contacts},
               photos: {...action.profile.photos}
            }
         }
         return stateCopy
      }
   }
   
   return state
}
export default profileReducer;