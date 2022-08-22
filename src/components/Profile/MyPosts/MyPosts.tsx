import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {MyPostPropsFromConteinerType} from "./MyPostsContainer";
import {SubmitHandler, useForm} from "react-hook-form";


/*type PropsType = {
    posts: Array<MyPostsType>
    newPostValue: string
    changeNewPostText: (newPostValue:string) => void
    onClickAddPost: ()=>void
}*/

//87 React.memo без него и так работает хорошо
export const  MyPosts = React.memo((props: MyPostPropsFromConteinerType) => { // MyPostPropsFromConteinerType или PropsType
    
    const postsElements = (props.posts.map(p => <Post id={p.id} postText={p.postText} likeCount={p.likeCount}/>))
    const onClickAddButtonHandler = (newPost: string) => props.addMyPost(newPost)
    
    return <div className={s.postsBlocks}>
        <h3>my post</h3>
        <AddPostForm addPost={onClickAddButtonHandler}/>
        
        <div> new post</div>
        <div className={s.post}>
            {postsElements}
        </div>
    </div>
})


type AddPostFormType = {
    postValue: string
};

const AddPostForm = (props: { addPost: (value: string) => void }) => {
    
    const {register,resetField, handleSubmit, watch, formState: {errors,touchedFields}} = useForm<AddPostFormType>();
    
    const onSubmit: SubmitHandler<AddPostFormType> = (data) => {
        console.log(data);
        props.addPost(data.postValue)
        resetField("postValue")
    }
    
    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <textarea
                placeholder={"new post"}
                {...register("postValue",
                    {
                        required: {value: true, message: "field required"},
                        maxLength: {value: 255, message: "max 255"}
                    }
                )}
            />
                {errors.postValue && touchedFields && <span>{errors.postValue.message}</span>}
              
            </div>
            <div>
                <button> Add</button>
            </div>
        </form>
    </>)
    
}
