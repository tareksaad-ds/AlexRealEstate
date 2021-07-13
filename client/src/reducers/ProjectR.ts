import { ActionTypes } from "../actions/types"

type Project = {
   id: number;
   name: string;
   apartment: number;
   area: number;
   price: number;
   instalments: string;
}
type State =  {
   project: Project | null;
}
const initialState = {
   projects: null,
   project:null,
   loading: true
}

type Action = {type: string , payload: any }

export const ProjectR = (state:State = initialState , action:Action) => {
   const {type , payload} = action;
   switch(type){
      case ActionTypes.GETPROJECTS:
         return{
            ...state,
            projects: payload.data,
            project:null,
            loading: false
         }
      case ActionTypes.GETAPRO:
         return{
            ...state,
            project: payload.data,
            loading: false

         }   
      default: 
      return state   
   }

}