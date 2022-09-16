import {SubmitHandler, useForm} from "react-hook-form";
import React from "react";

type AddPostFormType = {
  postValue: string
};

export const AddPostForm = (props: { addPost: (value: string) => void }) => {
  
  const {register,resetField, handleSubmit, watch, formState: {errors,touchedFields}} = useForm<AddPostFormType>();
  
  const onSubmit: SubmitHandler<AddPostFormType> = (data) => {
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
                  // maxLength: {value: 255, message: "max 255"}
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
