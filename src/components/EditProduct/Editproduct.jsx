import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editProduct } from '../../Redux/action/ActionProduct';

function Editproduct() {

    const data = useSelector((state) => state.ProductReducer.OneProduct);
    
    const Name = useRef("");
    const desc = useRef("");
    const price = useRef();
    const dispatch= useDispatch()
    const navigate=useNavigate()
    const handlesubmit = (e) => {
      e.preventDefault();
  
      const productData = {
        name: Name.current.value,
        description: desc.current.value,
        price: price.current.value,
      };
      console.log(productData);

      dispatch(editProduct(data._id, productData, navigate))
     // dispatch(addProduct(productData, navigate));
  
      //const data = new FormData();
      // data.append("name", Name.current.value);
      //data.append("description", desc.current.value);
      //data.append("price", price.current.value);
  
      // console.log(Name);
      // dispatch(addProduct(data));
    };
  
    return (
      <form onSubmit={handlesubmit}>
        <label>Name</label>
        <input ref={Name}  placeholder={data.name}/>
        <label>Description</label>
        <input ref={desc} placeholder={data.Description}/>
        <label>Price</label>
        <input type="number" ref={price} placeholder={data.price}/>
  
        <button type="submit">Submit</button>
      </form>
    );
  }
 


export default Editproduct
