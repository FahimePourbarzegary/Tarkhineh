import { Swiper } from "swiper/react";
import Slider from "../Components/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import ProductCard from "../Components/ProductCard/ProductCard";
import { Navigation, Pagination, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
function BranchPage() {
  return (
    <section>
      <Slider />
      <section className=" py-12 relative">
        <h1 className=" mr-5  md:mr-20 font-estedadBold font-bold text-2xl text-gray-8">
          پیشنهاد ویژه
        </h1>

        <div className=" mt-6 w-full relative ">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1.5,
                spaceBetween: 2,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              600: {
                slidesPerView: 2.5,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1200: {
                slidesPerView: 4.1,
                spaceBetween: 0,
              },
              1440: {
                slidesPerView: 4.5,
                spaceBetween: 2,
              },
            }}
            modules={[Navigation, Pagination, A11y]}
            className="w-full pr-20   "
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
          >
            <SwiperSlide className=" min-w-[168px] md:min-w-[288px]  ">
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide className=" min-w-[168px] md:min-w-[288px]   ">
              <ProductCard />
            </SwiperSlide>{" "}
            <SwiperSlide className=" min-w-[168px] md:min-w-[288px]   ">
              <ProductCard />
            </SwiperSlide>{" "}
            <SwiperSlide className=" min-w-[168px] md:min-w-[288px]   ">
              <ProductCard />
            </SwiperSlide>{" "}
            <SwiperSlide className=" min-w-[168px] md:min-w-[288px]   ">
              <ProductCard />
            </SwiperSlide>{" "}
            <SwiperSlide className=" min-w-[168px] md:min-w-[288px]   ">
              <ProductCard />
            </SwiperSlide>{" "}
            <SwiperSlide className=" min-w-[168px] md:min-w-[288px]   ">
              <ProductCard />
            </SwiperSlide>{" "}
            <SwiperSlide className=" min-w-[168px] md:min-w-[288px]   ">
              <ProductCard />
            </SwiperSlide>{" "}
            <SwiperSlide className=" min-w-[168px] md:min-w-[288px]  ">
              <ProductCard />
            </SwiperSlide>{" "}
            <SwiperSlide className=" min-w-[168px] md:min-w-[288px]  ">
              <ProductCard />
            </SwiperSlide>{" "}
          </Swiper>
          <div className="  h-full z-20  absolute top-0  right-0  w-20 blur  opacity-60 bg-white">
            {" "}
          </div>
          <div
            className=" top-1/2  right-16 w-10 h-10 rounded-lg bg-white border border-gray-5  absolute z-30  flex justify-center items-center text-gray-7
          "
          >
            <ArrowRight2 size={35} className=" swiper-prev" />
          </div>
          <div className="  h-full z-20  absolute top-0  left-0  w-20 blur  opacity-60 bg-white">
            {" "}
          </div>
          <div
            className=" top-1/2  left-16 w-10 h-10 rounded-lg bg-white border border-gray-5  absolute z-30  flex justify-center items-center text-gray-7
          "
          >
            <ArrowLeft2 size={35} className="swiper-next " />
          </div>
        </div>
      </section>
    </section>
  );
}

export default BranchPage;
