import React, { useState, useEffect } from 'react'
import { loadsummary} from "../../Store/Actions/ProfileAction";

import { connect } from 'react-redux'
function AbouteYou(props) {
    useEffect( () => {
        props.loadsummary();
        return null
     }, [props.SigninReducer.user])
    return (
        <>
                  <p style={{textJustify:'auto',textAlign:'justify',fontSize:'12px'}}>{props.about.AboutYou}</p>

        </>
    )
}

 
 const mapStateToProps = (state) => ({
    SigninReducer: { ...state.SigninReducer },
    ProfileReducer: { ...state.ProfileReducer }
 })
 const mapDispatchToProps = ({
    loadsummary : loadsummary
  });
export default connect(mapStateToProps, mapDispatchToProps)(AbouteYou)
