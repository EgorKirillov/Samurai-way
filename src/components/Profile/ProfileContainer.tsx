import React from "react";
import s from "./Profile.module.css"
import {Profile} from "./Profile";
import {
   setStatus,
   setStatusThunk,
   setUserProfile,
   setUserProfileThunk, updateStatusThunk,
   UserProfileType
} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type MapDispatchPropType = {
   setUserProfile: (profile: UserProfileType) => void
   setUserProfileThunk: (userId: string) => any
   setStatus: (status:string) => void
   setStatusThunk: (userId: string) => any
   updateStatusThunk: (status:string) => any
}

type MapStateToPropsType = {
   profile: UserProfileType
   status: string
}
const mapStateToProps = (state: AppStateType) => {
   return {
      profile: state.profilePage.userProfile,
      status: state.profilePage.status,
   }
}


class ProfileContainerC extends React.Component<MapStateToPropsType & MapDispatchPropType & RouteComponentProps<{ userId: string }>> {
   /* constructor(props: any) {
       super(props);
       console.log(props)
    }*/
   
   /* componentWillUnmount() {
       console.log('unmount')
    }*/
   
   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) {userId="24445"}
      this.props.setUserProfileThunk(userId)
      this.props.setStatusThunk(userId)
      // profileAPI.getUserProfile(userId).then(response=>{this.props.setUserProfile(response.data)})
      /*if (!userId) {userId="2"}
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
        .then(response => {
           this.props.setUserProfile(response.data)
        })*/
      //this.props.setStatus(userId)
   }
   
   render() {
      //  if (!this.props.isAuth) return <Redirect to={"/login"} />
      return (
        <div className={s.content}>
           {this.props.profile && <Profile profile={this.props.profile} statusText={this.props.status} updateStatus={this.props.updateStatusThunk}/>}
        </div>
      )
   }
}

//export default withAuthRedirect(connect(mapStateToProps, {setUserProfile,setUserProfileThunk})(withRouter(ProfileContainerC)))
export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, {setUserProfile, setUserProfileThunk, setStatus, setStatusThunk, updateStatusThunk}),
  withRouter,
)(ProfileContainerC)
