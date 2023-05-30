import { Heart } from "iconsax-react";
import image from "../../assets/food.jpg";
function ProductCard() {
  return (
    <div className="  w-64 md:w-72 bg-white border border-gray-2 rounded-lg overflow-hidden">
      <img
        src={image}
        alt="image"
        className=" w-full h-28 object-cover md:h-60"
      />
      <div className=" flex flex-col gap-y-2 my-2 mx-2 md:mx-4 md:gap-y-4 md:my-4 justify-center items-center">
        <p>پاستا رژیمی</p>
        <div className="flex justify-between items-center w-full ">
          <div className=" flex flex-col gap-1">
            <div className="flex text-[10px] text-gray-5 items-center gap-1">
              <Heart size={16} />
              <p className="hidden md:block">افزودن به علاقمندی ها</p>
            </div>
            <div className="flex items-center gap-1 ">
              <div
                id="maskDiv"
                className=" box-border w-4 h-4 star-clip relative bg-gray-4"
              >
                <div className="star-clip bg-white w-3 h-3 absolute top-[2px] left-[2px]  bg-gradient-to-t from-warnning-light to-white via-white from-100%"></div>
              </div>
              <span className=" font-estedadMedium text-sm">۵</span>{" "}
              <span className=" text-[10px] text-gray-5 hidden md:block">
                (۶۲ امتیاز )
              </span>
            </div>
          </div>
          <div className=" flex flex-col gap-1">
            <div className="flex text-[10px] text-gray-5 items-center gap-1 justify-end ">
              <span className=" line-through ">۱۷۵۰۰۰</span>
              <span className=" text-error rounded-lg bg-error-extralight w-8 text-center">
                ٪۲۰
              </span>
            </div>
            <div>
              <span>۱۵۰۰۰۰ تومان</span>
            </div>
          </div>
        </div>
        <button className=" w-full mx-2 md:mx-4 bg-primaryGreen py-2 px-5 text-sm md:text-base md:px-14 md:py-2 text-white rounded">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
