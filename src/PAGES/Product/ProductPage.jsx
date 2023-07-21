import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { image1, image2, image3 } from '../../ASSETS/Product/index'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

function ProductPage() {
    const {prodid} = useParams()
    const [imageset, setImageset] = useState(null)
    const [productdata, setProductdata]  = useState(null)
    const [activeimg, setActiveimg] = useState({}) //empty object


    //assumig this data is comming from backend
    const getproductdatabyid = async ()=>{ 
        let temp = {
            "Code": 200,
            "Message": "Success",
            "Data": [
                {
                    "ProductId" : 1,
                    "ProductName" : "Product 1",
                    "ProductDescription": 
                    "Product 1 Description",
                    "ProductImage": [
                        {
                            id: 1,
                            image: image1
                        },
                        {
                            id: 2,
                            image: image2
                        },
                        {
                            id: 3,
                            image: image3
                        },
                    ],
                    "ProductPrice": 100,
                    "SalesPrice": 80,
                    "ProductDiscount": 20,
                    "ProductShippingCharge":20
                }

            ]
        }
        if(temp.Code == 200){
            setImageset(temp.Data[0].ProductImage)
            setProductdata(temp.Data[0])
            setActiveimg(temp.Data[0].ProductImage[0])
        }
    }

    useEffect(()=>{
        getproductdatabyid()
    }, [])

  return (
    <div className='productpage'>
        <Navbar />

        <div className="pc1">
            <Link
                to='/'
            >
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                Go Back
            </button>
            </Link>

            <div className="c11">
                <div className="imgset">

                </div>
                <div className="imgbig">

                </div>

            </div>

            <div className="c12">
                <h1 className='head1'>{productdata.ProductName}</h1>
                <div className="c121">
                    <p className='price'>
                        ${productdata.SalesPrice}
                        <span>${productdata.ProductPrice}</span>
                    </p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ProductPage