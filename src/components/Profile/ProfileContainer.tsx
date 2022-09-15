import React from "react";
import s from "./Profile.module.css"
import {Profile} from "./Profile";
import {
    savePhoto,
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
    setStatus: (status: string) => void
    setStatusThunk: (userId: string) => any
    updateStatusThunk: (status: string) => any
    savePhoto: (photo:File) => void
}

type MapStateToPropsType = {
    profile: UserProfileType
    status: string
    authID: string
}
const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.userProfile,
        status: state.profilePage.status,
        authID: state.auth.id,
    }
}

class ProfileContainerC extends React.Component<MapStateToPropsType & MapDispatchPropType & RouteComponentProps<{ userId: string }>> {
  
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authID
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.setUserProfileThunk(userId)
        this.props.setStatusThunk(userId)
    }
    
    componentDidMount() {
      this.refreshProfile()
    }
    
    componentDidUpdate(prevProps: Readonly<MapStateToPropsType & MapDispatchPropType & RouteComponentProps<{ userId: string }>>, prevState: Readonly<{}>, snapshot?: any) {
        
        if (this.props.match.params.userId !== prevProps.match.params.userId)  this.refreshProfile()
    }
    
    render() {
        //  if (!this.props.isAuth) return <Redirect to={"/login"} />
        return (
            <div className={s.content}>
                {this.props.profile && <Profile profile={this.props.profile} statusText={this.props.status}
                                                isOwner={!this.props.match.params.userId}
                                                updateStatus={this.props.updateStatusThunk}
                                                savePhoto={this.props.savePhoto}
                />}
            </div>
        )
    }
}

//export default withAuthRedirect(connect(mapStateToProps, {setUserProfile,setUserProfileThunk})(withRouter(ProfileContainerC)))
export default compose<React.ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps, {setUserProfile, setUserProfileThunk, setStatus, setStatusThunk, updateStatusThunk, savePhoto}),
    withRouter,
)(ProfileContainerC)
