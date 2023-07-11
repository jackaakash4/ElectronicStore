import React from 'react'
import {img1, img2, img3, img4} from '../../ASSETS/Image/index'
import './CategorySidebar.css'

function CategorySidebar() {
  const date = [{
    id: 1, 
    categoryimage: img1,
    categoryname: 'Computer',

  },
  {
    id: 2, 
    categoryimage: img2,
    categoryname: 'Phone',

  },
  {
    id: 3, 
    categoryimage: img3,
    categoryname: 'Speaker',

  },
  {
    id: 4, 
    categoryimage: img4,
    categoryname: 'Board',

  },
  {
    id: 5, 
    categoryimage: img1,
    categoryname: 'Computer',

  },
  {
    id: 6, 
    categoryimage: img2,
    categoryname: 'Phone',

  },
  {
    id: 7, 
    categoryimage: img3,
    categoryname: 'Speaker',

  },
  {
    id: 8, 
    categoryimage: img4,
    categoryname: 'Board',

  }
]
  return (
      <div className="categorysidebar">
        {
          date.map((item)=>{
            return(
            <div className='category'>
              <img src={item.categoryimage} alt={item.categoryname} />
              <h3>{item.categoryname}</h3>
            </div>)
          })
        }
      </div>
  )
}

export default CategorySidebar