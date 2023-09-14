import { CloseCircle } from "iconsax-react";
import Button from "../Button/Button";
type CardPopUpBoxType = {
  title: string;
  description: string;
  buttonTitle: string;
  action: () => void;
  setIsCloseCard: (value: number | null) => void;
};
function CardPopUpBox({
  title,
  description,
  buttonTitle,
  action,
  setIsCloseCard,
}: CardPopUpBoxType) {
  return (
    <div className=" flex justify-center items-start   fixed top-0 right-0 w-full h-screen  md:bg-transparent z-50">
      <div className="absolute w-full h-screen bg-black/75   backdrop-blur-sm"></div>
      <div className="relative w-full h-full">
        <div
          className={` fixed   flex justify-center items-center w-full h-full `}
        >
          <div className="   w-[320px]  md:w-[392px] md:h-max overflow-hidden bg-white rounded-lg ">
            <div className=" w-full flex items-center justify-between p-2 bg-gray-1  rounded-t-lg">
              <h2 className=" w-full text-center text-sm md:font-semibold md:text-xl text-gray-8">
                {title}
              </h2>
              <CloseCircle
                className=" text-gray-7 cursor-pointer"
                onClick={() => setIsCloseCard(null)}
              />
            </div>
            <div className=" p-7 flex items-center justify-center flex-col ">
              <span className="text-xs  md:text-base">{description}</span>
              <div className=" flex gap-4 md:gap-5 pt-6">
                <div onClick={() => setIsCloseCard(null)}>
                  <Button ExtraClass="w-full bg-white border px-6 !text-primaryGreen hover:bg-shade-1 hover:!text-white py-2">
                    بازگشت
                  </Button>
                </div>
                <div onClick={action}>
                  <Button ExtraClass=" w-full px-6 py-2 ">{buttonTitle}</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPopUpBox;
