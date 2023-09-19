import React from 'react'
import Sidebar from '../components/Sidebar'
import ProductList from '../components/ProductList'
import styled from 'styled-components'

const HomePage = () => {
  return (
    <DIV>
      <div className='sidebar'>
      <Sidebar/>
      </div>
      <div className='product-list'>
        <ProductList/>
      </div>
      
    </DIV>
  )
}
const DIV = styled.div`
  display: flex;
  .sidebar{
    width: 15%
  }
  
  .product-list{
    width: 85%
  }
  
`

export default HomePage
