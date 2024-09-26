import React, { useState } from "react";
import style from './Register.module.css'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Register } from "../../Redux/action/ActionUSer";

function RegisterUser() {
  const errors=useSelector(state=>state.UserReducer.errors)
  
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [username, SetUsername]= useState('')
  const [email, Setemail]= useState('')
  const [password, Setpassword]= useState('')
  const hadlesubmit=(e)=>{

    e.preventDefault()
    dispatch(Register({"username":username,"email":email,"password":password}, navigate))

  }
  return (
    <form className={style.form} onSubmit={hadlesubmit}>
      <label>UserName:</label>
      <input onChange={(e)=>SetUsername(e.target.value)}/>
      <label>Email:</label>
      <input onChange={(e)=>Setemail(e.target.value)}/>
      <label>Password:</label>
      <input onChange={(e)=>Setpassword(e.target.value)}/>
      <button type="submit">Save</button>
      <Link to='/'><button>Return</button></Link>

      {errors && errors[0]?.msg ? <p>{errors[0]?.msg}</p> : null}
    </form>
  );
}

export default RegisterUser;
