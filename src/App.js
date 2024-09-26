import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetProduct } from "./Redux/action/ActionProduct";


import Addproduct from "./pages/AddProduct";

import EditProd from "./pages/EditProd";


function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(GetProduct())
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/addproduct" element={<Addproduct/>}/>
      <Route path="/edit/:id" element={<EditProd/>}/>
    </Routes>
  );
}

export default App;
