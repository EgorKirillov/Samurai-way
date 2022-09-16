import axios from "axios";
import {UpdateProfileType} from "../Redux/profileReducer";


const instance = axios.create({
   baseURL:"https://social-network.samuraijs.com/api/1.0/",
   withCredentials: true,
   headers:{
      "API-KEY": "4f6e1a9b-a442-4dac-9b05-ef297eadf4f8"
   },
})



export const usersAPI = {
   getUsers(currentUsersPage=1,countUsersPerPage=10) {
     return instance.get(`users?page=${currentUsersPage}&count=${countUsersPerPage}`).then(response=>response.data)
   },
   changePageUsers(pageNumber:number,countUsersPerPage:number) {
      return instance.get(`users?page=${pageNumber}&count=${countUsersPerPage}`).then(response=>response.data)
   },
   changeUserToFollow(id:number){
      return instance.post(`follow/${id}`).then(response=>response.data)
   },
   changeUserToUnfollow(id:number){
      return instance.delete(`follow/${id}`).then(response=>response.data)
   },
}
export const profileAPI = {
   getUserProfile(userId='24445') {
      return instance.get(`profile/${userId}`).then(response=>response.data)
   },
   getUserStatus(userId='24445') {
      return instance.get(`profile/status/${userId}`).then(response=>response.data) //возвращает сам статус
   },
   updateMyStatus(status:string) {
      return instance.put(`profile/status`, {status} ) // обновляем только свой
   },
   updateMyProfile(UpdatedProfile:UpdateProfileType) {
      return instance.put(`profile`, UpdatedProfile ) // обновляем только свой
   },
   savePhoto(photo:File){
      const formData = new FormData()
      formData.append('image', photo)
      return instance.put(`profile/photo`, formData, {
         headers:{
            // 'ContentType':'multipart/form-data'
            "Content-Type": "multipart/form-data"
         }
      } ) // обновляем только свой
   }
}

export const authAPI = {
   getMyData() {
      return instance.get(`auth/me`).then(response=>response.data)
   },
   login(email:string, password:string, rememberMe:boolean=false) {
      return instance.post(`auth/login`,{email,password,rememberMe,captcha:true}).then(response=>response.data)
   },
   logout() {
      return instance.delete(`auth/login`).then(response=>response.data)
   }
   
}

