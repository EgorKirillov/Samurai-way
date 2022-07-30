import React from "react";
import {addMyPost} from "../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {MyPostsType} from "../../../Redux/store";
import {Dispatch} from "redux";

type MapStateToProps = {
    posts: Array<MyPostsType>
}
type MapDispatchToProps = {
    addMyPost: (newPostText: string) => void
}
export type MyPostPropsFromConteinerType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {// import Dispatch from REDUX!!
    return {
        addMyPost: (newPostText: string) => dispatch(addMyPost(newPostText)),
    }
}
export const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)