import React from "react";
import s from "./Profile.module.css"
import {Profile} from "./Profile";
import {setUserProfile, setUserProfileThunk, UserProfileType} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
export type MapDispatchPropType = {
   setUserProfile: (profile: UserProfileType) => void
   setUserProfileThunk:(userId:string) => any
}

type MapStateToPropsType = {
   profile: UserProfileType
   //isAuth: boolean
}
const mapStateToProps = (state: AppStateType) => {
   return {
      profile: state.profilePage.userProfile,
      // isAuth: state.auth.isAuth,
   }
}


class ProfileContainerC extends React.Component<MapStateToPropsType & MapDispatchPropType & RouteComponentProps<{userId:string}>> {
   /* constructor(props: any) {
       super(props);
       console.log(props)
    }*/
   
   /* componentWillUnmount() {
       console.log('unmount')
    }*/
   
   componentDidMount() {
      
      let userId=this.props.match.params.userId
      this.props.setUserProfileThunk(userId)
     // profileAPI.getUserProfile(userId).then(response=>{this.props.setUserProfile(response.data)})
      /*if (!userId) {userId="2"}
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
        .then(response => {
           this.props.setUserProfile(response.data)
        })*/
   }
   
   render() {
    //  if (!this.props.isAuth) return <Redirect to={"/login"} />
      return (
        <div className={s.content}>
           {this.props.profile && <Profile profile={this.props.profile}/>}
        </div>
      )
   }
}


export default withAuthRedirect(connect(mapStateToProps, {setUserProfile,setUserProfileThunk})(withRouter(ProfileContainerC)))
