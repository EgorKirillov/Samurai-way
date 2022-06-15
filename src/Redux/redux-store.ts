import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import {usersReducer} from "./usersReducer";

export type AppStateType = ReturnType<typeof rootReducer>


let rootReducer = combineReducers({
   dialogsPage: dialogReducer,
   profilePage: profileReducer,
   usersPage: usersReducer,
})

let store = createStore(rootReducer)


export default store
