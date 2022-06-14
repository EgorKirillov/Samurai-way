import React from "react";
import {addMyPostActionCreator, changeNewPostTextActionCreator} from "../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";


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

const mapStateToProps = (state: AppStateType) => { //// refactr
   return {
      posts: state.profilePage.posts,
      newPostValue: state.profilePage.newPostText,
   }
}
const mapDispatchToProps = (dispatch: any) => {
   return {
      onClickAddPost: () => dispatch(addMyPostActionCreator()),
      changeNewPostText: (text: string) => dispatch(changeNewPostTextActionCreator(text))
   }
}
export const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)