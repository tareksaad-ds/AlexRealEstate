import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';


export const getProjects = () => async (dispatch: Dispatch) => {
   const token = localStorage.getItem("token");
   const res = await axios.get("http://localhost:7000/api/projects", {
      headers: {
         Authorization: `Bearer ${token}`
      }
   })
   dispatch({
      type: ActionTypes.GETPROJECTS,
      payload: res.data
   })
}

export const getProject = (id:any) => async (dispatch:Dispatch ) => {
   const token = localStorage.getItem("token");
   const res = await axios.get(`http://localhost:7000/api/projects/${id}`, {
      headers: {
         Authorization: `Bearer ${token}`
      }
   })
   dispatch({
      type: ActionTypes.GETAPRO,
      payload: res.data
   })
}