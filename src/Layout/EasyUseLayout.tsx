import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ArrowDown2 } from "iconsax-react";
type EasyUseLayoutType = {
  children?: React.ReactNode;
  bannerUrl: string;
  bannerText: string;
  QuestionsData: {
    question: string;
    answer: string;
  }[];
};
function EasyUseLayout({
  bannerUrl,
  bannerText,
  QuestionsData,
}: EasyUseLayoutType) {
  const [indexList, setIndexList] = useState<number[] | []>([]);
  const includesIndex = (index: number) => {
    return (indexList as number[]).includes(index);
  };
  const accordionHandler = (index: number) => {
    if (!(indexList as number[]).includes(index))
      setIndexList((prevState) => [...prevState, index]);
    else {
      setIndexList(indexList.filter((il) => il !== index));
    }
  };
  return (
    <>
      <div className=" w-full h-44 md:h-72 relative">
        <img src={bannerUrl} alt="بنر" className=" w-full h-full object-fill" />
        <h1 className=" text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center lg:text-3xl">
          {bannerText}
        </h1>
      </div>
      {/* nav */}
      <div className=" bg-gray-3 w-full  px-5  md:px-28 ">
        <nav className=" flex gap-4 md:gap-8">
          <NavLink
            to="/FAQ"
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "border-b-2 border-b-primaryGreen text-sm font-estedadBold  text-primaryGreen  md:text-xl  md:font-bold"
                  : " text-xs  text-gray-7 md:text-xl  py-2 md:py-4 "
              }   flex justify-center items-center duration-300`
            }
          >
            سوالات متداول
          </NavLink>
          <NavLink
            to="/rules"
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "border-b-2 border-b-primaryGreen text-sm font-estedadBold  text-primaryGreen  md:text-xl  md:font-bold"
                  : " text-xs  text-gray-7 md:text-xl  py-2 md:py-4 "
              }   flex justify-center items-center duration-300`
            }
          >
            قوانین ترخینه
          </NavLink>
          <NavLink
            to="/privacy"
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "border-b-2 border-b-primaryGreen text-sm font-estedadBold  text-primaryGreen  md:text-xl  md:font-bold"
                  : " text-xs  text-gray-7 md:text-xl  py-2 md:py-4 "
              }   flex justify-center items-center duration-300`
            }
          >
            حریم خصوصی
          </NavLink>
        </nav>
      </div>
      <section className="  px-5 md:px-24 py-3 pb-6 md:py-6 ">
        <div className=" w-full border border-gray-4 rounded-xl ">
          {QuestionsData.map((data, index) => {
            return (
              <div
                className={` w-full py-2 px-4  flex flex-col justify-between items-center cursor-pointer ${
                  includesIndex(index) ? " gap-2 md:gap-5" : " gap-0"
                } duration-500 ease-in-out border-b border-b-gray-4 last:border-b-0`}
                onClick={() => accordionHandler(index)}
              >
                <div
                  className={` w-full  flex justify-between items-center ${
                    includesIndex(index) ? " text-primaryGreen" : " text-gray-8"
                  } duration-300`}
                >
                  {" "}
                  <span>{data.question}</span>
                  <ArrowDown2 className=" w-4 h-4 md:w-8 md:h-8" />
                </div>

                <div
                  className={` text-gray-7 text-[10px] md:text-base duration-500 ease-linear self-start ${
                    includesIndex(index) ? "w-auto h-auto px-3" : "w-0 h-0"
                  } whitespace-pre-line`}
                >
                  {includesIndex(index) ? data.answer : null}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default EasyUseLayout;
