import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";
import { ArrowLeft2, ArrowRight2, SearchNormal1 } from "iconsax-react";
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
              src="https://s3-alpha-sig.figma.com/img/4096/bdda/3ac5f5bbde488604f0899328c14c3049?Expires=1684713600&Signature=LtWx-2nAaAwYDZvNh3JaO-PA32xcwmrq8PLIeRM1FfvTd0TGr7APizMTjwnLkjfxhQ31ZpPgsKfNONYlLacF6OqMo061KaSOqk0ZEKa1o1dj9YhYBdx~19XS57tvOtOPdmyhwZT-8j0puFnFSmu1P9SINxqO--jcyKH6iZq13f6h3BHKhP-Ov3LmQ1xBZtXDnLbGfkI93ISpVHHhgoVUwiZ26iqEvKI71oXpu0dBwT5hwOCJ6mSLgRjPEjSoj9GMKypoh73kl12pmi6iCkL6pq~a814X4WBOow3moPJKvFJv6U9KceBIIBJ2FOt6-KdjdZDAGQuxeoBxrp94WdW-AQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
              src="https://s3-alpha-sig.figma.com/img/ef1c/4426/3e34fc7f040f53876172113bfe24c7ff?Expires=1684713600&Signature=TmP~dk~bkB4g0F4MdKkWppUKij6-KO5NeiHHJ41NW3CKht0gEw~MnIKLXFbFQXZ~pyYx-2vvffnLuQdJHJeMAR5Skm48xnlJgFhMvTB8QeQTJcGo3UjF-m6fZ2B-tVZoeIl2lQ-6APFrgqH9iJWho3GAADhD~IEoKvUbayNWvDZHoZe2o4rzuNDtMkD4231xvxkGXQAGN-pCbbVgnZx4uttRMZ42xNG2xT9-p-jte~FaP8nJzJ-x6CIwmLVtar~IOCFO-5jwDcCcbKNi7tE97U7hwIzjz978n~0fFsB~4MIKMKaDFBKVk6kCJmgF7Uk-TfiGAGXrwwl8zGkudu6k2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
              src="https://s3-alpha-sig.figma.com/img/e373/a5bb/739135ae71a692fcff8ef5bd2e9bc39e?Expires=1684713600&Signature=KlflOJtfE-h8heOXuFwxhDkyHMcTfWNvYyq8qusd9GZSXASo7Or4l1sbBgU92DAq0v45pDTqMvRSaqi4wHSeKHVAgqHj8qlQ0j96gXlFdOTFPGdcho~XEcmNMY2~N2335b8jsR1K6N3W5wSKdiGWBZxoPJXutRGly0HiK52~heOVH90Ac4Hb-09sP6G9HFt2zQM7tG43qdYLWtL8-kgamsBUczlbH3q96jWirKZC57hur6Uob5yki5KKsFBiSgRFXxXcsOmq1vwczqCIfIH3wWZ1AI7hzmklh~LCmHzVsJoDZlr2YnK9G4VdGfaqS9Q2uxwhlKZl0Y6U7kUPlYDBaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
      {/* in mobile style  */}
      <div className="w-full px-5 relative  ">
        {" "}
        <div className=" text-gray-8  w-full flex py-3 px-4 items-center justify-between border border-gray-4 rounded my-4 md:hidden  ">
          <input
            type="text"
            placeholder="جستجو"
            className="w-full outline-none"
          />
          <SearchNormal1 className=" " />
        </div>
      </div>
    </div>
  );
}

export default Slider;
