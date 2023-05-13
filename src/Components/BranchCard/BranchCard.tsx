import { ArrowLeft2, Gallery, Image } from "iconsax-react";
import BranchCardData from "./BranchCradData";
function BranchCard() {
  return (
    <section className="w-full flex flex-col justify-center items-center mt-16 ">
      <h1 className=" font-estedadSemiBold md:text-2xl text-gray-8 ">
        ترخینه گردی
      </h1>
      <section className="w-full grid gap-3 px-5 py-3 md:grid-cols-2 lg:grid-cols-4">
        {BranchCardData.map((data) => {
          return (
            <div
              key={data.id}
              className="flex  justify-between w-full cursor-pointer rounded-xl border border-gray-4 overflow-hidden hover:border-primaryGreen duration-125 lg:flex-col lg:hover:border-0 lg:hover:border-gray-4 lg:hover:shadow-lg"
            >
              <div className="relative w-36  h-20 lg:w-full lg:h-[230px] bg-black lg:hover:h-48">
                <img
                  className=" object-cover w-full h-full lg:h-full //opacity-40"
                  src={data.imageUrl}
                  alt={data.branch}
                />
                <div className="absolute top-0 right-0 w-full h-full //flex justify-center items-center hidden">
                  <div className=" w-14 h-14 bg-white/30 rounded-full flex justify-center items-center ">
                    {" "}
                    <div className=" w-11 h-11 bg-white/50 rounded-full flex justify-center items-center ">
                      <Gallery className="text-white" />
                    </div>
                  </div>
                </div>
                <img
                  className=" absolute right-2 bottom-2 w-4 h-4 lg:hidden"
                  src="https://s3-alpha-sig.figma.com/img/bcd7/7ef1/e792c4724b6c0b252f0dcbf50025cb61?Expires=1684713600&Signature=pCWDAGLcoyEOALdJiVA--HusgJeGHJZXfPExVEL-PTFN0m2n0RK725GMhJoPn7BWvN6nNfhv5JbDiAxL7u6LU46vw8Xb06UdsWNBUe7D7g368w~09~sjG2vFHCBomWMzZ2rTLNptufch7wkX-I71u1aNQbak48JzHHkaoQYzdFXnNo3CQ-htbjrgvMkMOZtWSMzrFDks0tB~zH5y7lzdYt9GMdadDgXrr-KkjhLkc3LppLT9KX~WBdtuqlU6SQ5zRGBKXHgZBaWZqcoMjM9hKD7QVxh-m8zM6zCeFF3odpoamD011Hb5aiQvL4hoeWr6KeCQ6inrHssDIO11wi~iOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="resize"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-1 p-2  w-full lg:pb-4 lg:gap-3">
                <p className=" font-medium text-sm text-gray-8 lg:font-semibold lg:text-xl ">
                  {data.branch}
                </p>
                <p className=" text-[10px] text-center lg:font-medium lg:text-sm">
                  {data.branchAddress}
                </p>
                <button className=" relative group border  border-primaryGreen rounded text-sm  px-10 md:px-4  py-[6px] z-[1] overflow-hidden hidden ">
                  <span className="w-full h-full translate-x-96   bg-primaryGreen inset-0 absolute -z-[1] group-hover:translate-x-0 duration-500"></span>
                  <div className=" flex items-center justify-between gap-5">
                    <span className="group-hover:text-white duration-500">
                      بیشتر
                    </span>
                    <ArrowLeft2 className="hidden md:block group-hover:text-white duration-500 text-primaryGreen" />
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default BranchCard;
