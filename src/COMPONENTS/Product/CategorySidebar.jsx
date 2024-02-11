import React from 'react'
import {image1, image2, image3, image4, image5, image6, image7} from '../../ASSETS/Product/index'
import './CategorySidebar.css'
import { useNavigate } from 'react-router-dom'

function CategorySidebar() {
  const data = [{
    id: 1, 
    categoryimage: image1,
    categoryname: 'Computer',

  },
  {
    id: 2, 
    categoryimage: image2,
    categoryname: 'Phone',

  },
  {
    id: 3, 
    categoryimage: image3,
    categoryname: 'Speaker',

  },
  {
    id: 4, 
    categoryimage: image4,
    categoryname: 'Board',

  },
  {
    id: 5, 
    categoryimage: image5,
    categoryname: 'Console',

  },
  {
    id: 6, 
    categoryimage: image6,
    categoryname: 'Watch',

  },
  {
    id: 7, 
    categoryimage: image7,
    categoryname: 'Refrigerator',

  }
  
]
let navigate = useNavigate();
const HandleSubcategory = (e) =>{
  e?navigate('/category'):navigate('/home');
}
  return (
    
      
      <div className="categorysidebar">
        <h1>Category</h1>
        {
          data.map((item)=>{
            return(
            <div className='category' onClick={HandleSubcategory}>
              <img src={item.categoryimage} alt={item.categoryname} />
              <h3>{item.categoryname}</h3>
            </div>)
          })
        }
      </div>
    
  )
}

export default CategorySidebar