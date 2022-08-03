import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddMessageFormDataType = {
    addMessageText: string
}

export const AddMessageForm = (props: InjectedFormProps<AddMessageFormDataType>) => {
        
        return (
            <form onSubmit={props.handleSubmit}>
                <Field key={"dfsgdfg"}
                       component={"textarea"}
                       name={'addMessageText'}
                       placeholder={"enter your message"}
                       type={'text'}
                       id="123" cols={15} rows={3}/>
                <button>add message</button>
            </form>
        );
    };

export const AddMessageReduxForm = reduxForm<AddMessageFormDataType>({form: "addPostForm"})(AddMessageForm)
