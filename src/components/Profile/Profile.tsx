import React from "react";
import s from "./Profile.module.css"
import {PropfileInfo} from "./ProfileInfo/PropfileInfo";
import {MyPostsConteiner} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../Redux/profileReducer";

type PropsType = {
    profile: UserProfileType
    statusText: string
    updateStatus: (statusText: string) => void
    isOwner: boolean
    savePhoto: (photo:File)=>void
}

export function Profile(props: PropsType) {
    
    return <div className={s.content}>
        <PropfileInfo profile={props.profile}
                      updateStatus={props.updateStatus}
                      statusText={props.statusText}
                      isOwner={props.isOwner}
                      savePhoto={props.savePhoto}
        />
        <MyPostsConteiner/>
    </div>
}