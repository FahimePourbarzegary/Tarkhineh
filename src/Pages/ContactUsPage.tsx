import { useState } from "react";
import BranchCardData from "../Components/BranchCard/BranchCradData";
import banner from "../assets/banner/contactus.jpg";
import { Gallery } from "iconsax-react";
import PopUpPicture from "../Components/BranchCard/PopUpPicture";
function ContactUsPage() {
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
    <div>
      <div className=" w-full h-44 md:h-72 relative">
        <img src={banner} alt="بنر" className=" w-full h-full object-fill" />
        <h1 className=" text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold lg:text-[40px]">
          درباره ترخینه بیشتر بدانید!
        </h1>
      </div>
      <section className="w-full grid gap-3 px-5 py-3  mt-4">
        {BranchCardData.map((data, index) => {
          return (
            <div
              key={data.id}
              className="flex  justify-between w-full cursor-pointer lg:cursor-default rounded-xl border border-gray-4 overflow-hidden hover:border-primaryGreen duration-125 flex-col lg:flex-row lg:hover:border-0 lg:hover:border-gray-4 lg:hover:shadow-lg 
              [&>*:first-child]:bg-black  "
              onMouseEnter={() => MouseEnter(data.id)}
              onMouseLeave={MouseLeave}
            >
              <div className="relative w-full h-28 lg:w-full lg:h-[230px]  duration-300 cursor-pointer ">
                <img
                  className={`object-cover w-full h-full lg:h-full ${
                    isHover == data.id && "opacity-40"
                  }  duration-300`}
                  src={data.imageUrl}
                  alt={data.branch}
                />
                <div
                  className={`absolute top-0 left-0 w-full h-full  justify-center items-center    ${
                    isHover == data.id ? "flex" : "hidden"
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
              </div>
              <div className="flex flex-col justify-center items-center gap-1 p-2  w-full lg:pb-4 lg:gap-3 duration-300 text-[10px] text-center lg:font-medium lg:text-sm relative">
                <p className=" font-medium text-sm text-gray-8 lg:font-semibold lg:text-xl ">
                  {data.branch}
                </p>
                <p>{data.branchAddress}</p>
                <p className="flex gap-2">
                  <span className="flex gap-1">
                    {" "}
                    شماره تماس ۱: <p>{data.no1}</p>
                  </span>
                  <span className="flex gap-1">
                    {" "}
                    شماره تماس ۲: <p>{data.no2}</p>
                  </span>
                </p>
                <p>{data.workTime}</p>
                <div
                  className={` flex w-full lg:absolute lg:-bottom-10   justify-evenly py-2 ${
                    isHover == data.id
                      ? "lg:flex lg:w-full lg:bottom-0"
                      : "lg:hidden"
                  } duration-300`}
                >
                  {" "}
                  <button
                    className={`relative group border  border-primaryGreen rounded text-sm  px-10 md:px-4  py-[6px] z-[1] overflow-hidden  lg:${
                      isHover == data.id && "flex"
                    } duration-150`}
                  >
                    <span className="w-full h-full translate-x-96   bg-primaryGreen inset-0 absolute -z-[1] group-hover:translate-x-0 duration-500"></span>
                    <div className=" flex items-center justify-between gap-5">
                      <span className="group-hover:text-white duration-500 text-primaryGreen">
                        صفحه شعبه
                      </span>
                    </div>
                  </button>
                  <button
                    className={`relative group border  border-primaryGreen rounded text-sm  px-10 md:px-4  py-[6px] z-[1] overflow-hidden bg-primaryGreen lg:${
                      isHover == data.id && "flex"
                    } duration-150`}
                  >
                    <span className="w-full h-full translate-x-96   bg-white inset-0 absolute -z-[1] group-hover:translate-x-0 duration-500"></span>
                    <div className=" flex items-center justify-between gap-5">
                      <span className="group-hover:text-primaryGreen duration-500 text-white">
                        دیدن در نقشه
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {isPopUpPicture !== -1 && (
          <PopUpPicture
            index={isPopUpPicture}
            closePopUp={closePopUp}
            setIsPopUpPicture={setIsPopUpPicture}
          />
        )}
      </section>
    </div>
  );
}

export default ContactUsPage;
