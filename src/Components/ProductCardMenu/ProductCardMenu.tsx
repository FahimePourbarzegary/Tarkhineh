import { Heart } from "iconsax-react";
import imgproduct from "../../assets/food.jpg";
function ProductCardMenu() {
  return (
    <div className=" bg-white  border border-gray-4 rounded overflow-hidden flex xl:rounded-lg ">
      {/*image*/}
      <div className="h-full w-24 xl:w-44">
        <img
          src={imgproduct}
          alt="تصویر غذا"
          className="w-full h-full object-cover "
        />
      </div>
      {/* product content */}
      <div className=" flex flex-wrap px-2 py-3 xl:pr-8 xl:pl-4 text-gray-8 w-full xl:w-auto">
        <div className="flex justify-between items-center w-full xl:items-start mb-2">
          <div className="flex flex-col  gap-2">
            <h1 className=" text-xs xl:text-xl xl:font-semibold">
              کوفته برنجی
            </h1>
            <p className="text-[10px]   w-24 overflow-hidden text-ellipsis whitespace-nowrap xl:whitespace-normal xl:text-clip xl:overflow-visible   xl:text-sm xl:w-72">
              برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز
            </p>
          </div>
          <div className=" text-[10px] flex flex-col  gap-2 items-end xl:gap-0">
            <Heart
              size={16}
              className=" text-gray-6 hidden xl:block xl:w-6 xl:h-6"
            />
            <div className="flex gap-2 justify-center items-center">
              <span className=" line-through text-gray-5 xl:text-base">
                ۱۸۰،۰۰۰
              </span>
              <span className=" bg-error-extralight text-error rounded-lg px-1 xl:text-xs">
                ۳۵٪
              </span>
            </div>
            <p className="xl:text-lg text-center  ">۱۴۵،۰۰۰ تومان</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full gap-2 xl:gap-6">
          <div className="flex gap-2">
            <Heart size={16} className=" text-gray-6 xl:hidden" />
            <div className="flex">
              <StarStyle />
              <StarStyle />
              <StarStyle />
              <StarStyle />
              <StarStyle />
            </div>
          </div>
          <button className="w-full bg-primaryGreen p-2 text-[10px] xl:text-base   text-white rounded hover:bg-shade-3 duration-700">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCardMenu;
const StarStyle = () => {
  return (
    <div
      id="maskDiv"
      className=" box-border w-4 h-4 star-clip relative bg-gray-4 xl:w-6 xl:h-6"
    >
      <div className="star-clip bg-white w-3 h-3 absolute top-[2px] left-[2px]  bg-gradient-to-t from-warnning-light to-white via-white from-100% xl:w-5 xl:h-5"></div>
    </div>
  );
};
