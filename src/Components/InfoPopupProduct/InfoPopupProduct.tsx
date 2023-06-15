import { CloseCircle } from "iconsax-react";
import imgproduct from "../../assets/food.jpg";
import { StarStyle } from "../ProductCardMenu/ProductCardMenu";
function InfoPopupProduct() {
  return (
    <div className="flex justify-center items-center  fixed top-0 left-0 w-full h-screen z-40 ">
      <div className="fixed w-screen h-screen top-0 left-0 bg-black/75   backdrop-blur-sm  z-30 "></div>
      <div
        className={`fixed h-screen w-screen   z-30 flex justify-center items-center`}
      >
        <div className=" md:w-[820px] md:h-auto bg-white rounded-lg z-40">
          <div className=" w-full flex items-center justify-between p-6 bg-gray-3 rounded-t-lg">
            <h2 className=" w-full text-center font-semibold text-xl text-gray-8">
              اطلاعات محصول
            </h2>
            <CloseCircle className=" text-gray-7 cursor-pointer" />
          </div>
          <div className=" relative w-full h-[400px]">
            <img
              src={imgproduct}
              alt="تصویر محصول"
              className="w-full h-full  "
            />
            <div className=" absolute bottom-0 w-full h-1/4  bg-gradient-to-t from-black to-black/0  rounded-lg"></div>
            <div className=" absolute flex gap-4 justify-center items-center  w-full bottom-8 overflow-hidden overflow-x-auto lg:bottom-3  ">
              <div
                className={`w-[60px] h-[60px] overflow-hidden rounded-lg ${"border border-white "} cursor-pointer lg:w-[80px] lg:h-[80px] `}
              >
                <img
                  src={imgproduct}
                  alt="تصویر محصول"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div
                className={`w-[60px] h-[60px] overflow-hidden rounded-lg  cursor-pointer lg:w-[80px] lg:h-[80px] `}
              >
                <img
                  src={imgproduct}
                  alt="تصویر محصول"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div
                className={`w-[60px] h-[60px] overflow-hidden rounded-lg  cursor-pointer lg:w-[80px] lg:h-[80px] `}
              >
                <img
                  src={imgproduct}
                  alt="تصویر محصول"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div
                className={`w-[60px] h-[60px] overflow-hidden rounded-lg  cursor-pointer lg:w-[80px] lg:h-[80px] `}
              >
                <img
                  src={imgproduct}
                  alt="تصویر محصول"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div
                className={`w-[60px] h-[60px] overflow-hidden rounded-lg  cursor-pointer lg:w-[80px] lg:h-[80px] `}
              >
                <img
                  src={imgproduct}
                  alt="تصویر محصول"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div
                className={`w-[60px] h-[60px] overflow-hidden rounded-lg  cursor-pointer lg:w-[80px] lg:h-[80px] `}
              >
                <img
                  src={imgproduct}
                  alt="تصویر محصول"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
          </div>
          <div className="p-3 md:flex md:items-center md:justify-between md:px-6">
            <div className=" flex flex-col gap-2 ">
              <h1 className=" font-semibold">کوفته برنجی</h1>
              <p className="text-[10px] mr-3 md:mr-4 md:text-sm">
                برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز
              </p>
            </div>
            <div className="flex gap-2  items-center md:flex-col md:items-end">
              <div className="flex">
                <StarStyle />
                <StarStyle />
                <StarStyle />
                <StarStyle />
                <StarStyle />
              </div>
              <p>(۷۵نظر)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPopupProduct;
