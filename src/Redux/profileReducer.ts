import {ProfilePageType} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type ProfileReducerStateType =
    ReturnType<typeof addMyPost>
    | ReturnType<typeof changeNewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
//| ReturnType<typeof updateStatus>


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

export const addMyPost = (newPost: string) => ({
    type: "profile/ADD-POST",
    newPost
} as const)
// проверить может не надо уже
export const changeNewPostText = (newPostText: string) => ({
    type: "profile/CHANGE-NEW-POST",
    newPostText: newPostText
} as const)
export const setUserProfile = (profile: UserProfileType) => ({
    type: "profile/SET-USER-PROFILE",
    profile
} as const)
export const setStatus = (status: string) => ({
    type: "profile/SET-STATUS",
    status,
} as const)

export const setUserProfileThunk = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}
export const setStatusThunk = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(status => {
                dispatch(setStatus(status))
            })
    }
}
export const updateStatusThunk = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateMyStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}
export type MyPostsType = {
    id: number
    postText: string
    likeCount: number
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


const profileReducer = (state: ProfilePageType = initialStateProfilePage, action: ProfileReducerStateType) => {
    
    
    switch (action.type) {
        case "profile/ADD-POST": {
            const stateCopy = {
                ...state,
                posts: [{id: state.posts.length, postText: action.newPost, likeCount: 0}, ...state.posts],
                
            }
            return stateCopy
        }
        case "profile/SET-USER-PROFILE": {
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
        case "profile/SET-STATUS": {
            const stateCopy = {
                ...state,
                status: action.status
            }
            return stateCopy
        }
    }
    
    return state
}
export default profileReducer;