export type LocationType = {
   country: string
   city: string
}
export type PhotosType = {
   small: string
   large: string
}

export type UserType = {
   id: number
   name: string
   photos: PhotosType
   status: string
   followed: boolean
   
//   location: LocationType,
}

export type UserPageStateType = {
   users: Array<UserType>
   totalUsersCount: number
   totalPagesCount: number
   countUsersPerPage: number
   currentUsersPage: number
   isFatching: boolean
   
}


export type UsersReducerStateType =
  ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof changeCurrentPage>
  | ReturnType<typeof changeTotalUsersCount>
  | ReturnType<typeof changeTotalPagesCount>
  | ReturnType<typeof getUsers>
  | ReturnType<typeof setIsFatchingValue>


export const follow = (id: number) => ({type: "CHANGE-ON-FOLLOW", id} as const)
export const unfollow = (id: number) => ({type: "CHANGE-ON-UNFOLLOW", id} as const)
export const changeCurrentPage = (currentUsersPage: number) => ({
   type: "CHANGE-CURRENT-PAGE",
   currentUsersPage
} as const)
export const changeTotalUsersCount = (totalUsersCount: number) => ({
   type: "CHANGE-TOTAL-USERS-COUNT",
   totalUsersCount
} as const)

export const changeTotalPagesCount=(totalPagesCount:number)=>({type: "CHANGE-TOTAL-PAGES-COUNT" as const, totalPagesCount,})
export const getUsers = (users: Array<UserType> ) => ({type: "SET-USERS" as const, users,})
export const setIsFatchingValue = (isFatching: boolean ) => ({type: "SET-ISFATCHING-VALUE" as const, isFatching,})


const initialStateUsersPage: UserPageStateType = {
   users: [] as Array<UserType>,
   totalUsersCount: 20,
   totalPagesCount: 5,
   countUsersPerPage: 50,
   currentUsersPage: 2,
   isFatching: false,
}

export const usersReducer = (state: UserPageStateType = initialStateUsersPage, action: UsersReducerStateType): UserPageStateType => {
   
   switch (action.type) {
      case "CHANGE-ON-FOLLOW": {
         return {
            ...state, users: state.users.map(u => {
               return (u.id === action.id)
                 ? {...u, followed: true}
                 : u
            })
         }
         
      }
      case "CHANGE-ON-UNFOLLOW": {
         return {
            ...state, users: state.users.map(u => {
               return (u.id === action.id)
                 ? {...u, followed: false}
                 : u
            })
         }
         
      }
      case "SET-USERS": {
         return {
            ...state,
            users: [...action.users],
            
         }
         
      }
      case "CHANGE-CURRENT-PAGE": {
         return {
            ...state,
            currentUsersPage: action.currentUsersPage,
         }
      }
      case "CHANGE-TOTAL-USERS-COUNT": {
         return {
            ...state,
            totalUsersCount: action.totalUsersCount,
         }
      }
      case "CHANGE-TOTAL-PAGES-COUNT": {
         return {
            ...state,
            totalPagesCount: action.totalPagesCount,
         }
      }
      case "SET-ISFATCHING-VALUE":{
         return {
            ...state,
            isFatching: action.isFatching
         }
      }
   }
   return state
}

//export default usersReducer;