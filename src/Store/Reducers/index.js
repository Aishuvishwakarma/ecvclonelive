import {  combineReducers } from "redux";
import RegisterReducer from './RegisterReducer'
import SigninReducer from './signinReducer'
import ProfileReducer from './ProfileReducer'
export default combineReducers({
    RegisterReducer,SigninReducer,ProfileReducer
});