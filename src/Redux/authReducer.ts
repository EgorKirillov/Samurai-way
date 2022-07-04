//{"data":{"id":24445,"login":"EgorKirillov","email":"80296253508@mail.ru"},"messages":[],"fieldsErrors":[],"resultCode":0}

export type AuthStateType = {
   id: number
   login: string
   email: string
   isFetching: boolean
   isAuth:boolean
   
}


export type UsersReducerStateType =
  ReturnType<typeof setAuthData>
  | ReturnType<typeof setAuthIsFatchingValue>




export const setAuthData = (id:number,login:string,email:string) => ({type: "SET-AUTH-DATA" as const, id,login,email,})
export const setAuthIsFatchingValue = (isFetching: boolean ) => ({type: "SET-AUTH-ISFATCHING-VALUE" as const, isFetching,})


const initialAuthState: AuthStateType = {
   id: -1,
   login: "",
   email: "",
   isFetching: true,
   isAuth: false,
}

export const authReducer = (state: AuthStateType = initialAuthState, action: UsersReducerStateType): AuthStateType => {
   
   switch (action.type) {
      case "SET-AUTH-DATA": {
         return {
            ...state,
            id:action.id,
            login:action.login,
            email:action.email,
            isAuth:true,
         }
      }
      case "SET-AUTH-ISFATCHING-VALUE":{
         return {
            ...state,
            isFetching: action.isFetching
         }
      }
   }
   return state
}

//export default usersReducer;