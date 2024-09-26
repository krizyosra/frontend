import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetCurrentUser } from '../../Redux/action/ActionUSer'

function ProfilUser() {

  const dispatch=useDispatch()

  useEffect(() => {
  
    dispatch(GetCurrentUser())
  
  }, [])
  const user= useSelector(state=>state.UserReducer.currentUser)
  console.log(user)
  return (
    <div>
      <h3>{user.username}</h3>
      <h3>Email:{user.email}</h3>


    </div>
  )
}

export default ProfilUser
