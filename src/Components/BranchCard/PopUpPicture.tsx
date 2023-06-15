import { CloseCircle } from "iconsax-react";
import BranchCardData from "./BranchCradData";
type PopUpPictureProps = {
  index: number;
  closePopUp: () => void;
  setIsPopUpPicture: (index: number) => void;
};
function PopUpPicture({
  index,
  closePopUp,
  setIsPopUpPicture,
}: PopUpPictureProps) {
  return (
    <div className="flex justify-center items-center  fixed top-0 left-0 w-full h-screen z-40 ">
      <div
        className={` absolute w-full h-full bg-black/75   backdrop-blur-sm`}
        onClick={closePopUp}
      ></div>
      <div className="r">
        <div className="relative">
          <CloseCircle
            size="22"
            color="#FFFFFF"
            className=" absolute top-4  left-2 cursor-pointer lg:text-2xl font-bold"
            onClick={closePopUp}
          />
          <div className="  w-80 h-[352px]   lg:w-[808px] lg:h-[441px]">
            <img
              src={BranchCardData[index].imageUrl}
              alt="image-branch"
              className=" w-full h-full object-cover rounded-lg  "
            />
          </div>
          <div className=" absolute bottom-0 w-full h-1/4  bg-gradient-to-t from-black to-black/0  rounded-lg"></div>
          <div className=" absolute flex gap-4 justify-center items-center  w-full bottom-8 overflow-hidden overflow-x-auto lg:bottom-3  ">
            {BranchCardData.map((data, i) => {
              return (
                <div
                  className={`w-[60px] h-[60px] overflow-hidden rounded-lg ${
                    index === i && "border border-white "
                  } cursor-pointer lg:w-[80px] lg:h-[80px]`}
                  onClick={() => setIsPopUpPicture(i)}
                  key={i}
                >
                  <img
                    src={data.imageUrl}
                    alt={data.branch}
                    className=" w-full h-full object-cover "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUpPicture;
