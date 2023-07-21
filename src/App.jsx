import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './PAGES/HomePage/Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './PAGES/Product/ProductPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element = {<Home />} />
    <Route path="/home" element = {<Home />} />
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
