import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({id,image,name,brand,price,gender,category}) => {
  return (
    <div>
       <img src={image} alt="image"/>
       <h3>{name}</h3>
       <p>Price: {price}</p>
       <h3>Brand: {brand}</h3>
       <p>Category: {category}</p>
       <p>Gender: {gender}</p>
       <button>
         <Link to = {`/edit/${id}`}>Edit</Link>
       </button>
    </div>
  )
}

export default ProductCard
