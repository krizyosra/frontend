import axios from "axios";
import {
  GETCURRENT,
  GETCURRENTFAILED,
  LOGIN,
  LOGINFAILED,
  REGISTER,
  REGISTERFAILED,
} from "../const/User";

export const Register = (body, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("https://deploy2-production-4d5c.up.railway.app/api/user/register", body);

    dispatch({
      type: REGISTER,
      payload: res.data,
    });
    console.log(res.data);
    navigate("/login");
  } catch (error) {
    dispatch({
      type: REGISTERFAILED,
      payload: error.response.data.errors,
    });
    console.log("test");
    console.log(error.response.data.errors);
  }
};

export const Login = (body, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("https://deploy2-production-4d5c.up.railway.app/api/user/login", body,{ 
      withCredentials: true 
   });

   
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
    navigate("/profil");
  } catch (error) {
    dispatch({
      type: LOGINFAILED,
      payload: error.response.data,
    });

    console.log(error.response.data);
  }
};

export const GetCurrentUser = () => async (dispatch) => {

   const token=document.cookie.split('=')[1]
  
  try {
    const res = await axios.get("https://deploy2-production-4d5c.up.railway.app/api/user/", {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: GETCURRENT,
      payload: res.data,
    });
    console.log(res.data)

  } catch (error) {
    dispatch({ type: GETCURRENTFAILED, payload: error })
  }
};
