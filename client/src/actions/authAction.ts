import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import { toast } from "react-toastify";

toast.configure();

export const Register = (user: any) => async (dispatch: Dispatch) =>{
   try {
      const res = await axios.post("http://localhost:7000/api/users" , user);
      dispatch({
         type: ActionTypes.SignUp,
         payload: res.data
      })
      toast.success("Successfully Sign up", {
         position: toast.POSITION.BOTTOM_RIGHT,
       });
   } catch (err) {
      console.log(err)
      toast.warning(err , {
         position: toast.POSITION.BOTTOM_RIGHT,
       });
   }
}


export const SignIn = (user: any , history: any) => async (dispatch: Dispatch) => {
   try {
      const res = await axios.post("http://localhost:7000/api/login" , user);
      dispatch({
         type: ActionTypes.LOGIN,
         payload: res.data
      })
      toast.success("Successfully LogIn", {
         position: toast.POSITION.BOTTOM_RIGHT,
       });
      window.setTimeout(() => {
         history.push("/landing");
       }, 3000);
      
   } catch (err) {
      console.log(err)
      toast.warning(err , { position: toast.POSITION.BOTTOM_RIGHT})
   }
}

export const Logout = () => (dispatch: Dispatch) => {
   dispatch({ type: ActionTypes.LOGOUT})
}