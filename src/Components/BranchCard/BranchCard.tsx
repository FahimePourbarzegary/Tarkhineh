import { ArrowLeft2, Gallery } from "iconsax-react";
import BranchCardData from "./BranchCradData";
import expandIcon from "../../assets/branches/expand.png";
import { useState } from "react";
import PopUpPicture from "./PopUpPicture";

function BranchCard() {
  const [isHover, setIsHover] = useState(-1);
  const [isPopUpPicture, setIsPopUpPicture] = useState(-1);
  //hovering on Branch Card
  const MouseEnter = (index: number) => {
    setIsHover(index);
  };
  const MouseLeave = () => {
    setIsHover(-1);
  };
  //select picture to show full size on popup
  const openPopUp = (index: number) => {
    setIsPopUpPicture(index);
  };
  const closePopUp = () => {
    setIsPopUpPicture(-1);
  };
  return (
    <section className="w-full flex flex-col justify-center items-center mt-16 ">
      <h1 className=" font-estedadSemiBold md:text-2xl text-gray-8 ">
        ترخینه گردی
      </h1>
      <section className="w-full grid gap-3 px-5 py-3 md:grid-cols-2 lg:grid-cols-4 mt-4">
        {BranchCardData.map((data, index) => {
          return (
            <div
              key={data.id}
              className="flex  justify-between w-full cursor-pointer lg:cursor-default rounded-xl border border-gray-4 overflow-hidden hover:border-primaryGreen duration-125 lg:flex-col lg:hover:border-0 lg:hover:border-gray-4 lg:hover:shadow-lg 
               lg:[&>*:first-child]:hover:h-48  [&>*:first-child]:bg-black  "
              onMouseEnter={() => MouseEnter(data.id)}
              onMouseLeave={MouseLeave}
            >
              <div className="relative w-36  h-20 lg:w-full lg:h-[230px]  duration-300 cursor-pointer ">
                <img
                  className={`object-cover w-full h-full lg:h-full ${
                    isHover == data.id && "opacity-40"
                  }  duration-300`}
                  src={data.imageUrl}
                  alt={data.branch}
                />
                <div
                  className={`absolute top-0 right-0 w-full h-full  justify-center items-center hidden  lg:${
                    isHover == data.id && "flex"
                  } `}
                  onClick={() => openPopUp(index)}
                >
                  <div className=" w-14 h-14 bg-white/30 rounded-full flex justify-center items-center ">
                    {" "}
                    <div className=" w-11 h-11 bg-white/50 rounded-full flex justify-center items-center ">
                      <Gallery className="text-white" />
                    </div>
                  </div>
                </div>
                <img
                  className=" absolute right-2 bottom-2 w-4 h-4 lg:hidden"
                  src={expandIcon}
                  alt="resize"
                  onClick={() => openPopUp(index)}
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-1 p-2  w-full lg:pb-4 lg:gap-3 duration-300">
                <p className=" font-medium text-sm text-gray-8 lg:font-semibold lg:text-xl ">
                  {data.branch}
                </p>
                <p className=" text-[10px] text-center lg:font-medium lg:text-sm">
                  {data.branchAddress}
                </p>
                <button
                  className={`relative group border  border-primaryGreen rounded text-sm  px-10 md:px-4  py-[6px] z-[1] overflow-hidden hidden lg:${
                    isHover == data.id && "flex"
                  } duration-150`}
                >
                  <span className="w-full h-full translate-x-96   bg-primaryGreen inset-0 absolute -z-[1] group-hover:translate-x-0 duration-500"></span>
                  <div className=" flex items-center justify-between gap-5">
                    <span className="group-hover:text-white duration-500">
                      صفحه شعبه
                    </span>
                    <ArrowLeft2 className="hidden md:block group-hover:text-white duration-500 text-primaryGreen" />
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </section>
      {isPopUpPicture !== -1 && (
        <PopUpPicture
          index={isPopUpPicture}
          closePopUp={closePopUp}
          setIsPopUpPicture={setIsPopUpPicture}
        />
      )}
    </section>
  );
}

export default BranchCard;
