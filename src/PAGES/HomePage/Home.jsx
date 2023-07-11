import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCatagories from '../../COMPONENTS/Catagory/HomeCatagories'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Product_Sidebar from '../../COMPONENTS/Product/Product_Sidebar'
import './Home.css'


function Home() {
  return (
   <>
    <Navbar />
    <BannerSlider />
    <HomeCatagories />
    <Product_Sidebar />
   </>
  )
}

export default Home