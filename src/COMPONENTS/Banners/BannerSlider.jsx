import React from 'react'
import Slider from 'react-slick';
import './BannerSlider.css'

function BannerSlider() {
    const data = [
      {
        id: 1, 
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'All Electronic Solution',
        description: 'We deliver all electronic devices to your doorstep',
        button: 'www.google.com'
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'All Electronic Solution',
        description: 'We deliver all electronic devices to your doorstep',
        button: 'www.google.com'
      }
    ]
    const settings = {
      dots: true,
      infiniite: true,
      speed: 100,
      slidesToScroll: 1
    };

  return (
    <div className='bannerslider'>
      <Slider {...settings} className='bannerslider'>
        {
          data.map(item=>{
            return(
              <div className="imagecont" key={item.id}>
                <img src={item.image} alt='no image' />
                <div className="content">
                  <h1>{item.title}</h1>
                  <span>{item.description}</span>
                  <button>Shop More</button>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default BannerSlider