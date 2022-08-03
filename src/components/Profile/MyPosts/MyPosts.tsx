import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {MyPostPropsFromConteinerType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

/*type PropsType = {
    posts: Array<MyPostsType>
    onClickAddPost: ()=>void
}*/

export function MyPosts(props: MyPostPropsFromConteinerType) { // MyPostPropsFromConteinerType или PropsType
    const onSubmit = (formData: AddPostFormDataType) => {
        props.addMyPost(formData.addPostText)
    }
    const postsElements = (props.posts.map(p => <Post id={p.id} postText={p.postText} likeCount={p.likeCount}/>))
    
    return (
        <div className={s.postsBlocks}>
            <h3>my post</h3>
            <AddPostReduxForm onSubmit={onSubmit}/>
            <div> new post</div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>)
}


type AddPostFormDataType = {
    addPostText: string
}

const AddPostForm = (props: InjectedFormProps<AddPostFormDataType>) => {
    
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"textarea"}
                   name={'addPostText'}
                   type={'text'}/>
        </div>
        <div>
            <button> add post</button>
        </div>
    </form>)
}
const AddPostReduxForm = reduxForm<AddPostFormDataType>({form: "addPostForm"})(AddPostForm)