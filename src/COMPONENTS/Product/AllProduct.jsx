import React from 'react'
import ProductCard from './ProductCard'
import {img1, img2, img3, img4} from '../../ASSETS/Image/index'
import {image1, image2, image3, image4, image5, image6, image7} from '../../ASSETS/Product/index'
import './AllProduct.css'

function AllProduct() {
  const products = [{
    id: 1,
    productimage: image1,
    productname: 'Computer',
    productprice: 100,
    counttype: '1 each',
    discountpercent: 10
  },
  {
    id: 2,
    productimage: image2,
    productname: 'Smart Phone',
    productprice: 200,
    counttype: '1 each',
    discountpercent: 12
  },
  {
    id: 3,
    productimage: image3,
    productname: 'Speaker',
    productprice: 300,
    counttype: '1 each',
    discountpercent: 19
  },
  {
    id: 4,
    productimage: image4,
    productname: 'Board',
    productprice: 400,
    counttype: '1 each',
    discountpercent: 14
  },
  {
    id: 5,
    productimage: image5,
    productname: 'Console',
    productprice: 100,
    counttype: '1 each',
    discountpercent: 10
  },
  {
    id: 6,
    productimage: image6,
    productname: 'Watch',
    productprice: 200,
    counttype: '1 each',
    discountpercent: 12
  },
  {
    id: 7,
    productimage: image7,
    productname: 'Refrigerator',
    productprice: 300,
    counttype: '1 each',
    discountpercent: 19
  },
  {
    id: 8,
    productimage: image4,
    productname: 'Product 4',
    productprice: 400,
    counttype: '1 each',
    discountpercent: 14
  },{
    id: 9,
    productimage: image1,
    productname: 'Product 1',
    productprice: 100,
    counttype: '1 each',
    discountpercent: 10
  },
  {
    id: 10,
    productimage: image2,
    productname: 'Product 2',
    productprice: 200,
    counttype: '1 each',
    discountpercent: 12
  },
  {
    id: 11,
    productimage: image3,
    productname: 'Product 3',
    productprice: 300,
    counttype: '1 each',
    discountpercent: 19
  },
  {
    id: 12,
    productimage: image4,
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