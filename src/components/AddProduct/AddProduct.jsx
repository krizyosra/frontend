import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/action/ActionProduct";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const Name = useRef("");
    const desc = useRef("");
    const price = useRef();
  const handlesubmit = (e) => {
    e.preventDefault();

    const productData = {
      name: Name.current.value,
      description: desc.current.value,
      price: price.current.value
  };
  console.log(productData)
  dispatch(addProduct(productData, navigate));

    
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
      <input ref={Name} />
      <label>Description</label>
      <input ref={desc} />
      <label>Price</label>
      <input type="number" ref={price} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddProduct;
