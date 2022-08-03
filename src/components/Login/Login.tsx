import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {loginThunk} from "../../Redux/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch<any>()
    const isAuth:boolean = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const errorLogin:string = useSelector<AppStateType, string>(state => state.auth.errorLogin ? state.auth.errorLogin : "")
    
    const onSubmit = (data:LoginFormType) => {
        dispatch(loginThunk(data.login, data.password, data.rememberMe))
    }
    if (isAuth) {return <Redirect to="/profile"/>}
    return (
        <div>
            you are not authorized !! LOGIN
            <LoginForm onSubmit={onSubmit}/>
            {errorLogin}
        </div>
        
    );
};

export default Login;

type LoginFormType = {
    login: string
    password: string
    rememberMe: boolean
};

const LoginForm = (props:{onSubmit:(data: LoginFormType) => void}) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<LoginFormType>();
    const onSubmit: SubmitHandler<LoginFormType> = (data) => {
        console.log(data);
        props.onSubmit(data)
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
                               maxLength: {value: 50, message: 'max length 50'}
                           })
                       }
                />
                {errors.login && <span>{errors.login.message}</span>}
            </div>
            <div>
                <input placeholder={"password"}
                       {...register("password",
                           {
                               required: {value: true, message: 'this field is required'},
                               maxLength: {value: 50, message: 'max length 50'}
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