import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import dialogReducer, {DialogsReducerStateType} from "./dialogsReducer"
import profileReducer, {ProfileReducerStateType} from "./profileReducer"
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk"; // возможно исправить на {thunk as thunkMiddleware}

export type AppStateType = ReturnType<typeof rootReducer>
export type ActionTypes = ProfileReducerStateType | DialogsReducerStateType

let rootReducer = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware)) // или thunk


export default store
