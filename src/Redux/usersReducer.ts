

export type LocationType = {
   country: string,
   city: string,
}
export type UserType = {
   userid: number,
   avatarLink: string,
   followed: boolean,
   fullUserName: string,
   status: string,
   location: LocationType,
}

export type UserPageStateType = {
   users: Array<UserType>
}


export type UsersReducerStateType =
  ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>


export const followAC = (userid: number) => ({type: "CHANGE-ON-FOLLOW", userid: userid,} as const)
export const unfollowAC = (userid: number) => ({type: "CHANGE-ON-UNFOLLOW", userid: userid,} as const)
//export const setUsersAC = (users:Array<UserType>) => ({type: "SET-USERS" as const, users: users,})
export const setUsersAC = () => ({type: "SET-USERS" as const, })

const fakeUsers:Array<UserType> = [
  {
   userid: 1,
   avatarLink: "http://ling.ulstu.ru/linguistics/resourses/student_works/nazimova/people/5.jpg",
   followed: true,
   fullUserName: 'Egor K.V.',
   status: "I am dandelion",
   location: {country: "Belarus", city: "Minsk"}
},
   {
      userid: 2,
      avatarLink: "http://ling.ulstu.ru/linguistics/resourses/student_works/nazimova/people/6.jpg",
      followed: false,
      fullUserName: 'Den S.G.',
      status: "I am dumn",
      location: {country: "Somali", city: "Dhahar"}
   },
   {
      userid: 3,
      avatarLink: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/5c020550-2e0f-495a-a2d6-fd6b70da3567/1920x",
      followed: false,
      fullUserName: 'Yang I.G.',
      status: "sun is great",
      location: {country: "China", city: "China"}
   },
   {
      userid: 4,
      avatarLink: "https://izsambo.by/upload/iblock/485/4853c6fcb09f50fa795a3cab14f25330.jpg",
      followed: false,
      fullUserName: 'Mal G.',
      status: "HollyWood",
      location: {country: "Use", city: "NY"}
   },

]
const initialStateUsersPage: UserPageStateType = {
   users: [...fakeUsers],
}

export const usersReducer = (state: UserPageStateType = initialStateUsersPage, action: UsersReducerStateType): UserPageStateType => {
   
   
   switch (action.type) {
      case "CHANGE-ON-FOLLOW": {
         return {...state, users: state.users.map(u=>{
            return (u.userid === action.userid)
              ? {...u, followed:true}
              :u})}
         
      }
      case "CHANGE-ON-UNFOLLOW": {
         return {...state, users: state.users.map(u=>{
               return (u.userid === action.userid)
                 ? {...u, followed:false}
                 :u})}
         
      }
      case "SET-USERS": {
         return {...state, users: [...state.users,...fakeUsers]}
         
      }
   }
   return state
}

//export default usersReducer;