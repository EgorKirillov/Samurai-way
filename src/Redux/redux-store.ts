import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"

export type AppStateType = ReturnType<typeof rootReducers>


let rootReducers = combineReducers({
   dialogsPage: dialogReducer,
   profilePage: profileReducer
})

let store = createStore(rootReducers)


export default store