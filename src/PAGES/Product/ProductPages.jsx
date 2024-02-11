import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import {image1} from '../../ASSETS/Product/index'
import './ProductPage.css'

function ProductPages() {
  return (
    <div className='main'>
      <Navbar />
      <div className="image">
        
          <img src={image1} />
        
      </div>
      <div className="name">Product name: Computer</div>
      <div className="discription">
        Description <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque exercitationem quos dolore sed incidunt ea tempora sapiente voluptatem repudiandae amet eaque, suscipit nulla error ipsa laborum animi facere? Eius commodi voluptatum illo nobis aut, nostrum deleniti in non itaque eligendi provident rerum tempora tempore quis, iusto eaque molestias neque esse?
      </div>
    </div>  
    
  )
}

export default ProductPages