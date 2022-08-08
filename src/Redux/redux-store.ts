import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import dialogReducer, {DialogsReducerStateType} from "./dialogsReducer"
import profileReducer, {ProfileReducerStateType} from "./profileReducer"
import {usersReducer, UsersReducerStateType} from "./usersReducer";
import {authReducer, AuthReducerStateType } from "./authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch } from "redux-thunk";
import {appReducer, AppReducerStateType} from "./appReducer"; // возможно исправить на {thunk as thunkMiddleware}
import { useDispatch } from "react-redux";

export type AppStateType = ReturnType<typeof rootReducer>

export type ActionType = ProfileReducerStateType | DialogsReducerStateType | UsersReducerStateType | AuthReducerStateType | AppReducerStateType

let rootReducer = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware)) // или thunk


export type AppDispatch = ThunkDispatch<AppStateType, unknown, ActionType>;
export const useAppDispatch: () => AppDispatch = useDispatch

// типизация Thunk Action для всего объекта
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionType>;

export default store
