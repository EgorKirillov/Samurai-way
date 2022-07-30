export type MessageTypes = {
    messageText: string
}
export type DialogItemTypes = {
    linkID: number
    userName: string
    avatarLink: string
}
export type DialogPagesType = {
    dialogsData: Array<DialogItemTypes>
    messagesData: Array<MessageTypes>
}

export type DialogsReducerStateType =
    ReturnType<typeof addMessageActionCreator>

export const addMessageActionCreator = (newMessage: string) => ({
    type: "ADD-MESSAGE", newMessage
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
}

export const dialogsReducer = (state: DialogPagesType = initialStateDialogPage, action: DialogsReducerStateType): DialogPagesType => {
    
    
    switch (action.type) {
        case "ADD-MESSAGE":
            return {...state, messagesData: [...state.messagesData, {messageText: action.newMessage}]}
        default:
            return state
    }
}

export default dialogsReducer;