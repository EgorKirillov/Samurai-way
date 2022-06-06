import {ProfilePageType} from "./stateApp";

export type ProfileReducerStateType =
ReturnType<typeof addMyPostActionCreator>
| ReturnType<typeof changeNewPostTextActionCreator>


export const addMyPostActionCreator = () => ({
    type: "ADD-POST",
} as const)
export const changeNewPostTextActionCreator = (newPostText: string) => ({
    type: "CHANGE-NEW-POST",
    newPostText: newPostText
} as const)


const profileReducer = (state: ProfilePageType, action: ProfileReducerStateType) => {

    function addMyPost() {
        state.posts = [{
            id: state.posts.length,
            postText: state.newPostText,
            likeCount: 0
        }, ...state.posts]
        state.newPostText = ""
    }

    function changeNewPostText(newPostText: string) {
        state.newPostText = newPostText
    }

    switch (action.type) {
        case "ADD-POST":
            addMyPost()
            break
        case "CHANGE-NEW-POST":
            changeNewPostText(action.newPostText)
            break
    }

    return state
}
export default profileReducer;