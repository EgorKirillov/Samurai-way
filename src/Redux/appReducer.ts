import { authMeThunk } from './authReducer'
import { AppThunk } from './redux-store'

// action
export const initializedSuccess = () => ({ type: 'app/SET-INITIALIZED' } as const)

//thunk
export const initializeAppThunk = (): AppThunk => async dispatch => {
  try {
    await dispatch(authMeThunk())
    dispatch(initializedSuccess())
  } catch (e) {
    console.log('ошибка инициализации')
  }
}

const initialAuthState: AppReducerType = {
  initialized: false,
}
//reducer
export const appReducer = (
  state: AppReducerType = initialAuthState,
  action: AppReducerStateType
): AppReducerType => {
  switch (action.type) {
    case 'app/SET-INITIALIZED':
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

//types
export type AppReducerType = {
  initialized: boolean
}

export type AppReducerStateType = ReturnType<typeof initializedSuccess>
