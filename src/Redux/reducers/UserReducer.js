import { GETCURRENT, LOGINFAILED, REGISTER, REGISTERFAILED } from "../const/User";

const initialState = {
    
    currentUser : {} ,//objet
    errors:[],
    errorLogin:{}
}

export const UserReducer = (state= initialState, action)=>{

  switch (action.type) {
    case REGISTER:
        return {...state, currentUser:action.payload}
        
    case REGISTERFAILED:
      return {...state, errors: action.payload }
  
    case LOGINFAILED:
      return {...state, errorLogin:action.payload}

    case GETCURRENT:
      return {...state,currentUser:action.payload }

   
    default:
        return state
  } 
}