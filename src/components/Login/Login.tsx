import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            you are not authorized !! LOGIN
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"login"} type={"text"} placeholder={"Login"}/>
            </div>
            <div>
                <Field component={"input"} name={"password"} type={"text"} placeholder={'Password'}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type="checkbox"/> Remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>)
}

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

export default Login;