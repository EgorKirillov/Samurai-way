import {DialogPagesType} from "./store";


export type DialogsReducerStateType =
  ReturnType<typeof changeMessageTextActionCreator>
  | ReturnType<typeof addMessageActionCreator>


export const changeMessageTextActionCreator = (newMessageText: string) => ({
   type: "CHANGE-MESSAGE-TEXT",
   newMessageText: newMessageText,
} as const)

export const addMessageActionCreator = () => ({
   type: "ADD-MESSAGE",
} as const)

const initialStateDialogPage: DialogPagesType = {
   dialogsData: [
      {linkID: 1, userName: 'Egor', avatarLink: "icon01.png"},
      {linkID: 2, userName: 'Vlad', avatarLink: "icon02.png"},
      {linkID: 3, userName: 'Sasha', avatarLink: "icon03.png"},
      {linkID: 4, userName: 'Sveta', avatarLink: "icon04.png"},
      {linkID: 5, userName: 'Dim', avatarLink: "icon05.png"},
      {linkID: 6, userName: 'Serg', avatarLink: "icon06.png"},
      {linkID: 7, userName: 'Mark', avatarLink: "icon07.png"},
      {linkID: 71, userName: 'Mark', avatarLink: "icon08.png"},
      {linkID: 8, userName: 'Player one', avatarLink: "icon09.png"},
      {linkID: 81, userName: 'Player two', avatarLink: "icon10.png"}
   ],
   messagesData: [
      {messageText: "Hi!"},
      {messageText: "Hello!!"},
      {messageText: "yo"},
      {messageText: "sdfl dj"},
      {messageText: "||||||||||||||"},
      {messageText: "Zelt"},
      {messageText: "Zelt"},
      {messageText: "Zelt"},
      {messageText: "Zelt1"},
   ],
   newMessageText: ""
}

export const dialogsReducer = (state: DialogPagesType = initialStateDialogPage, action: DialogsReducerStateType): DialogPagesType => {
   
   
   switch (action.type) {
      case "ADD-MESSAGE": {
         const stateCopy = {...state, messagesData: [...state.messagesData, {messageText: state.newMessageText}]}
         stateCopy.newMessageText = ""
         return stateCopy
      }
      case "CHANGE-MESSAGE-TEXT": {
         const stateCopy = {...state, newMessageText: action.newMessageText}
         return stateCopy
      }
   }
   return state
}

export default dialogsReducer;