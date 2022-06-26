import axios from 'axios';
import React from 'react';
import s from "./UserPage.module.css"
import userphoto from "./../../assets/images/user.png"
import {MapDispatchPropType, MapStatePropType} from "./UsersPageConteiner";


// type UserPagePropsType = {
//    usersPage: UserPageStateType
//    onClickSetUsers: () => void
//    onClickFollow: (id: number) => void
//    onClickUnfollow: (id: number) => void
//    }
type UserPagePropsType = MapDispatchPropType & MapStatePropType

class UsersC extends React.Component<UserPagePropsType> {
   // constructor(props:UserPagePropsType) {
   //    super(props);
   /*  axios.get("https://social-network.samuraijs.com/api/1.0/users")
       .then(response => {
          this.props.getUsers(response.data.items)
       })*/
   //}
   
   onClickHandler = () => {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
           console.log(response.data)
           this.props.getUsers(response.data.items)
           debugger
        })
   }
   
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentUsersPage}&count=${this.props.countUsersPerPage}`)
        .then(response => {
           this.props.getUsers(response.data.items)
           this.props.changeTotalUsersCount(response.data.totalCount)
           
        })
   }
   
   onChangeCurrentUsersPage = (pageNumber: number) => {
      this.props.changeCurrentUserPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.countUsersPerPage}`)
        .then(response => {
           this.props.getUsers(response.data.items)
           this.props.changeTotalUsersCount(response.data.totalCount)
        })
    
   }
   
   render = () => {
      
      let pagesCount = this.props.totalPagesCount
      let pages = []
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i)
      }
      return <div className={s.conteiner}>
         
         {pages.map(p => {
            return <span onClick={() => this.onChangeCurrentUsersPage(p)}
                         className={(this.props.currentUsersPage === p) ? s.selectedPages : ''}>
              {p}
           </span>
         })
         }
         
         
         <div>{`total count=${this.props.totalUsersCount}`}</div>
         {this.props.users.map(u => {
            return <div className={s.oneUser} key={u.id}>
               <div className={s.oneUserAva}>
                  <img className={s.ava} src={u.photos.large !== null ? u.photos.large : userphoto} alt=""/>
                  {u.followed
                    ? <button onClick={() => this.props.onClickUnfollow(u.id)}>follow</button>
                    : <button onClick={() => this.props.onClickFollow(u.id)}>unfollow</button>}
               </div>
               <div className={s.oneUserDescription}>
                 <span><div className={s.name}>{u.name}</div>
                    <div className={s.status}>{u.status}</div></span>
                  <span className={s.location}><div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div></span>
               </div>
            </div>
            
         })}
         {/*<button onClick={()=>props.onClickSetUsers(setUsersAC())}>add</button>*/}
         <button onClick={this.onClickHandler}>add</button>
         {/*<button >add</button>*/}
      </div>
   }
}

export default UsersC;