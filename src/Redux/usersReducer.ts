import {usersAPI} from "../api/api";
import {AppThunk} from "./redux-store";

//action
export const followSuccess = (id: number) => ({type: "users/CHANGE-ON-FOLLOW", id} as const)

export const unfollowSuccess = (id: number) => ({type: "users/CHANGE-ON-UNFOLLOW", id} as const)

export const followToggle = (id: number, isFollow: boolean) => ({type: "users/FOLLOW-TOGGLE", id, isFollow} as const)

export const changeCurrentPage = (currentUsersPage: number) => ({
  type: "users/CHANGE-CURRENT-PAGE",
  currentUsersPage
} as const)

export const changeTotalUsersCount = (totalUsersCount: number) => ({
  type: "users/CHANGE-TOTAL-USERS-COUNT",
  totalUsersCount
} as const)

export const changeTotalPagesCount = (totalPagesCount: number) => ({
  type: "users/CHANGE-TOTAL-PAGES-COUNT" as const, totalPagesCount,
})

export const getUsers = (users: Array<UserType>) => ({type: "users/SET-USERS" as const, users,})

export const setIsFatchingValue = (isFatching: boolean) => ({
  type: "users/SET-ISFATCHING-VALUE" as const, isFatching,
})

export const toggleFollowInProgress = (isFatching: boolean, id: number) => ({
  type: "users/TOGGLE-FOLLOW-IN-PROGRESS" as const, isFatching, id,
})

//thunk
export const getUsersThunkCreator = (currentUsersPage: number, countUsersPerPage: number): AppThunk =>
  async dispatch => {
    dispatch(setIsFatchingValue(true))
    const res = await usersAPI.getUsers(currentUsersPage, countUsersPerPage)
    dispatch(getUsers(res.items))
    dispatch(changeTotalUsersCount(res.totalCount))
    dispatch(changeTotalPagesCount(Math.ceil(res.totalCount / countUsersPerPage)))
    dispatch(setIsFatchingValue(false));
  }

export const followUserThunk = (userID: number): AppThunk => async dispatch => {
  dispatch(toggleFollowInProgress(true, userID))
  const res = await usersAPI.changeUserToFollow(userID)
  if (res.resultCode === 0) {
    dispatch(followSuccess(userID))
  }
  dispatch(toggleFollowInProgress(false, userID))
}

export const unfollowUserThunk = (userID: number): AppThunk => async dispatch => {
  dispatch(toggleFollowInProgress(true, userID))
  const res = await usersAPI.changeUserToUnfollow(userID)
  if (res.resultCode === 0) {
    dispatch(unfollowSuccess(userID))
  }
  dispatch(toggleFollowInProgress(false, userID))
}

export const followToggleUserThunk = (userID: number, isFollow: boolean): AppThunk => async dispatch => {
  
  dispatch(toggleFollowInProgress(true, userID))
  const res =  isFollow ? await usersAPI.changeUserToFollow(userID) : await usersAPI.changeUserToUnfollow(userID)
  
  if (res.resultCode === 0) {
    dispatch(followToggle(userID, isFollow))
  }
  dispatch(toggleFollowInProgress(false, userID))
}


const initialStateUsersPage: UserPageStateType = {
  users: [] as Array<UserType>,
  totalUsersCount: 20,
  totalPagesCount: 5,
  countUsersPerPage: 10,
  currentUsersPage: 1965,
  isFatching: false,
  followingInProgress: []
}

//reducer
export const usersReducer = (state: UserPageStateType = initialStateUsersPage, action: UsersReducerStateType): UserPageStateType => {
  
  switch (action.type) {
    case "users/CHANGE-ON-FOLLOW": {
      return {
        ...state, users: state.users.map(u => {
          return (u.id === action.id)
            ? {...u, followed: true}
            : u
        })
      }
    }
    case "users/CHANGE-ON-UNFOLLOW": {
      return {
        ...state, users: state.users.map(u => {
          return (u.id === action.id)
            ? {...u, followed: false}
            : u
        })
      }
    }
    case "users/FOLLOW-TOGGLE": {
      return {
        ...state, users: state.users.map(u => {
          return (u.id === action.id)
            ? {...u, followed: action.isFollow}
            : u
        })
      }
    }
    
    case "users/SET-USERS": {
      return {
        ...state,
        users: [...action.users],
        
      }
    }
    case "users/CHANGE-CURRENT-PAGE": {
      return {
        ...state,
        currentUsersPage: action.currentUsersPage,
      }
    }
    case "users/CHANGE-TOTAL-USERS-COUNT": {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      }
    }
    case "users/CHANGE-TOTAL-PAGES-COUNT": {
      return {
        ...state,
        totalPagesCount: action.totalPagesCount,
      }
    }
    case "users/SET-ISFATCHING-VALUE": {
      return {
        ...state,
        isFatching: action.isFatching
      }
    }
    case "users/TOGGLE-FOLLOW-IN-PROGRESS": {
      return {
        ...state,
        followingInProgress: action.isFatching
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter(id => id !== action.id)
      }
    }
  }
  return state
}

//types
export type PhotosType = {
  small: string
  large: string
}

export type UserType = {
  id: number
  name: string
  photos: PhotosType
  status: string
  followed: boolean
  
}

export type UserPageStateType = {
  users: Array<UserType>
  totalUsersCount: number
  totalPagesCount: number
  countUsersPerPage: number
  currentUsersPage: number
  isFatching: boolean
  followingInProgress: Array<number>
  
}

export type UsersReducerStateType =
  ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof changeCurrentPage>
  | ReturnType<typeof changeTotalUsersCount>
  | ReturnType<typeof changeTotalPagesCount>
  | ReturnType<typeof getUsers>
  | ReturnType<typeof setIsFatchingValue>
  | ReturnType<typeof toggleFollowInProgress>
  | ReturnType<typeof followToggle>
