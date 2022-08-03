import React from "react";
import {authMeThunk, logoutThunk, setAuthData, setAuthIsFatchingValue} from "../../Redux/authReducer";
import {Header} from "./Header";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
   // constructor(props:HeaderContainerPropsType) {
   //    super(props);
   //
   //
   // }
   
   componentDidMount() {
      this.props.authMeThunk()
      /*  this.props.setAuthIsFatchingValue(true)
        authAPI.getMyData()
          //axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
          .then(data => {
             if (data.resultCode === 0) {
                this.props.setAuthData(data.data.id, data.data.login, data.data.email,)
             }
             
             this.props.setAuthIsFatchingValue(false)
          })*/
   }
   
   render = () => {
      return (
        <Header {...this.props}/>
      )
   }
   
}

const mapStateToProps = (state: AppStateType) => {
   return {
      id: state.auth.id,
      login: state.auth.login,
      email: state.auth.email,
      isFetching: state.auth.isFetching,
      isAuth: state.auth.isAuth,
   }
}


export type MapDispatchPropType = {
   setAuthData: (id: number, login: string, email: string, isAuth:boolean) => void
   setAuthIsFatchingValue: (isFatchung: boolean) => void
   authMeThunk: () => any
   logoutThunk: ()=>void
}
export type MapStatePropType = {
   id: number
   login: string
   email: string
   isFetching: boolean
   isAuth: boolean
}

export type HeaderContainerPropsType = MapDispatchPropType & MapStatePropType

export default connect(mapStateToProps, {setAuthIsFatchingValue, setAuthData, authMeThunk, logoutThunk})(HeaderContainer)