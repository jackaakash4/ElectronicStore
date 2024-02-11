import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './PAGES/HomePage/Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './PAGES/Product/ProductPages';
import Login from './COMPONENTS/Login/Login';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element = {<Login isLoggedIn={isLoggedIn} />} />
    <Route path="/home" element = {<Home />} />
    <Route path="/login" element = {<Login />} />
    <Route path='/product/:prodid' 
      element = {<ProductPage />}
    />
    <Route path="*" element={
      <div>
        <h1>404 NOT FOUND</h1>
      </div>
    } 
    />
    </Routes>
    </BrowserRouter>
  )
}

export default App
