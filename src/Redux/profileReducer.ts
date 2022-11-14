import { ProfilePageType } from './store'
import { Dispatch } from 'redux'
import { profileAPI } from '../api/api'
import { AppThunk } from './redux-store'
import { setAuthPhoto } from './authReducer'

//action
export const addMyPost = (newPost: string) =>
  ({
    type: 'profile/ADD-POST',
    newPost,
  } as const)

export const setUserProfile = (profile: UserProfileType) =>
  ({
    type: 'profile/SET-USER-PROFILE',
    profile,
  } as const)

export const setStatus = (status: string) =>
  ({
    type: 'profile/SET-STATUS',
    status,
  } as const)
export const setPhotoSuccess = (photos: ProfilePhotoType) =>
  ({
    type: 'profile/SET-PHOTO-SUCCESS',
    photos,
  } as const)

//thunk
export const setUserProfileThunk =
  (userId: string): AppThunk =>
  async (dispatch: Dispatch) => {
    const res = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(res))
  }

export const setStatusThunk =
  (userId: string): AppThunk =>
  async dispatch => {
    const res = await profileAPI.getUserStatus(userId)
    dispatch(setStatus(res))
  }

export const updateStatusThunk =
  (status: string): AppThunk =>
  async dispatch => {
    const res = await profileAPI.updateMyStatus(status)
    if (res.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  }

export const updateProfile =
  (updatedProfile: UpdateProfileType): AppThunk =>
  async dispatch => {
    const res = await profileAPI.updateMyProfile(updatedProfile)
    if (res.data.resultCode === 0) {
      console.log(res)
      dispatch(setUserProfileThunk(updatedProfile.userId))
      // dispatch(setStatus(status))
    }
  }

export const savePhoto =
  (photo: File): AppThunk =>
  async dispatch => {
    const res = await profileAPI.savePhoto(photo)
    if (res.data.resultCode === 0) {
      dispatch(setPhotoSuccess(res.data.data.photos))
      dispatch(setAuthPhoto(res.data.data.photos.small))
    }
  }
const postsText = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque, ducimus eveniet iusto recusandae repudiandae sed voluptas voluptatem? Cum cupiditate debitis delectus, dolores impedit inventore, ipsam libero porro quam, quisquam sunt tempora vero voluptatum? Expedita facilis minus quo similique temporibus!',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, magnam nihil perspiciatis repellat similique vero.',
  'Eveniet iusto recusandae repudiandae sed voluptas voluptatem? Cum cupiditate debitis delectus, dolores impedit inventore, ipsam libero porro quam, quisquam sunt',
  'Aliquid consequuntur deserunt eligendi explicabo nemo, vero? A ad adipisci alias aut autem consequuntur deleniti, doloribus ',
  'Necessitatibus neque nihil nostrum placeat praesentium quas quia quibusdam quidem quisquam repellendus sunt unde velit vero voluptates! Cumque fugit quia sunt?',
  'Doloribus et ipsa minima molestiae. Aliquid consequuntur deserunt eligendi explicabo nemo, vero? A ad adipisci alias aut autem ',
  ' sequi sint sunt tenetur ut velit. Commodi cumque eligendi ex, fugit iure officia quae recusandae rerum sapiente sunt suscipit tempora vero, voluptate? Alias architecto earum, eius eveniet',
]

const initialStateProfilePage: ProfilePageType = {
  posts: [
    {
      id: 0,
      postText: postsText[0],
      likeCount: Math.floor(Math.random() * 100),
    },
    {
      id: 1,
      postText: postsText[1],
      likeCount: Math.floor(Math.random() * 100),
    },
    {
      id: 2,
      postText: postsText[2],
      likeCount: Math.floor(Math.random() * 100),
    },
    {
      id: 3,
      postText: postsText[3],
      likeCount: Math.floor(Math.random() * 100),
    },
    {
      id: 4,
      postText: postsText[0],
      likeCount: Math.floor(Math.random() * 100),
    },
    {
      id: 5,
      postText: postsText[5],
      likeCount: Math.floor(Math.random() * 100),
    },
    {
      id: 6,
      postText: postsText[6],
      likeCount: Math.floor(Math.random() * 100),
    },
  ],
  userProfile: {
    aboutMe: '',
    contacts: {
      facebook: '',
      website: '',
      vk: '',
      twitter: '',
      instagram: '',
      youtube: '',
      github: '',
      mainLink: '',
    },
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    userId: '0',
    photos: {
      small: '',
      large: '',
    },
  },
  status: '',
}

//reducer
export const profileReducer = (
  state: ProfilePageType = initialStateProfilePage,
  action: ProfileReducerActionType
): ProfilePageType => {
  switch (action.type) {
    case 'profile/ADD-POST': {
      return {
        ...state,
        posts: [{ id: state.posts.length, postText: action.newPost, likeCount: 0 }, ...state.posts],
      }
    }
    case 'profile/SET-USER-PROFILE': {
      return {
        ...state,
        userProfile: {
          ...action.profile,
          contacts: { ...action.profile.contacts },
          photos: { ...action.profile.photos },
        },
      }
    }
    case 'profile/SET-STATUS': {
      return {
        ...state,
        status: action.status,
      }
    }
    case 'profile/SET-PHOTO-SUCCESS': {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          photos: { ...action.photos },
        },
      }
    }
  }
  return state
}

//types
export type ProfileReducerActionType =
  | ReturnType<typeof addMyPost>
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
export type UpdateProfileType = {
  userId: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  aboutMe: string
  contacts: UsersContactType
}
export type UserProfileType = UpdateProfileType & {
  photos: ProfilePhotoType
}
export type MyPostsType = {
  id: number
  postText: string
  likeCount: number
}
