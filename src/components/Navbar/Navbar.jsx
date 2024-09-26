import React from "react";
import style from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {

  const Navigate= useNavigate()

  const logout=()=>{

    document.cookie="token= "
   
    if (window.location.pathname!=='/') {
      Navigate('/')
      window.location.reload()
    }
  }
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
      <li>
          <Link to="/">
            <button className={style.btn}>Home</button>
          </Link>
        </li>
        <li>
          <Link to="login">
            <button className={style.btn}>Login</button>
          </Link>
        </li>
        <li>
          <Link to="register">
            <button className={style.btn}>Register</button>
          </Link>
        </li>
        <li>
          <Link to="profil">
            <button className={style.btn}>Profil</button>
          </Link>
        </li>

        <li>
        
            <button className={style.btn} onClick={logout}>Logout</button>
       
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
