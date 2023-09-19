import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/Products/action'
import ProductCard from './ProductCard'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'

const ProductList = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch()
    const products = useSelector((store)=> store.productReducer.products);
    
    let obj = {
        params:{
           category: searchParams.getAll("category"),
           gender: searchParams.getAll("gender"),
           _sort : searchParams.get("order") && "price",
           _order: searchParams.get("order")
        },
    }
    useEffect(()=> {
     dispatch(getProducts(obj));
    },[searchParams])


  return (
    <DIV>
      {
        products.length >0 && products.map((el)=> 
        <ProductCard key={el.id} {...el}/>
     ) }
    </DIV>
  )
}

const DIV = styled.div`
    display:grid;
    grid-template-columns: repeat(3,1fr);
    gap: 10px;
    
`

export default ProductList
