import React from 'react'
import CatagorySidebar from './CategorySidebar'
import AllProduct from './AllProduct'
import './Product_Sidebar.css'

function Product_Sidebar() {
  return (
    <div className='product_sidebar'>
        <CatagorySidebar />
        <AllProduct />
    </div>
  )
}

export default Product_Sidebar