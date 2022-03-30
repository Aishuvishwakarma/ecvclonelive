import {   
    LOAD_EDUCATION,LOAD_EXPERIENCE,LOAD_SKILLS,LOAD_SUMMARY,LOAD_WORK_SAMPLE,PROFILE_LOADING_TRUE,PROFILE_LOADING_FALSE,DELETE_EDUCATION,
    UPDATE_SUMMARY
 } from "../ActionsTypes"; 

 import axios from "../../Utillity/axios"; 

 
 export const loadeducation = () => dispatch => {
    axios.post('/userinfo/edu/FindEducation')
        .then( success =>{
            console.log(success.data.u[0].Education)
            dispatch(sucessloadeducation(success.data.u[0].Education));
        })
        .catch( fail => {
            return console.log(fail.response.data)
        });
};
export const sucessloadeducation = (data) => ({
    type: LOAD_EDUCATION,
    payload: data
});

export const loadsummary = (data) => dispatch => {
    axios.post('/userinfo/summary/FindSummary',data)
        .then( success =>{
            return dispatch(sucessloadsummary(success.data.u[0].Summary));
        })
        .catch( fail => {
            return console.log(fail.response.data)
        });
};
export const sucessloadsummary = (data) => ({
    type: LOAD_SUMMARY,
    payload: data
});
export const loadskills = (authUser) => dispatch => {
    axios.post('/userinfo/Skill/FindSkill')
        .then( success =>{
            return dispatch(sucessloadskills(success.data.s[0].Skills));
        })
        .catch( fail => {
            return console.log(fail.response.data)
        });
};
export const sucessloadskills = (data) => ({
    type: LOAD_SKILLS,
    payload: data
});
export const   loadexperience = (authUser) => dispatch => {
    axios.post('/userinfo/experience/FindExperience')
        .then( success =>{
            return dispatch(sucessloadexp(success.data.e[0].Experience));
        })
        .catch( fail => {
            return console.log(fail.response.data)
        });
};
export const sucessloadexp = (data) => ({
    type: LOAD_EXPERIENCE,
    payload: data
});
export const loadworksample = (authUser) => dispatch => {
    axios.post('/userinfo/worksample/FindWorkSample')
        .then( success =>{
            return dispatch(sucessloadwork(success.data.w[0].Work));
        })
        .catch( fail => {
            return console.log(fail.response.data)
        });
};
export const sucessloadwork = (data) => ({
    type: LOAD_WORK_SAMPLE,
    payload: data
});
export const profileLoadingTrue = ()  => ({

    type: PROFILE_LOADING_TRUE,
    payload: true
 
});

export const profileLoadingfalse = () => ({
    type: PROFILE_LOADING_FALSE
});


export const DeleteEdu = (id) => ({
    type: DELETE_EDUCATION,
    payload: id
});


export const   updateSummary = (summary) => dispatch => {
    return {
    type: UPDATE_SUMMARY,
    payload: summary
    }
};
// export const updateSummary = (summary) => (  {
//     type: UPDATE_SUMMARY,
//     payload: summary
// });
