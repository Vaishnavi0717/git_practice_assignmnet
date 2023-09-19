import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const {id} = useParams();
  const products = useSelector((store)=> store.productReducer.products)
 
  return (
    <div>
      Edit Product
    </div>
  )
}

export default EditProduct;
