import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

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


export const followSuccess = (id: number) => ({type: "users/CHANGE-ON-FOLLOW", id} as const)
export const unfollowSuccess = (id: number) => ({type: "users/CHANGE-ON-UNFOLLOW", id} as const)
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
export const setIsFatchingValue = (isFatching: boolean) => ({type: "users/SET-ISFATCHING-VALUE" as const, isFatching,})
export const toggleFollowInProgress = (isFatching: boolean, id: number) => ({
    type: "users/TOGGLE-FOLLOW-IN-PROGRESS" as const, isFatching, id,
})

export const getUsersThunkCreator = (currentUsersPage: number, countUsersPerPage: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFatchingValue(true))
        usersAPI.getUsers(currentUsersPage, countUsersPerPage)
            .then(data => {
                dispatch(getUsers(data.items))
                dispatch(changeTotalUsersCount(data.totalCount))
                dispatch(changeTotalPagesCount(Math.ceil(data.totalCount / countUsersPerPage)))
                dispatch(setIsFatchingValue(false));
            })
    }
}
export const followUserThunk = (userID: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowInProgress(true, userID))
        usersAPI.changeUserToFollow(userID)
            .then(resultCode => {
                if (resultCode === 0) {
                    dispatch(followSuccess(userID))
                }
                dispatch(toggleFollowInProgress(false, userID))
            })
    }
}
export const unfollowUserThunk = (userID: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowInProgress(true, userID))
        usersAPI.changeUserToUnfollow(userID)
            .then(resultCode => {
                if (resultCode === 0) {
                    dispatch(unfollowSuccess(userID))
                }
                dispatch(toggleFollowInProgress(false, userID))
            })
    }
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

//export default usersReducer;