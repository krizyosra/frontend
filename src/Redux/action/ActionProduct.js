import axios from "axios";
import {
  ADDPRODUCT,
  DELETEPRODUCT,
  EDITPRODUCT,
  GETONEPRODUCT,
  GETPRODUCT,
} from "../const/products";

export const GetProduct = () => async (dispatch) => {
  try {
    const res = await axios.get("https://backendd-production.up.railway.app/api/product/get", {
      withCredentials: true
    });

    console.log(res.data)
    dispatch({
      type: GETPRODUCT,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = (body, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("https://backendd-production.up.railway.app/api/product/post", body, {
      withCredentials: true
    });

    dispatch({
      type: ADDPRODUCT,
      payload: res,
    });
    dispatch(GetProduct())
    navigate('/')
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = (id,data, navigate) => async (dispatch) => {
  try {
    const res = await axios.patch(`https://backendd-production.up.railway.app/api/product/edit/${id}`,data, {
      withCredentials: true
    })

    dispatch({
      type: EDITPRODUCT,
      payload: res,
    });
    dispatch(GetProduct())
    navigate('/')
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id, navigate) => async (dispatch) => {
  try {
    const res = await axios.delete(`https://backendd-production.up.railway.app/api/product/${id}`, {
      withCredentials: true
    });

    dispatch({
      type: DELETEPRODUCT,
      payload: res,
    });
    dispatch(GetProduct())
    navigate('/')
  } catch (error) {
    console.log(error);
  }
};

export const GetOneProduct=(data, navigate)=>{
  navigate(`/edit/${data._id}`)
  return {
    type: GETONEPRODUCT,
    payload: data
  }
}
