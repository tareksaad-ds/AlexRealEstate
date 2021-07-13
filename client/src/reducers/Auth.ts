import { ActionTypes } from "../actions/types"

type User = {
   id: number;
   name: string;
   email: string;
   password: string;
}

type State =  {
   user: User | null;
}

const initialState = {
   user: null,
   loading: true
}

type Action = {type: string , payload: {token: string}}

export const AuthReducer = (state:State = initialState , action:Action) => {
   const {type , payload} = action;
   switch (type) {
      case ActionTypes.SignUp:
         return {
            ...state,
            user: payload,
            loading: false
         }
      case ActionTypes.LOGIN:
         localStorage.setItem("token" , payload.token)
         return {
            ...state,
            user: payload,
            loading: false
         }
      case ActionTypes.LOGOUT:
         localStorage.removeItem("token")
         return {
            ...state,
            loading: false,
         }      
      default:
         return state;
   }
}

