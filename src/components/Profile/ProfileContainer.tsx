import React from "react";
import s from "./Profile.module.css"
import {Profile} from "./Profile";
import axios from "axios";
import {setUserProfile, UserProfileType} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";

export type MapDispatchPropType = {
   setUserProfile: (profile: UserProfileType) => void
}

type MapStateToPropsType = {
   profile: UserProfileType
}
const mapStateToProps = (state: AppStateType) => {
   return {
      profile: state.profilePage.userProfile
   }
}

class ProfileContainerC extends React.Component<MapStateToPropsType & MapDispatchPropType> {
   /* constructor(props: any) {
       super(props);
       console.log(props)
    }*/
   
   /* componentWillUnmount() {
       console.log('unmount')
    }*/
   
   componentDidMount() {
      debugger
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(response => {
           this.props.setUserProfile(response.data)
        })
   }
   
   render() {
      return (
        <div className={s.content}>
           {this.props.profile && <Profile profile={this.props.profile}/>}
        </div>
      )
   }
}


export default connect(mapStateToProps, {setUserProfile})(ProfileContainerC)
