import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import slider1 from "../../assets/banner/slider.png";
import slider2 from "../../assets/banner/slider2.jpg";
import slider3 from "../../assets/banner/slider3.jpg";
function Slider() {
  return (
    <div className="relative">
      <button className=" swiper-prev  h-12 z-10 text-white absolute top-1/2  right-0">
        <ArrowRight2 size={35} />
      </button>
      <button className=" swiper-next z-10  text-white absolute top-1/2 left-0 ">
        <ArrowLeft2 size={35} />
      </button>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={2500}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (i, className) {
            return `<span class="${className}" key=${i}> </span>`;
          },
        }}
        loop
        className="h-48 md:h-96 slider relative"
      >
        <SwiperSlide>
          <div className=" bg-black relative ">
            <div className=" w-full h-full absolute z-30 flex flex-col justify-center items-center">
              <h1 className=" text-white md:text-[40px] font-bold">
                تجربه غذای سالم گیاهی به سبک ترخینه
              </h1>
              <div className=" mt-5 md:mt-10 ">
                <button className=" px-2 py-2 md:px-8 md:py-2 rounded w-full bg-primaryGreen text-white text-[10px] md:text-base hover:bg-shade-3 ">
                  {" "}
                  سفارش آنلاین غذا
                </button>
              </div>
            </div>
            <img
              className="w-full h-48 md:h-96 object-cover opacity-40 hover:opacity-70"
              src={slider1}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" bg-black relative ">
            <div className=" w-full h-full absolute z-30 flex flex-col justify-center items-center">
              <h1 className=" text-white md:text-[40px] font-bold">
                تجربه غذای سالم گیاهی به سبک ترخینه
              </h1>
              <div className=" mt-5 md:mt-10 ">
                <button className=" px-2 py-2 md:px-8 md:py-2 rounded w-full bg-primaryGreen text-white text-[10px] md:text-base hover:bg-shade-3 ">
                  {" "}
                  سفارش آنلاین غذا
                </button>
              </div>
            </div>
            <img
              className="w-full h-48 md:h-96 object-cover opacity-40 hover:opacity-70"
              src={slider2}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" bg-black relative ">
            <div className=" w-full h-full absolute z-30 flex flex-col justify-center items-center">
              <h1 className=" text-white md:text-[40px] font-bold">
                تجربه غذای سالم گیاهی به سبک ترخینه
              </h1>
              <div className=" mt-5 md:mt-10 ">
                <button className=" px-2 py-2 md:px-8 md:py-2 rounded w-full bg-primaryGreen text-white text-[10px] md:text-base hover:bg-shade-3 ">
                  {" "}
                  سفارش آنلاین غذا
                </button>
              </div>
            </div>
            <img
              className="w-full h-48 md:h-96 object-cover opacity-40 hover:opacity-70"
              src={slider3}
              alt=""
            />
          </div>
        </SwiperSlide>
        <div className="container-pagination">
          <div
            className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal
swiper-pagination-custom
swiper-pagination-fraction"
          ></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
