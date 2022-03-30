import React, { useState, useEffect } from 'react'
import axios from '../../Utillity/axios'
import Dilogcss from './Dilog.Module.css' 
import { ToastContainer, toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { loadUser ,successSignin,loadskills} from "../../Store/Actions/AuthActions";
import { v4} from 'uuid'
import PropTypes from 'prop-types';
function SkillBx(props) {
    const [state, setstate] = useState({ SkillTitle: '',Skills:[] })

    const items = [
        {name :"UI/UX DESIGNER",s_id: v4()},
        {name :"NODE.JS",id: v4()},
        {name :"REACT",id: v4()},
        {name :"ANGULAR",id: v4()},
        {name :"AUTOCAD",id: v4()},
        {name :"FIGMA",id: v4()},
        {name :"PHOTOSHOP",id: v4()},
        {name :"ADOBE XD",id: v4()},
        {name :"HTML",id: v4()},
        {name :"CSS",id: v4()},
        {name :"BOOTSTRAP",id: v4()},
        {name :"STATE PRO",id: v4()},
        {name :"3DSMAX",id: v4()},
        {name :"RAVIT",id: v4()},
        {name :"MS EXCEL",id: v4()},
        {name :"MS WORD",id: v4()}
      ]
useEffect(() => {
    setstate({
        Skills: props.SigninReducer.searchSkills
    })
    return null
}, [props.SigninReducer.user])
console.log(props.SigninReducer)

const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
    
    
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
    setstate(prevState => ({ ...prevState, SkillTitle: item.name }))
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return item;
   // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  }
    const onSubmitForm = (e) => {
        e.preventDefault();
        const obj = {}
        obj.SkillTitle = state.SkillTitle
        console.log(obj)
        if (obj.SkillTitle) {
            axios.post('/userinfo/Skill/AddSkill', obj)
                .then(data => {
                    if(props.history.location.pathname === '/EditResume/personalinfo'){
                        if(localStorage.active_prfl){
                            localStorage.removeItem('active_prfl')
                            localStorage.setItem('active_prfl',)
                        }else{
                            localStorage.setItem('active_prfl',1)
                        }
                       
                    }
                    props.successSignin(data.data)
                    props.loadskills();   
                    RedirectHandler();
                    
                })
                .catch(err => console.log(err))
        }else  return   notify();
    }
    const RedirectHandler = ()=>{
        document.querySelector(".close").click();
    }
    const onFormChange = (e) => {
        // educationEditlist
        e.persist();
        setstate(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const notify = () => {
        if(!state.SkillTitle){
            toast.error("SkillTitle Feild must have not Empty",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
       
       
        }
    return (
        <>
            
 { props.history.location.pathname === '/EditResume/personalinfo' ?<><br/>
             <button type="button" style={{ border: 'none',marginTop:'20px' }} data-toggle="modal" data-target="#SkillBx">
                <b style={{ fontSize: '15px', color: '#DA2461', display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <i style={{ fontSize: '12px', marginRight: '10px' }} class='fas fa-plus-circle'></i>Add Your Skills
                </b>
                <ToastContainer  />
            </button>
             </> :<>
             <button type="button" style={{ border: 'none' }} data-toggle="modal" data-target="#SkillBx">
                <i style={{ color: '#DA2461', fontSize: '20px' }} class="fas fa-pen"></i>
                <ToastContainer />
            </button>

             </>}

           
            <div className="modal fade" id="SkillBx" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Add Skill</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={onSubmitForm} >
                        <div className="modal-body">
                            <section className="pb-5">
                               
                                    <div className="container">
                                        <p>Summary</p>
                                        <div className="row">
                                            <div className="col-12 col-md-12">
                                            <ReactSearchAutocomplete
                                                items={items}
                                                onSearch={handleOnSearch}
                                                onHover={handleOnHover}
                                                onSelect={handleOnSelect}
                                                onFocus={handleOnFocus}
                                                autoFocus
                                                formatResult={formatResult}
                                            />
                                            <input style={{ height: '50px', marginBottom: '8px'}}
                                            className={Dilogcss.DilogInput} 
                                             type="text" name='SkillTitle' onChange={onFormChange}
                                              placeholder="e.g. Ui/Ux Designer" />
                                               
                                            </div>
                                        </div>
                                    </div>
                              
                            </section>

                        </div>
                      
                        <div className="modal-footer">
                            <button type="submit" className={Dilogcss.btn}>Save changes</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

SkillBx.propTypes = {
    SigninReducer: PropTypes.object.isRequired,
    ProfileReducer: PropTypes.object.isRequired,

 }

 const mapDispatchToProps = ({
    loadskills : loadskills,
    loadUser: loadUser,
    successSignin:successSignin,
 });

 const mapStateToProps = (state) => ({
    SigninReducer: { ...state.SigninReducer },
    ProfileReducer: { ...state.ProfileReducer }
 })
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SkillBx));
