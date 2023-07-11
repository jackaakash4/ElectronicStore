import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCatagories from '../../COMPONENTS/Catagory/HomeCatagories'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './Home.css'


function Home() {
  return (
   <>
    <Navbar />
    <BannerSlider />
    <HomeCatagories />
   </>
  )
}

export default Home