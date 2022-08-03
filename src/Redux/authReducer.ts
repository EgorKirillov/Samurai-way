//{"data":{"id":24445,"login":"EgorKirillov","email":"80296253508@mail.ru"},"messages":[],"fieldsErrors":[],"resultCode":0}

import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type AuthStateType = {
    id: number
    login: string
    email: string
    isFetching: boolean
    isAuth: boolean
    errorLogin?: string
}

export type UsersReducerStateType =
    ReturnType<typeof setAuthData>
    | ReturnType<typeof setAuthIsFatchingValue>
    | ReturnType<typeof setErrorLogin>


export const setAuthData = (id: number, login: string, email: string, isAuth: boolean) => ({
    type: "SET-AUTH-DATA", id, login, email, isAuth,
} as const)
export const setErrorLogin = (error: string) => ({
    type: "SET-ERROR-LOGIN", error,
} as const)
export const setAuthIsFatchingValue = (isFetching: boolean) => ({
    type: "SET-AUTH-ISFATCHING-VALUE" as const, isFetching,
})

export const authMeThunk = () => {
    return (dispatch: Dispatch) => {
        dispatch(setAuthIsFatchingValue(true))
        authAPI.getMyData()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthData(data.data.id, data.data.login, data.data.email, true))
                }
                dispatch(setAuthIsFatchingValue(false))
            })
    }
}
export const loginThunk = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<any>) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(authMeThunk())
                } else {
                    dispatch(setErrorLogin(data.messages))
                }
            })
    }
}
export const logoutThunk = () => {
    return (dispatch: Dispatch<any>) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthData(0, "", "", false))
                }
            })
    }
}

const initialAuthState: AuthStateType = {
    id: -1,
    login: "",
    email: "",
    isFetching: true,
    isAuth: false,
    errorLogin: "",
}

export const authReducer = (state: AuthStateType = initialAuthState, action: UsersReducerStateType): AuthStateType => {
    
    switch (action.type) {
        case "SET-AUTH-DATA":
            return {
                ...state,
                id: action.id,
                login: action.login,
                email: action.email,
                isAuth: action.isAuth,
                errorLogin: "",
            }
        case "SET-AUTH-ISFATCHING-VALUE":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "SET-ERROR-LOGIN" : {
            return {
                ...state,
                errorLogin: action.error
            }
        }
        default:
            return state
    }
}
