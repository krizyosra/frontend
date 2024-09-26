import { GETONEPRODUCT, GETPRODUCT } from "../const/products";

const initialState = {
    
    products : [] ,
    OneProduct:{}
}

export const ProductReducer = (state= initialState, action)=>{

   switch (action.type) {
    case GETPRODUCT:
        
       return {...state, products:action.payload}
   
       case GETONEPRODUCT:
         return {...state, OneProduct: action.payload}
    default:
      return state
   }
}