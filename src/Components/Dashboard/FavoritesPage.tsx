import { ArrowRight2, Heart } from "iconsax-react";
import { Swiper, SwiperSlide } from "swiper/react";
import InputSearch from "../InputSearch/InputSearch";
import { Navigation, A11y } from "swiper";
//import spiderwebimg from "../../assets/spiderweb.svg";
import Button from "../Button/Button";
import image from "../../assets/food.jpg";
function FavoritesPage() {
  return (
    <div className=" w-full h-screen absolute top-0 right-0   px-6 bg-white md:static  md:h-[500px] md:w-4/5  md:border md:border-gray-4 md:rounded-md  overflow-auto">
      <header className="  flex justify-center items-center py-6 md:border-b md:border-b-gray-5 mb-2 ">
        <ArrowRight2 className=" md:hidden" />
        <h1 className="w-full text-center md:text-start  ">علاقمندی ها</h1>
      </header>
      <div className=" flex flex-col gap-6 justify-between items-center ">
        {/*Filter section */}
        <div className="flex flex-col md:flex-row w-full  justify-between items-center mt-2 relative z-20">
          {" "}
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={8}
            slidesPerView={0}
            className="hidden md:block w-full min-w-fit  h-full  md:mt-4 branch-menu-category"
          >
            <SwiperSlide className=" text-[10px]  cursor-pointer lg:text-base bg-gray-3 px-2 py-1 rounded-full max-w-fit text-center">
              <div>همه</div>
            </SwiperSlide>
            <SwiperSlide className=" text-[10px]  cursor-pointer lg:text-base bg-gray-3 px-2 py-1 rounded-full max-w-fit text-center">
              <div>غذای اصلی</div>
            </SwiperSlide>
            <SwiperSlide className=" text-[10px]  cursor-pointer lg:text-base bg-gray-3 px-2 py-1 rounded-full max-w-fit text-center">
              <div>پیش غذا</div>
            </SwiperSlide>
            <SwiperSlide className=" text-[10px]  cursor-pointer lg:text-base bg-gray-3 px-2 py-1 rounded-full max-w-fit text-center">
              <div>دسر</div>
            </SwiperSlide>
            <SwiperSlide className=" text-[10px]  cursor-pointer lg:text-base bg-gray-3 px-2 py-1 rounded-full max-w-fit text-center">
              <div>نوشیدنی</div>
            </SwiperSlide>
          </Swiper>
          <div className="w-full md:w-2/3  relative">
            <InputSearch ExtraCssDiv="h-10 rounded-lg mb-0 !p-4" />
          </div>
        </div>
        {/*   <div className=" relative w-full flex flex-col justify-center items-center ">
            <div>
                <img src={spiderwebimg} alt="img" />

            </div>
            <h1 className=" text-center absolute top-16 text-gray-6">شما در حال حاضر هیچ محصولی را به علاقه‌مندی‌ها اضافه نکرده‌اید!</h1>
            <div>
              <Button ExtraClass="w-max absolute left-1/2 top-3/4  -translate-x-1/2 -translate-y-1/2 p-2 px-16 md:px-24 bg-white !text-primaryGreen flex items-center gap-2 border hover:!text-white  ">
                <span> منوی رستوران </span>
              </Button>
            </div>
  </div> */}
      </div>
      <div className=" grid grid-cols-2 xl:grid-cols-3 gap-4 justify-center items-center py-10 overflow-auto ">
        <CardFavoriteProduct />
        <CardFavoriteProduct />
        <CardFavoriteProduct />
        <CardFavoriteProduct />
        <CardFavoriteProduct />
        <CardFavoriteProduct />
        <CardFavoriteProduct />
        <CardFavoriteProduct />
        <CardFavoriteProduct />
        <CardFavoriteProduct />
      </div>
    </div>
  );
}

export default FavoritesPage;
const CardFavoriteProduct = () => {
  return (
    <div className=" w-full  bg-white border border-gray-2 rounded-lg overflow-hidden product-card ">
      <img
        src={image}
        alt="image"
        className=" w-full h-28 object-cover md:h-36"
      />
      <div className=" flex flex-col gap-y-2 my-2 mx-2 md:mx-4 md:gap-y-4 md:my-4 justify-center items-center">
        <div className="w-full flex justify-between items-center gap-2">
          <p>پاستا رژیمی</p>{" "}
          <Heart
            size={16}
            className=" md:w-6 md:h-6 text-error"
            variant="Bold"
          />
        </div>
        <div className="flex justify-between items-center w-full ">
          <div className=" flex flex-col">
            <div className="flex items-center gap-1 ">
              <div
                id="maskDiv"
                className=" box-border w-4 h-4 star-clip relative bg-gray-4 md:hidden"
              >
                <div className="star-clip bg-white w-3 h-3 absolute top-[2px] left-[2px]  bg-gradient-to-t from-warnning-light to-white via-white from-100%"></div>
              </div>
              <span className=" font-estedadMedium text-sm md:hidden">۵</span>{" "}
            </div>
            <div className=" items-center gap-1 hidden md:flex ">
              <StarStyle />
              <StarStyle />
              <StarStyle />
              <StarStyle />
              <StarStyle />
            </div>
          </div>
          <span className="text-[10px] md:text-base ">۱۵۰۰۰۰ تومان</span>
        </div>
        <div className="w-full flex items-center justify-center ">
          <Button ExtraClass="py-2 px-5 md:px-10 md:py-2">
            {" "}
            افزودن به سبد خرید
          </Button>
        </div>
      </div>
    </div>
  );
};
export const StarStyle = () => {
  return (
    <div
      id="maskDiv"
      className=" box-border w-4 h-4 star-clip relative bg-gray-4 xl:w-5 xl:h-5"
    >
      <div className="star-clip bg-white w-3 h-3 absolute top-[2px] left-[2px]  bg-gradient-to-t from-warnning-light to-white via-white from-100% xl:w-4 xl:h-4"></div>
    </div>
  );
};
