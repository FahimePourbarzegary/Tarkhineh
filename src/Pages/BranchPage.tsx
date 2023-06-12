import {
  ArrowLeft2,
  ArrowRight2,
  CallCalling,
  Clock,
  Location,
  Note,
} from "iconsax-react";
import CategorySlider from "../Components/CategorySlider/CategorySlider";
import Slider from "../Components/Slider/Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";

import CommentSlider from "../Components/CommentSlider.tsx/CommentSlider";
import InputSearch from "../Components/InputSearch/InputSearch";
function BranchPage() {
  return (
    <section>
      <Slider />
      {/* in mobile style  */}
      <div className="w-full px-5 relative md:hidden  ">
        {" "}
        <InputSearch />
      </div>
      {/* recommand food to user */}
      <section className=" py-12 relative">
        <div className=" w-full pb-10 mb-2">
          {" "}
          <h1 className=" mr-5  md:mr-24 font-estedadBold font-bold text-2xl text-gray-8">
            پیشنهاد ویژه
          </h1>
          <CategorySlider navigation="special" />
        </div>
        <div className=" w-full bg-primaryGreen pb-10 mb-2 pt-12">
          {" "}
          <h1 className=" mr-5  md:mr-24 font-estedadBold font-bold text-2xl text-white">
            غذاهای محبوب
          </h1>
          <CategorySlider navigation="favorite" />
        </div>
        <div className=" w-full pb-10 mb-2 pt-12">
          {" "}
          <h1 className=" mr-5  md:mr-24 font-estedadBold font-bold text-2xl text-gray-8">
            غذاهای غیر ایرانی
          </h1>
          <CategorySlider navigation="nonIran" />
        </div>
        <div className=" w-full flex justify-center items-center">
          {" "}
          <button className=" relative flex justify-between items-center gap-2 text-primaryGreen border  border-primaryGreen py-2 px-4 rounded group overflow-hidden ">
            <span className="w-full h-full translate-x-96 rounded-xs bg-primaryGreen inset-0 absolute -z-[1] group-hover:translate-x-0 duration-500"></span>
            <Note className=" md:w-6 md:h-6 group-hover:text-white  duration-500 " />
            <p className="group-hover:text-white  duration-500">
              مشاهده منوی کامل
            </p>
          </button>
        </div>
      </section>
      {/* slider branch show location */}
      <section>
        <h1 className=" text-center mb-3 md:mb-5 md:text-2xl font-estedadBold font-bold  text-gray-8">
          شعبه اکباتان
        </h1>
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
            loop
            className="h-48 md:h-96 slider relative"
          >
            <SwiperSlide>
              <div className=" bg-black relative ">
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
                <img
                  className="w-full h-48 md:h-96 object-cover opacity-40 hover:opacity-70"
                  src="https://s3-alpha-sig.figma.com/img/e373/a5bb/739135ae71a692fcff8ef5bd2e9bc39e?Expires=1684713600&Signature=KlflOJtfE-h8heOXuFwxhDkyHMcTfWNvYyq8qusd9GZSXASo7Or4l1sbBgU92DAq0v45pDTqMvRSaqi4wHSeKHVAgqHj8qlQ0j96gXlFdOTFPGdcho~XEcmNMY2~N2335b8jsR1K6N3W5wSKdiGWBZxoPJXutRGly0HiK52~heOVH90Ac4Hb-09sP6G9HFt2zQM7tG43qdYLWtL8-kgamsBUczlbH3q96jWirKZC57hur6Uob5yki5KKsFBiSgRFXxXcsOmq1vwczqCIfIH3wWZ1AI7hzmklh~LCmHzVsJoDZlr2YnK9G4VdGfaqS9Q2uxwhlKZl0Y6U7kUPlYDBaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className=" absolute  -bottom-10 z-20 flex justify-center items-center w-full text-gray-8">
            <div className="p-2 md:px-12 md:py-4 bg-white border border-primaryGreen  rounded grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 grid-rows-2  gap-2 content-center items-start text-xs md:text-base mx-4">
              <div className=" flex md:flex-col gap-1 md:gap-2  col-span-2 md:col-span-1 md:justify-center md:items-center md:order-2">
                <Location size={18} className="md:w-8 md:h-8" />
                <span>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</span>
              </div>
              <div className=" flex md:flex-col md:justify-center md:items-center gap-1 md:gap-2  md:order-1">
                <CallCalling size={18} className="md:w-8 md:h-8" />
                <span className=" text-[10px] flex md:flex-col md:justify-center md:items-center gap-1 md:gap-2 md:text-base">
                  <p>۳۳۵۳۵۳۵۴</p>
                  <p className="md:hidden">-</p>
                  <p>۳۳۵۳۵۳۵۶</p>
                </span>
              </div>
              <div className=" flex md:flex-col md:justify-center md:items-center gap-1 md:gap-2 md:order-3 ">
                <Clock size={18} className="md:w-8 md:h-8" />
                <span>همه‌روزه از ساعت ۱۲ الی ۲۳ </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* comment of users */}
      <section className=" mt-12">
        <h1 className=" text-center pt-12 mb-3 md:mb-5 md:text-2xl font-estedadBold font-bold  text-gray-8">
          نظرات کاربران
        </h1>
        <CommentSlider />
      </section>
    </section>
  );
}

export default BranchPage;
