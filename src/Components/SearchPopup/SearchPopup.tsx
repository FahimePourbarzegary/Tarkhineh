import { CloseCircle } from "iconsax-react";
import { useContext } from "react";
import { IsSearchContext } from "../../Layout/Layout";
import InputSearch from "../InputSearch/InputSearch";

function SearchPopup() {
  const { setIsSearchPopup } = useContext(IsSearchContext);
  return (
    <div className="flex justify-center items-center  fixed top-0 left-0 w-full h-screen z-40 ">
      <div
        className="absolute w-full h-full bg-black/75   backdrop-blur-sm"
        onClick={() => {
          setIsSearchPopup(false);
        }}
      ></div>
      <div className="relative">
        <div
          className={`  flex justify-center items-center   top-0 left-0 w-full h-screen  `}
        >
          <div className=" md:w-[600px] md:h-[253px] bg-white rounded-lg ">
            <div className=" w-full flex items-center justify-between p-6 bg-gray-3 rounded-t-lg">
              <h2 className=" w-full text-center font-semibold text-xl text-gray-8">
                جستجو
              </h2>
              <CloseCircle
                className=" text-gray-7 cursor-pointer"
                onClick={() => {
                  setIsSearchPopup(false);
                }}
              />
            </div>
            <div className=" w-full px-24 pt-8">
              <h2 className=" text-gray-8 text-center">
                لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
              </h2>
              <InputSearch ExtraCssDiv="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPopup;
