import { ActionTypes } from "../actions/types"

type Contact = {
   id: number;
   userId: number;
   projectID: number;
   message: string;
}
type State =  {
   message: Contact | null;
}
const initialState = {
   message: null,
   loading: true
}

type Action = {type: string , payload: any }

export const ContactR = (state: State = initialState , action:Action) => {
   const {type , payload }= action;
   switch(type) {
      case ActionTypes.CONTACT: 
         return {
            message: payload,
            loading: false
          }
      default: 
       return state
   }
}