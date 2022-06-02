let rerenderEntireTree = () => {

}
export type MessageTypes = {
    messageText: string
}
export type DialogItemTypes = {
    linkID: number
    userName: string
    avatarLink: string
}
export type MyPostsType = {
    id: number,
    postText: string
    likeCount: number
}
export type DialogPagesType = {
    dialogsData: Array<DialogItemTypes>
    messagesData: Array<MessageTypes>
    newMessageText: string

}
export type ProfilePageType = {
    posts: Array<MyPostsType>
}
export type AppStateType = {
    dialogsPage: DialogPagesType
    profilePage: ProfilePageType
}
export type StateType = {
    state: AppStateType

}

export type StoreType = {
    _state: AppStateType,
    getState:()=> AppStateType
    addMyPost: (postText: string) => void,
    changeMessageText: (newText: string) => void,
    addMessage: (newText: string) => void,
    _onChange:() => void,
    subscribe: (observer: () => void) => void,
}

export const store: StoreType = {
    _state: {
        dialogsPage: {
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
            newMessageText: "text mess"
        },
        profilePage: {
            posts: [
                {id: 11, postText: "First post ", likeCount: 25},
                {id: 12, postText: "Second post ", likeCount: 5},
                {id: 13, postText: "Bad post ", likeCount: 11},
                {id: 14, postText: "Good post ", likeCount: 12},
                {id: 15, postText: "Last post give me LIKE", likeCount: 0},
                {id: 16, postText: "And Last post ", likeCount: 35},
                {id: 17, postText: "Lastest post ", likeCount: 99}
            ]
        }
    },
    getState(){
        return this._state
    },
    addMyPost(postText: string) {
        this._state.profilePage.posts = [{id: 18, postText: postText, likeCount: 0}, ...this._state.profilePage.posts]
        this._onChange()
    },
    changeMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText
        this._onChange()
    },
    addMessage(newText: string) {
        this._state.dialogsPage.messagesData.push({messageText: newText})
        this._state.dialogsPage.newMessageText = ""
        this._onChange()
    },
    _onChange() {
        console.log("state changed")
    },
    subscribe(observer: () => void) {
        this._onChange = observer
    }
}

/*
export const state: AppStateType = {
    dialogsPage: {
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
        newMessageText: "text mess"
    },
    profilePage: {
        posts: [
            {id: 11, postText: "First post ", likeCount: 25},
            {id: 12, postText: "Second post ", likeCount: 5},
            {id: 13, postText: "Bad post ", likeCount: 11},
            {id: 14, postText: "Good post ", likeCount: 12},
            {id: 15, postText: "Last post give me LIKE", likeCount: 0},
            {id: 16, postText: "And Last post ", likeCount: 35},
            {id: 17, postText: "Lastest post ", likeCount: 99}
        ]
    }
}

export const addMyPost = (postText: string) => {
    state.profilePage.posts = [{id: 18, postText: postText, likeCount: 0}, ...state.profilePage.posts]
    rerenderEntireTree()
}
export const changeMessageText = (newText: string) => {
    state.dialogsPage.newMessageText = newText
    rerenderEntireTree()
}
export const addMessage = (newText: string) => {
    state.dialogsPage.messagesData.push({messageText: newText})
    state.dialogsPage.newMessageText = ""
    rerenderEntireTree()
}
export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}
*/
