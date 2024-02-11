import React from 'react';
import './InvalidCategory.css';
import Navbar from '../Navbar/Navbar';

function InvalidCategory() {
  return (
    <>
    <Navbar />
    <div className='errorMessage'><b>Under Production</b></div>
    </>
  )
}

export default InvalidCategory