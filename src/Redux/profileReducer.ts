import {ProfilePageType} from "./store";

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
const initialStateProfilePage = {
   posts: [
      {id: 0, postText: "First post ", likeCount: 25},
      {id: 1, postText: "Second post ", likeCount: 5},
      {id: 2, postText: "Bad post ", likeCount: 11},
      {id: 3, postText: "Good post ", likeCount: 12},
      {id: 4, postText: "Last post give me LIKE", likeCount: 0},
      {id: 5, postText: "And Last post ", likeCount: 35},
      {id: 6, postText: "Lastest post ", likeCount: 99}
   ],
   newPostText: "",
}


const profileReducer = (state: ProfilePageType = initialStateProfilePage, action: ProfileReducerStateType) => {
   
   
   switch (action.type) {
      case "ADD-POST": {
         const stateCopy = {
            ...state,
            posts: [{id: state.posts.length, postText: state.newPostText, likeCount: 0}, ...state.posts],
            newPostText: ""
         }
         return stateCopy
      }
      case "CHANGE-NEW-POST": {
         const stateCopy = {...state, newPostText: action.newPostText}
         return stateCopy
      }
   }
   
   return state
}
export default profileReducer;