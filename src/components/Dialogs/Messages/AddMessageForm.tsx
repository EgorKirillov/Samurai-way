import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

export type AddMessageFormDataType = {
    addMessageText: string
}

export const AddMessageForm = (props:{onSubmit:(newMessage:string)=>void}) => {
    const {register,resetField, handleSubmit, watch, formState: {errors}} = useForm<AddMessageFormDataType>();
    
    const onSubmit: SubmitHandler<AddMessageFormDataType> = (data) => {
        console.log(data);
        props.onSubmit(data.addMessageText)
        resetField("addMessageText")
    }
    
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea key={"dfsgdfg"}
                       placeholder={"enter your message"}
                       id="123" cols={15} rows={3}
                          {...register("addMessageText",
                              {
                                  required: {value: true, message: 'this field is required'},
                                  maxLength: {value: 15, message: 'max length 255'}
                              })
                          }/>
                {errors.addMessageText && <span>This field is required</span>}
                <button>add message</button>
            </form>
        );
    };

