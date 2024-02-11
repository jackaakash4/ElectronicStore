import React from 'react'
import './footer2.css'
import Logo from '../../ASSETS/Logo.png'
import './Footer2.css'

function Footer2() {
  return (
    <div className='footer'>
        <div className="footerin1">
          <div className="f1">
            <img src={Logo} />
            <p>Better, Faster and Cheaper</p>
          </div>
          <div className="f2">
            <h3>About Us</h3>
            <p>About us</p>
            <p>Contect Us</p>
            <p>About team</p>
            <p>Customer Support</p>
          </div>
          <div className="f2">
            <h3>Community</h3>
            <p>Announcement</p>
            <p>Answer Center</p>
            <p>Discussion board</p>
            <p>Giving works</p>
          </div>
          <div className="f2">
          <h3>Our Information</h3>
            <p>Privacy policy update</p>
            <p>Terms and conditions</p>
            <p>Return policy</p>
            <p>Site map</p>
          </div>
          <div className="f2">
            <h3>Subscribe now</h3>
            <p>Unavailable Social Sites</p>
            <div className="inputcontainer">
            <span className="icon1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </span>

            <input type='text' placeholder='Enter your email' />

            <span className="icon2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </span>

          </div>
          </div>
        </div>
          
          

        

        <div className="footerin2">
            <h3>©Copyright 2023 Electronique, Inc. All right reserved</h3>
        </div>
    </div>
  )
}

export default Footer2