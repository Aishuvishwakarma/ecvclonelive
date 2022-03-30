import { 
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    LOGOUT,
    LOAD_USER,
    LOGIN_LOADING_TRUE,
    UPLOAD_IMAGE,
    LOAD_EDUCATION, LOAD_EXPERIENCE, 
    LOAD_SKILLS, LOAD_SUMMARY, 
    LOAD_WORK_SAMPLE, PROFILE_LOADING_TRUE,
    PROFILE_LOADING_FALSE,DELETE_EDUCATION
,UPDATE_SUMMARY,ACTIVE_HANDLER
    
 } from '../ActionsTypes';
 import jwt_decode from 'jwt-decode';
import { v4} from 'uuid'
 import axios from "../../Utillity/axios";
 const initialState = {
    isAuthenticated: false,
    token: null, 
    user:  null,
    errors: null,
    loading: false,
    skill: null,
    experience: null,
    education: null,
    worksample: null,
    summarry: null,
    active : 0,
    searchSkills: [
        {title :"UI/UX DESIGNER",s_id: v4()},
        {title :"NODE.JS",s_id: v4()},
        {title :"REACT",s_id: v4()},
        {title :"ANGULAR",s_id: v4()},
        {title :"AUTOCAD",s_id: v4()},
        {title :"FIGMA",s_id: v4()},
        {title :"PHOTOSHOP",s_id: v4()},
        {title :"ADOBE XD",s_id: v4()},
        {title :"HTML",s_id: v4()},
        {title :"CSS",s_id: v4()},
        {title :"BOOTSTRAP",s_id: v4()},
        {title :"STATE PRO",s_id: v4()},
        {title :"3DSMAX",s_id: v4()},
        {title :"RAVIT",s_id: v4()},
        {title :"MS EXCEL",s_id: v4()},
        {title :"MS WORD",s_id: v4()}
    ]
 };

const signinReducer = (state=initialState, {type, payload}) => { 
     switch (type) {
        case LOGIN_LOADING_TRUE:
            return {
                ...state,
                loading: true,
            };
        case LOAD_USER:
           
             return {
                 ...state,
                 token: payload,
                 isAuthenticated: true,
                 ...jwt_decode(payload),
                 loading: false,
                 errors: null,
                 
             };
             case ACTIVE_HANDLER:
                 
                return {
                    ...state,
                    active:payload,      
                    loading: true,
                    isAuthenticated: true,
                    token: payload,
                    ...jwt_decode(payload),
                    errors: null,
                };    
         case SIGNIN_SUCCESS:
         console.log(payload)
             localStorage.removeItem('ecv_token');
             localStorage.setItem('ecv_token', payload.token);
            //  axios.defaults.headers.common = localStorage.getItem('ecv_token');
             axios.defaults.headers.common["auth-token"] = localStorage.ecv_token;
            
             return {
                 ...state,
                 ...payload,
                 isAuthenticated: true,
                 ...jwt_decode(payload.token),
                 loading: false,
                 errors: null
                 
             };
            case SIGNIN_FAIL:
             return {
                 ...state,
                 isAuthenticated: false,
                 errors: payload,
                 loading: false,
                 token: null,
                 user:null
             };
             case LOGOUT:    
             localStorage.removeItem('ecv_token');
             delete axios.defaults.headers.common['auth-token'];
             return {
                 isAuthenticated: false,
                 errors: null,
                 loading: false,
                 token: null,
                 user:null
             };
         
             case PROFILE_LOADING_TRUE:
                return {
                    ...state,
                    loading: true,
                    isAuthenticated: true,
                };
                case PROFILE_LOADING_FALSE:
                    return {
                        ...state,
                        loading: false,
                        isAuthenticated: false,
                        token: null,
                        user: null,
                        errors: null,
                        loading: false,
                        skill: null,
                        experience: null,
                        education: null,
                        worksample: null,
                        summarry: null
                    };
            case LOAD_EDUCATION:
                if(state.education !== null){
                    state.education.length = 0 || null
                }
                return {
                    ...state,
                    loading: true,
                    isAuthenticated: true,
                    education : state.user ? state.user.Education : payload,
    
                };
            case LOAD_EXPERIENCE:
    
                return {
                    ...state,
                    loading: true,
                    isAuthenticated: true,
                    experience :  state.user ? state.user.Experience : payload,
    
                };
            case LOAD_SUMMARY:
                // if(state.summary && state.summary.length > 0){
                //     state.summarry = null
                // }
                return {
                    ...state,
                    loading: true,
                    isAuthenticated: true,
                    summarry :   state.user ? state.user.Summary : payload,
    
                };
            case LOAD_SKILLS:
    
                return {
                    ...state,
                    skill : state.user ? state.user.Skills : payload,
                    loading: true,
                    isAuthenticated: true,
    
                };
           case LOAD_WORK_SAMPLE:
                   
                    return {
                        ...state,
                        loading: true,
                        isAuthenticated: true,
                        worksample :  state.user ? state.user.Work : payload,
        
                    };
           case DELETE_EDUCATION:
            let edu =   state.education.find(e => e.id === payload.id )
            console.log(edu)
                return {
                    ...state,
                    loading: true,
                    isAuthenticated: true,
                    
                };
            case UPDATE_SUMMARY:
                state.summarry.length = 0
                state.summarry.push(payload)
                        return {
                            ...state,
                            loading: true,
                            isAuthenticated: true,
                            emptysummarry : [...payload]
                        };
                  
             default:
             return state;
     }
 };

 export  default signinReducer;