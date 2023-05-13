import Category from "../Components/Category/Category";
import Slider from "../Components/Slider/Slider";
import Layout from "../Layout/Layout";
import "swiper/swiper-bundle.min.css";
function HomePage() {
  return (
    <Layout>
      <Slider />
      <Category/>
    </Layout>
  );
}

export default HomePage;
