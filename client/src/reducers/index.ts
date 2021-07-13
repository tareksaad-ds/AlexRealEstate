import { combineReducers } from "redux";
import { AuthReducer } from "./Auth";
import { ProjectR } from "./ProjectR";

export default combineReducers({
   AuthReducer: AuthReducer,
   ProjectR: ProjectR
})