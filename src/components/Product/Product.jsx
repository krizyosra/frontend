import React from 'react'
import style from './Product.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { deleteProduct, GetOneProduct } from '../../Redux/action/ActionProduct'
import { useDispatch } from 'react-redux'

function Product({el}) {
  const dispatch= useDispatch()
  const navigate= useNavigate()
  return (
    <div className={style.card}>
      <img/>

      <div className={style.contentCard}>
      <h3>Name:{el.name}</h3>
      <p>Description:{el.Description}</p>
      <p>Price:{el.price}</p>
      <p>Date:{el.date.slice(0,10)}</p>
      <button onClick={()=>dispatch(GetOneProduct(el,navigate))}>Edit</button>
      <button onClick={()=>dispatch(deleteProduct(el._id))}>Delete</button>
      </div>


    </div>
  )
}

export default Product
