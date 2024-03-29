import { ArrowLeft2, Diagram, HomeWifi, MenuBoard, User } from "iconsax-react";
import Category from "../Components/Category/Category";
import Slider from "../Components/Slider/Slider";
import "swiper/swiper-bundle.min.css";
import BranchCard from "../Components/BranchCard/BranchCard";
import aboutImage from "../assets/branches/chalose.png";
import InputSearch from "../Components/InputSearch/InputSearch";
function HomePage() {
  return (
    <>
      <Slider />
      {/* in mobile style  */}
      <div className="w-full px-5 relative md:hidden  ">
        <InputSearch />
      </div>
      <Category />
      {/* about us section */}
      <section
        className="bg-black relative overflow-y-auto md:overflow-hidden
      "
      >
        <div
          className={`h-96 w-full bg-fixed bg-cover bg-no-repeat bg-center opacity-40 blur-sm `}
          style={{
            backgroundImage: `url(${aboutImage})`,
          }}
        ></div>
        <div className=" absolute z-10 top-0 px-5 py-4 text-white text-justify w-full grid gap-6 lg:grid-cols-2 lg:py-10 lg:px-28 ">
          <div className=" grid gap-2 lg:gap-6">
            <h2 className="lg:font-bold lg:text-2xl">
              فروشگاه های زنجیره ای ترخینه
            </h2>
            <span className=" text-xs leading-[18px] lg:text-xl">
              مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
              ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
              رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
              پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
              شان شما عزیزان ارائه دهیم.
            </span>
            <div className="py-2 flex justify-end ">
              <button className=" relative group border border-white/40 rounded text-sm  px-10 md:px-4  py-[6px] z-[1] overflow-hidden ">
                <span className="w-full h-full translate-x-96 rounded bg-white inset-0 absolute -z-[1] group-hover:translate-x-0 duration-500"></span>
                <div className=" flex items-center justify-between gap-5">
                  {" "}
                  <span className="group-hover:text-black duration-500">
                    بیشتر
                  </span>
                  <ArrowLeft2 className="hidden md:block group-hover:text-black duration-500" />
                </div>
              </button>
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-4 lg:gap-6">
            <div className="flex flex-col justify-center items-center gap-2">
              <User size={24} className="md:w-12 md:h-12" />
              <p className="text-xs lg:text-lg">پرسنلی مجرب و حرفه ای</p>
            </div>{" "}
            <div className="flex flex-col justify-center items-center gap-2">
              <Diagram size={24} className="md:w-12 md:h-12" />
              <p className="text-xs lg:text-lg">پرسنلی مجرب و حرفه ای</p>
            </div>{" "}
            <div className="flex flex-col justify-center items-center gap-2">
              <HomeWifi size={24} className="md:w-12 md:h-12" />
              <p className="text-xs lg:text-lg">پرسنلی مجرب و حرفه ای</p>
            </div>{" "}
            <div className="flex flex-col justify-center items-center gap-2">
              <MenuBoard size={24} className="md:w-12 md:h-12" />
              <p className="text-xs lg:text-lg">پرسنلی مجرب و حرفه ای</p>
            </div>
          </div>
        </div>
      </section>
      {/* branchCards section */}
      <BranchCard />
    </>
  );
}

export default HomePage;
