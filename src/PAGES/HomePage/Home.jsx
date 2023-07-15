import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCatagories from '../../COMPONENTS/Catagory/HomeCatagories'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
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
    <Footer1 />
    <Footer2 />
   </>
  )
}

export default Home