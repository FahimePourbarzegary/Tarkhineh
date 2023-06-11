import { SwiperSlide } from "swiper/react";

import { Navigation, Pagination, A11y, Controller, Autoplay } from "swiper";
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useState } from "react";
import UserComment from "../UserComment/UserComment";
function CommentSlider() {
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
    <div className="w-full mb-16 mt-5 relative">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 0,
          },
          768: { slidesPerView: 1, spaceBetween: 0 },
          1048: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 2.3,
            spaceBetween: 10,
          },
        }}
        watchSlidesProgress={true}
        onSlideChange={onSlideChangeHandler}
        modules={[Navigation, Pagination, A11y, Controller, Autoplay]}
        className="w-full [&>*:first-child]:pr-5 md:[&>*:first-child]:pr-24 user-comment-branch-slider relative md:h-64 "
        navigation={{
          prevEl: ".swiper-prev-comments",
          nextEl: ".swiper-next-comments",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (i, className) {
            return `<span class="${className}" key=${i}> </span>`;
          },
        }}
      >
        <SwiperSlide className=" min-w-fit">
          <UserComment />
        </SwiperSlide>
        <SwiperSlide className=" min-w-fit">
          <UserComment />
        </SwiperSlide>
        <SwiperSlide className=" min-w-fit">
          <UserComment />
        </SwiperSlide>
        <SwiperSlide className=" min-w-fit">
          <UserComment />
        </SwiperSlide>
        <SwiperSlide className=" min-w-fit">
          <UserComment />
        </SwiperSlide>
        <SwiperSlide className=" min-w-fit">
          <UserComment />
        </SwiperSlide>
        <div className="container-pagination">
          <div
            className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal
swiper-pagination-custom
swiper-pagination-fraction "
          ></div>
        </div>
        <div
          className={`hidden md:cursor-pointer md:outline-none swiper-prev-comments md:top-1/2  md:right-12 md:w-10 md:h-10 md:rounded-lg md:bg-white md:border md:border-gray-5  md:absolute md:z-30  md:flex md:justify-center md:items-center md:text-gray-7
${isFirst && "md:hidden"} `}
        >
          <ArrowRight2 size={35} className="" />
        </div>
        <div
          className={`hidden md:cursor-pointer md:outline-none swiper-next-comments md:top-1/2  md:left-12  md:w-10 md:h-10 md:rounded-lg md:bg-white md:border md:border-gray-5  md:absolute md:z-30  md:flex md:justify-center md:items-center md:text-gray-7
   ${isLast && "md:hidden"} `}
        >
          <ArrowLeft2 size={35} className=" " />
        </div>
      </Swiper>
    </div>
  );
}

export default CommentSlider;
