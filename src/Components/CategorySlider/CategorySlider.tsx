import { SwiperSlide } from "swiper/react";
import ProductCard from "../ProductCard/ProductCard";
import { Navigation, Pagination, A11y, Controller } from "swiper";
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useState } from "react";
type CategorySliderProps = {
  navigation: string;
};
function CategorySlider({ navigation }: CategorySliderProps) {
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });
  const onSlideChangeHandler = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };
  const { isFirst, isLast } = slideBegOrNot;
  return (
    <div className=" mt-6 w-full relative  overflow-visible">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 1.5,
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
            slidesPerView: 4.3,
            spaceBetween: 0,
          },
          1440: {
            slidesPerView: 4.8,
            spaceBetween: 0,
          },
        }}
        watchSlidesProgress={true}
        modules={[Navigation, Pagination, A11y, Controller]}
        className="w-full [&>*:first-child]:pr-5 md:[&>*:first-child]:pr-24 category-slider "
        navigation={{
          prevEl: `.swiper-prev-category-${navigation}`,
          nextEl: `.swiper-next-category-${navigation}`,
        }}
        onSlideChange={onSlideChangeHandler}
      >
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
        <SwiperSlide className=" w-1 m-8  "></SwiperSlide>{" "}
      </Swiper>
      <div
        className={`outline-none swiper-prev-category-${navigation}  top-1/2  right-16 w-10 h-10 rounded-lg bg-white border border-gray-5  absolute z-30  flex justify-center items-center text-gray-7
   ${isFirst && "hidden"} `}
      >
        <ArrowRight2 size={35} className="" />
      </div>
      <div
        className={` outline-none swiper-next-category-${navigation} top-1/2  left-16 w-10 h-10 rounded-lg bg-white border border-gray-5  absolute z-30  flex justify-center items-center text-gray-7
      ${isLast && "hidden"} `}
      >
        <ArrowLeft2 size={35} className=" " />
      </div>
    </div>
  );
}

export default CategorySlider;
