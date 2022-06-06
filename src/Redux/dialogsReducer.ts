import {DialogPagesType} from "./stateApp";


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


export const dialogsReducer = (state: DialogPagesType, action: DialogsReducerStateType) => {

    function addMessage() {
        state.messagesData.push({messageText: state.newMessageText})
        state.newMessageText = ""
    }

    function changeMessageText(newMessageText: string) {
        state.newMessageText = newMessageText
    }

    switch (action.type) {
        case "ADD-MESSAGE":
            addMessage()
            break
        case "CHANGE-MESSAGE-TEXT":
            changeMessageText(action.newMessageText)
            break
    }
    return state
}

export default dialogsReducer;