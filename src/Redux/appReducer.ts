import {authMeThunk} from "./authReducer";
import {useAppDispatch} from "./hooks";

export type AppReducerType = {
    initialized: boolean
}

export type AppReducerStateType =
    | ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => ({
    type: "app/SET-INITIALIZED"
} as const)

export const initializeAppThunk = () => (dispatch=useAppDispatch()) => {
    let pr = dispatch(authMeThunk())
    pr.then(() => dispatch(initializedSuccess()) )
}

const initialAuthState: AppReducerType = {
    initialized: false,
}

export const appReducer = (state: AppReducerType = initialAuthState, action: AppReducerStateType): AppReducerType => {
    
    switch (action.type) {
        case "app/SET-INITIALIZED":
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}
