import React from "react";
import {addMyPost, changeNewPostText} from "../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {MyPostsType} from "../../../Redux/store";
import {Dispatch} from "redux";


// type PropsType = {
// postState: ProfilePageType
// dispatch: (action: ActionTypes) => void
// }

// export function MyPostsConteiner(props: PropsType) {
// const addMyPost = () => props.dispatch(addMyPostActionCreator())
// const onChangePostValueHandler = (text: string) => props.dispatch(changeNewPostTextActionCreator(text))
//
// return (<MyPosts posts={props.postState.posts}
//                  newPostValue={props.postState.newPostText}
//                  onClickAddPost={addMyPost}
//                  changeNewPostText={onChangePostValueHandler}/>)
// return (
//
//    {store =>{
//       const addMyPost = () => store.dispatch(addMyPostActionCreator())
//       const onChangePostValueHandler = (text: string) => store.dispatch(changeNewPostTextActionCreator(text))
//
//       return (<MyPosts posts={store.getState().profilePage.posts}
//       newPostValue={store.getState().profilePage.newPostText}
//       onClickAddPost={addMyPost}
//       changeNewPostText={onChangePostValueHandler}/>)
//    }}
//
// )
// }

type MapStateToProps = {
   posts: Array<MyPostsType>
   newPostValue: string
}
type MapDispatchToProps = {
   addMyPost: () => void
   changeNewPostText: (text: string) => void
}
export type MyPostPropsFromConteinerType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType) => {
    return {
      posts: state.profilePage.posts,
      newPostValue: state.profilePage.newPostText,
   }
}
const mapDispatchToProps = (dispatch: Dispatch) => {// import Dispatch from REDUX!!
   return {
      addMyPost: () => dispatch(addMyPost()),
      changeNewPostText: (text: string) => dispatch(changeNewPostText(text))
   }
}
export const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)