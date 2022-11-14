import axios from 'axios'
import { UpdateProfileType } from '../Redux/profileReducer'
import { UserQueryParamType } from '../Redux/usersReducer'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '259019a1-aa44-4ad2-9f12-bda2512ad8a7',
  },
})

export const usersAPI = {
  getUsers(params: UserQueryParamType) {
    return instance.get(`users`, { params }).then(response => response.data)
  },

  changePageUsers(pageNumber: number, countUsersPerPage: number) {
    return instance
      .get(`users?page=${pageNumber}&count=${countUsersPerPage}`)
      .then(response => response.data)
  },

  changeUserToFollow(id: number) {
    return instance.post(`follow/${id}`).then(response => response.data)
  },

  changeUserToUnfollow(id: number) {
    return instance.delete(`follow/${id}`).then(response => response.data)
  },
}

export const profileAPI = {
  getUserProfile(userId = '24445') {
    return instance.get(`profile/${userId}`).then(response => response.data)
  },

  getUserStatus(userId = '24445') {
    return instance.get(`profile/status/${userId}`).then(response => response.data)
  },

  updateMyStatus(status: string) {
    return instance.put(`profile/status`, { status })
  },

  updateMyProfile(UpdatedProfile: UpdateProfileType) {
    return instance.put(`profile`, UpdatedProfile)
  },

  savePhoto(photo: File) {
    const formData = new FormData()
    formData.append('image', photo)
    return instance.put(`profile/photo`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
}

export const authAPI = {
  getMyData() {
    return instance.get(`auth/me`).then(response => response.data)
  },

  login(email: string, password: string, rememberMe: boolean = false) {
    return instance
      .post(`auth/login`, { email, password, rememberMe, captcha: true })
      .then(response => response.data)
  },

  logout() {
    return instance.delete(`auth/login`).then(response => response.data)
  },
}
