import React from 'react'
import ProductCard from './ProductCard'
import {img1, img2, img3, img4} from '../../ASSETS/Image/index'
import './AllProduct.css'

function AllProduct() {
  const products = [{
    id: 1,
    productimage: img1,
    productname: 'Product 1',
    productprice: 100,
    counttype: '1 each',
    discountpercent: 10
  },
  {
    id: 2,
    productimage: img2,
    productname: 'Product 2',
    productprice: 200,
    counttype: '1 each',
    discountpercent: 12
  },
  {
    id: 3,
    productimage: img3,
    productname: 'Product 3',
    productprice: 300,
    counttype: '1 each',
    discountpercent: 19
  },
  {
    id: 4,
    productimage: img4,
    productname: 'Product 4',
    productprice: 400,
    counttype: '1 each',
    discountpercent: 14
  },
  {
    id: 5,
    productimage: img1,
    productname: 'Product 1',
    productprice: 100,
    counttype: '1 each',
    discountpercent: 10
  },
  {
    id: 6,
    productimage: img2,
    productname: 'Product 2',
    productprice: 200,
    counttype: '1 each',
    discountpercent: 12
  },
  {
    id: 7,
    productimage: img3,
    productname: 'Product 3',
    productprice: 300,
    counttype: '1 each',
    discountpercent: 19
  },
  {
    id: 8,
    productimage: img4,
    productname: 'Product 4',
    productprice: 400,
    counttype: '1 each',
    discountpercent: 14
  },{
    id: 9,
    productimage: img1,
    productname: 'Product 1',
    productprice: 100,
    counttype: '1 each',
    discountpercent: 10
  },
  {
    id: 10,
    productimage: img2,
    productname: 'Product 2',
    productprice: 200,
    counttype: '1 each',
    discountpercent: 12
  },
  {
    id: 11,
    productimage: img3,
    productname: 'Product 3',
    productprice: 300,
    counttype: '1 each',
    discountpercent: 19
  },
  {
    id: 12,
    productimage: img4,
    productname: 'Product 4',
    productprice: 400,
    counttype: '1 each',
    discountpercent: 14
  }]
  return (
    <div className='allproducts'>
      <h1>All Products</h1>
      <div className="products">
        {
          products.map((item)=>{
            return(
              <ProductCard data={item} key={item.id}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllProduct