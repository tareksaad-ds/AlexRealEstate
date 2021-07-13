import axios from "axios";
import { ActionTypes } from "./types";
import { Dispatch } from 'redux';
import { toast } from "react-toastify";


toast.configure();

export const contactUsAction = ( id:any , message:any ) => async (dispatch : Dispatch) => {
   
   try {
      const token = localStorage.getItem("token");
      const res = await axios.post(`http://localhost:7000/api/projects/${id}`, {request :message} , {
         headers: {
            Authorization: `Bearer ${token}`
         }
      })
      dispatch({
         type: ActionTypes.CONTACT,
         payload: res.data
         })
   toast.success(" Your message has been sent", {
            position: toast.POSITION.BOTTOM_RIGHT,
   });
   } catch (err) {
      toast.warning(err, {
         position: toast.POSITION.BOTTOM_RIGHT,
       });
   }
  
}