import { CloseCircle } from "iconsax-react";
import { useContext } from "react";
import { IsSearchContext } from "../../Layout/Layout";
import InputSearch from "../InputSearch/InputSearch";

function SearchPopup() {
  const { setIsSearchPopup } = useContext(IsSearchContext);
  return (
    <>
      {" "}
      <div
        className="fixed w-screen h-screen top-0 left-0 bg-black/75   backdrop-blur-sm  z-30 "
        onClick={() => {
          setIsSearchPopup(false);
        }}
      ></div>
      <div
        className={`fixed w-screen h-screen top-0 left-0   z-30 flex justify-center items-center`}
      >
        <div className=" md:w-[600px] md:h-[253px] bg-white rounded-lg z-40">
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
    </>
  );
}

export default SearchPopup;
