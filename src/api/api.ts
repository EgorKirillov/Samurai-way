import axios from "axios";


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
      return instance.post(`follow/${id}`).then(response=>response.data.resultCode)
   },
   changeUserToUnfollow(id:number){
      return instance.delete(`follow/${id}`).then(response=>response.data.resultCode)
   },
   
}
export const profileAPI = {
   getUserProfile(userId="2") {
      return instance.get(`profile/${userId}`).then(response=>response.data)
   }
}

export const authAPI = {
   getMyData() {
      return instance.get(`auth/me`).then(response=>response.data)
   }
}

