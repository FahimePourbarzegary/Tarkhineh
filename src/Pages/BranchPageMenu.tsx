import { NavLink } from "react-router-dom";
import Slider from "../Components/Slider/Slider";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import InputSearch from "../Components/InputSearch/InputSearch";
import { Navigation, A11y } from "swiper";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useState } from "react";
function BranchPageMenu() {
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });
  const onSlideChangeHandler = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
    console.log(swiper);
  };
  const { isFirst, isLast } = slideBegOrNot;
  return (
    <section>
      <Slider />
      {/* nav */}
      <div className=" bg-gray-3 w-full  px-5  md:px-28 ">
        <nav className=" flex gap-4 md:gap-8">
          <NavLink
            to="/"
            className={" border-b-2 border-b-primaryGreen py-2 md:py-4"}
          >
            <p className=" text-sm font-estedadBold text-primaryGreen md:text-xl md:font-bold">
              غذای اصلی
            </p>
          </NavLink>
          <NavLink to="/" className={"py-2 md:py-4"}>
            <p className=" text-xs  text-gray-7 md:text-xl  "> پیش غذا</p>
          </NavLink>
          <NavLink to="/" className={"py-2 md:py-4"}>
            <p className=" text-xs  text-gray-7 md:text-xl  ">دسر</p>
          </NavLink>
          <NavLink to="/" className={"py-2 md:py-4"}>
            <p className=" text-xs  text-gray-7 md:text-xl  ">نوشیدنی</p>
          </NavLink>
        </nav>
      </div>
      {/*Filter section */}
      <div className="flex flex-col md:flex-row w-full  justify-center items-center mt-2 relative z-20">
        {" "}
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={8}
          navigation={{
            prevEl: ".swiper-prev-branchmenu",
            nextEl: ".swiper-next-branchmenu",
          }}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            540: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={onSlideChangeHandler}
          className=" w-full max-w-fit  md:px-24 px-8 mr-0 h-full  md:mt-4 branch-menu-category"
        >
          <SwiperSlide className=" text-[10px] lg:text-base bg-gray-3 px-2 py-1 rounded-full max-w-fit text-center">
            <div>غذاهای ایرانی</div>
          </SwiperSlide>
          <SwiperSlide className=" text-[10px] lg:text-base bg-gray-3 px-2 py-1 rounded-full max-w-fit text-center">
            <div>غذاهای غیر ایرانی</div>
          </SwiperSlide>
          <SwiperSlide className=" text-[10px] lg:text-base bg-gray-3 px-2 py-1 rounded-full max-w-fit text-center">
            <div> پیتزا ها</div>
          </SwiperSlide>
          <SwiperSlide className=" text-[10px] lg:text-base bg-gray-3 px-2 py-1 rounded-full max-w-fit text-center">
            <div> ساندویچ ها</div>
          </SwiperSlide>
          <SwiperSlide className=" text-[10px] lg:text-base bg-gray-3 px-2 py-1 rounded-full max-w-fit text-center">
            <div> پر فروش ترین </div>
          </SwiperSlide>
          <SwiperSlide className=" text-[10px] lg:text-base bg-gray-3 px-2 py-1 rounded-full max-w-fit text-center">
            <div> اقتصادی ترین</div>
          </SwiperSlide>
          <div
            className={`hidden md:cursor-pointer md:outline-none swiper-prev-branchmenu md:top-1   md:right-0 md:w-6 md:h-6 md:rounded-lg md:bg-white   md:absolute md:z-40  md:flex md:justify-center md:items-center md:text-gray-7
${isFirst && "md:hidden"} `}
          >
            <ArrowRight2 size={16} className="" />
          </div>
          <div
            className={`hidden md:cursor-pointer md:outline-none swiper-next-branchmenu md:top-1  md:left-0  md:w-6 md:h-6 md:rounded-lg md:bg-white   md:absolute md:z-30  md:flex md:justify-center md:items-center md:text-gray-7
   ${isLast && "md:hidden"} `}
          >
            <ArrowLeft2 size={16} className=" " />
          </div>
        </Swiper>
        <div className="w-full  px-5  relative">
          <InputSearch ExtraCssDiv="h-9 rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export default BranchPageMenu;
