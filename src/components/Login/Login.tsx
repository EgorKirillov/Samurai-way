import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

const Login = () => {
    return (
        <div>
            you are not authorized !! LOGIN
            <LoginForm/>
        </div>
    );
};

export default Login;

type LoginFormType = {
    login: string
    password: string
    rememberMe: boolean
};

const LoginForm = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<LoginFormType>();
    const onSubmit: SubmitHandler<LoginFormType> = (data) => {
        console.log(data);
    }
    console.log(watch("login"))
    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder={"login"}
                       {...register("login",
                           {
                               required: {value: true, message: 'this field is required'},
                               maxLength: {value: 15, message: 'max length 15'}
                           })
                       }
                />
                {errors.login && <span>This field is required</span>}
            </div>
            <div>
                <input placeholder={"password"}
                       {...register("password",
                           {
                               required: {value: true, message: 'this field is required'},
                               maxLength: {value: 15, message: 'max length 15'}
                           })
                       }
                />
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <div>
                <input type={"checkbox"} {...register("rememberMe")}/>
            </div>
            <button>submit</button>
        </form>
    )
}