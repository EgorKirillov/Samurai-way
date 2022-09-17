import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {dialogsReducer, DialogsReducerActionType} from "./dialogsReducer"
import {profileReducer, ProfileReducerActionType} from "./profileReducer"
import {usersReducer, UsersReducerStateType} from "./usersReducer";
import {authReducer, AuthReducerStateType} from "./authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {appReducer, AppReducerStateType} from "./appReducer"; // возможно исправить на {thunk as thunkMiddleware}

export type AppStateType = ReturnType<typeof rootReducer>

export type ActionType =
  ProfileReducerActionType
  | DialogsReducerActionType
  | UsersReducerStateType
  | AuthReducerStateType
  | AppReducerStateType

let rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware)) // или thunk


export type AppDispatch = ThunkDispatch<AppStateType, unknown, ActionType>;

// типизация Thunk Action для всего объекта
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionType>;


export default store

// @ts-ignore
window.store = store
