import React, { useState } from 'react'
import style from './LoginForm.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from '../../Redux/action/ActionUSer'
function LoginForm() {
  const err=useSelector(state=>state.UserReducer.errorLogin)
  console.log(err.errors)
  const[email, Setemail]=useState('')
  const[password,Setpassword]=useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handlesubmit=(e)=>{
    e.preventDefault()

    dispatch(Login({email, password}, navigate))

  }
  return (
    <form className={style.form} onSubmit={handlesubmit}>
      <label>Email:</label>
      <input onChange={(e)=>Setemail(e.target.value)}/>
      <label>Password:</label>
      <input onChange={(e)=>Setpassword(e.target.value)} />
      <button>Submit</button>
      <Link to='/'><button>Return</button></Link>
      {err.errors&&err.errors[0].msg? <p>{err.errors[0].msg}</p>: err.msg&&err.msg?<p>{err.msg}</p>: null}
    </form>
  )
}


export default LoginForm
