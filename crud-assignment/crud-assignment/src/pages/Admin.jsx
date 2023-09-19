import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postProduct } from "../redux/Products/action";

const initialState = {
  image: "",
  price: 0,
  brand: "",
  name: "",
  category: "",
  gender: "",
};
const Admin = () => {
  const [product, setProduct] = useState(initialState);
   const dispatch = useDispatch()


  const handleChange = (e) => {
    const { value, name } = e.target;
    //  console.log(name , value);
    setProduct((prev) => {
      return { ...prev, [name]: name==="price" ? +value : value };
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(product)
    dispatch(postProduct(product))
  };

  return (
    <DIV>
      <h1>Add Products</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Image"
          name="image"
          value={product.image}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Brand"
          name="brand"
          value={product.brand}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
        <select
          name="category"
          onChange={handleChange}
          value={product.category}
        >
          <option value="">Select Category</option>
          <option value="top-wear">Top Wear</option>
          <option value="bottom-wear">Bottom Wear</option>
          <option value="foot-wear">Shoes</option>
        </select>
        <select name="gender" onChange={handleChange} value={product.gender}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Women</option>
          <option value="kids">Kids</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: auto;
  border: 1px solid gray;
  padding: 20px;
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  input {
    height: 40px;
    font-size: larger;
    width: 90%;
  }
  select {
    height: 40px;
    font-size: larger;
    width: 90%;
  }

  button {
    width: 50%;
    height: 35px;
    cursor: pointer;
    border: none;
  }
`;
export default Admin;
