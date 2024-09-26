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
    const res = await axios.get("https://deploy2-production-4d5c.up.railway.app/api/product/get");

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
    const res = await axios.post("https://deploy2-production-4d5c.up.railway.app/api/product/post", body);

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
    const res = await axios.patch(`https://deploy2-production-4d5c.up.railway.app/api/product/edit/${id}`,data)

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
    const res = await axios.delete(`https://deploy2-production-4d5c.up.railway.app/api/product/${id}`);

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
