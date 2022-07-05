import axios from "axios";


const instance = axios.create({
   baseURL:"https://social-network.samuraijs.com/api/1.0/",
   withCredentials: true,
   headers:{
      "API-KEY": "8fa8d5a8-7252-4514-960a-b4b00d0670e7"
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
