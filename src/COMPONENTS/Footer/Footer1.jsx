import React from 'react'
import footer from '../../ASSETS/footer.jpg'
import './footer1.css'

function Footer1() {
  return (
    <div className='footer1'>
        <div className="left">
        <img src={footer} />
            
        </div>
        <div className="right">
            <h1>
                All kind of electronic devices at your doorstep
            </h1>
            <p>
                We deliver all kind of electronic devices like computer, television, smart phone, refrigerator, camera, speaker and many other electronic devices to your doorstep
            </p>
        </div>
        
    </div>
  )
}

export default Footer1