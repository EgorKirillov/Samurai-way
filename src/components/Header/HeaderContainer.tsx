import React from "react";
import { setAuthData, setAuthIsFatchingValue} from "../../Redux/authReducer";
import {Header} from "./Header";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import axios from "axios";


 class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    
    componentDidMount() {
       this.props.setAuthIsFatchingValue(true)
       axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
         .then(response => {
            if (response.data.resultCode === 0) {
               this.props.setAuthData(response.data.data.id, response.data.data.login, response.data.data.email,)
            }
            
            this.props.setAuthIsFatchingValue(false)
         })
    }
   
    render = () =>  {
      return (
        <Header {...this.props}/>
      )
   }
   
}

const mapStateToProps = (state: AppStateType) => {
   return {
      id: state.auth.id,
      login:state.auth.login,
      email: state.auth.email,
      isFetching: state.auth.isFetching,
      isAuth: state.auth.isAuth,
   }
}


export type MapDispatchPropType = {
   setAuthData: (id:number,login:string,email:string) => void
   setAuthIsFatchingValue: (isFatchung: boolean) => void
}
export type MapStatePropType = {
   id: number
   login:string
   email: string
   isFetching: boolean
   isAuth:boolean
}

type HeaderContainerPropsType = MapDispatchPropType & MapStatePropType

export default connect(mapStateToProps,{setAuthIsFatchingValue, setAuthData})(HeaderContainer)