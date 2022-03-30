import {
    LOAD_EDUCATION, LOAD_EXPERIENCE, LOAD_SKILLS, LOAD_SUMMARY, LOAD_WORK_SAMPLE, PROFILE_LOADING_TRUE,PROFILE_LOADING_FALSE,DELETE_EDUCATION
,UPDATE_SUMMARY
} from '../ActionsTypes';

import axios from "../../Utillity/axios";
const initialState = {
    isAuthenticated: false,
    token: null,
    user: null,
    errors: null,
    loading: false,
    skill: null,
    experience: null,
    education: null,
    worksample: null,
    summarry: null,
    emptysummarry : []

};

const ProfileReducer = (state = initialState, { type, payload }) => { 
    switch (type) {
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
            return {
                ...state,
                loading: true,
                isAuthenticated: true,
                education : payload,

            };
        case LOAD_EXPERIENCE:

            return {
                ...state,
                loading: true,
                isAuthenticated: true,
                experience : payload,

            };
        case LOAD_SUMMARY:
            // if(state.summary && state.summary.length > 0){
            //     state.summarry = null
            // }
            return {
                ...state,
                loading: true,
                isAuthenticated: true,
                summarry : payload,

            };
        case LOAD_SKILLS:

            return {
                ...state,
                skill :payload,
                loading: true,
                isAuthenticated: true,

            };
       case LOAD_WORK_SAMPLE:
               
                return {
                    ...state,
                    loading: true,
                    isAuthenticated: true,
                    worksample : payload,
    
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

export default ProfileReducer;