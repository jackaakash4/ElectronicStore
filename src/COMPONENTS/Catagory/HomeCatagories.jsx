import React from 'react'
import './HomeCatagories.css'
import {img1, img2, img3, img4} from '../../ASSETS/Image/index'



function HomeCatagories() {
  return (
        <div className="homecatagories">
            <div className="container">
                <img src={img1} alt='img1' />
                <div className="content">
                    <h1>Computer</h1>
                    <span>Shop computer now</span>
                </div>
            </div>
            <div className="container">
                <img src={img2} alt='img2' />
                <div className="content">
                    <h1>Phone</h1>
                    <span>Shop Smart Phone now</span>
                </div>
            </div>
            <div className="container">
                <img src={img3} alt='img3' />
                <div className="content">
                    <h1>Speaker</h1>
                    <span>Shop Speaker now</span>
                </div>
            </div>
            <div className="container">
                <img src={img4} alt='img4' />
                <div className="content">
                    <h1>Board</h1>
                    <span>Shop Board now</span>
                </div>
            </div>
        </div>
    )
}

export default HomeCatagories