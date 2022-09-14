import {authAPI} from "../api/api";
import {AppThunk} from "./redux-store";

//action
export const setAuthData = (id: number, login: string, email: string, isAuth: boolean) => ({
  type: "auth/SET-AUTH-DATA", id, login, email, isAuth,
} as const)
export const setErrorLogin = (error: string) => ({
  type: "auth/SET-ERROR-LOGIN", error,
} as const)
export const setAuthIsFatchingValue = (isFetching: boolean) => ({
  type: "auth/SET-AUTH-ISFATCHING-VALUE" as const, isFetching,
})

//thunk
export const authMeThunk = ():AppThunk => async (dispatch) => {
  dispatch(setAuthIsFatchingValue(true))
  const res = await authAPI.getMyData()
  if (res.resultCode === 0) {
    dispatch(setAuthData(res.data.id, res.data.login, res.data.email, true))
  }
  dispatch(setAuthIsFatchingValue(false))
}

export const loginThunk = (email: string, password: string, rememberMe: boolean):AppThunk =>
  async (dispatch) => {
    const res = await authAPI.login(email, password, rememberMe)
    if (res.resultCode === 0) {
      dispatch(authMeThunk())
    } else {
      dispatch(setErrorLogin(res.messages))
    }
  }

export const logoutThunk = ():AppThunk => async dispatch => {
  const res = await authAPI.logout()
  if (res.resultCode === 0) {
    dispatch(setAuthData(0, "", "", false))
  }
}

const initialAuthState: AuthStateType = {
  // id: null,
  // login: "",
  // email: "",
  // isFetching: true,
  // isAuth: false,
  // errorLogin: "",
} as AuthStateType

//reducer
export const authReducer = (state: AuthStateType = initialAuthState, action: AuthReducerStateType): AuthStateType => {
  switch (action.type) {
    case "auth/SET-AUTH-DATA":
      return {
        ...state,
        errorLogin: "",
        ...action,
        // id: action.id,
        // login: action.login,
        // email: action.email,
        // isAuth: action.isAuth,
        
      }
    case "auth/SET-AUTH-ISFATCHING-VALUE":
      return {
        ...state,
        isFetching: action.isFetching
      }
    case "auth/SET-ERROR-LOGIN" : {
      return {
        ...state,
        errorLogin: action.error
      }
    }
    default:
      return state
  }
}


//types
export type AuthStateType = {
  id: number
  login: string
  email: string
  isFetching: boolean
  isAuth: boolean
  errorLogin?: string
}

export type AuthReducerStateType =
  ReturnType<typeof setAuthData>
  | ReturnType<typeof setAuthIsFatchingValue>
  | ReturnType<typeof setErrorLogin>
