import { useState } from "react";
import notFoundimage from "../assets/searchnotfound.svg";
import InputSearch from "../Components/InputSearch/InputSearch";
import { Heart, Star1 } from "iconsax-react";
import image from "../assets/food.jpg";
function SearchPage() {
  const [filteredSearch, setFilteredSearch] = useState([{}]);
  return (
    <section className="flex flex-col justify-center items-center my-12">
      {filteredSearch.length ? (
        <>
          {" "}
          <div className=" text-2xl font-bold ">
            <span className=" text-xl text-gray-8">نتایج جستجو برای:</span>
            <span className=" text-primaryGreen mr-2">پاستا </span>
          </div>
          <InputSearch ExtraCssDiv="w-[300px] rounded-lg md:w-[395px]" />
          {/* Search Card */}
          <div className=" grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 ">
            {/* Card */}
            <div className=" w-64 md:w-72 bg-white border border-gray-2 rounded-lg overflow-hidden">
              <img
                src={image}
                alt="image"
                className=" w-full h-28 object-cover md:h-60"
              />
              <div className=" flex flex-col gap-y-2 my-2 md:gap-y-4 md:my-4 justify-center items-center">
                <p>پاستا رژیمی</p>
                <div className="flex justify-between items-center w-full px-2 md:px-4">
                  <div className=" flex flex-col gap-1">
                    <div className="flex text-[10px] text-gray-5 items-center gap-1">
                      <Heart size={16} />
                      <p>افزودن به علاقمندی ها</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star1 size={16} className="" />
                      <span className=" font-estedadMedium text-sm">
                        5
                      </span>{" "}
                      <span className=" text-[10px] text-gray-5">
                        (62 امتیاز )
                      </span>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-1">
                    <div className="flex text-[10px] text-gray-5 items-center gap-1 justify-end">
                      <span className=" line-through">175000</span>
                      <span className=" text-error">20%</span>
                    </div>
                    <div>
                      <span>15000 تومان</span>
                    </div>
                  </div>
                </div>
                <button className="  mx-2 md:mx-4 bg-primaryGreen py-2 px-5 text-sm md:text-base md:px-14 md:py-2 text-white rounded">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
            {/* Card */}
            <div className=" w-64 md:w-72 bg-white border border-gray-2 rounded-lg overflow-hidden">
              <img
                src={image}
                alt="image"
                className=" w-full h-28 object-cover md:h-60"
              />
              <div className=" flex flex-col gap-y-2 my-2 md:gap-y-4 md:my-4 justify-center items-center">
                <p>پاستا رژیمی</p>
                <div className="flex justify-between items-center w-full px-2 md:px-4">
                  <div className=" flex flex-col gap-1">
                    <div className="flex text-[10px] text-gray-5 items-center gap-1">
                      <Heart size={16} />
                      <p>افزودن به علاقمندی ها</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star1 size={16} className="" />
                      <span className=" font-estedadMedium text-sm">
                        5
                      </span>{" "}
                      <span className=" text-[10px] text-gray-5">
                        (62 امتیاز )
                      </span>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-1">
                    <div className="flex text-[10px] text-gray-5 items-center gap-1 justify-end">
                      <span className=" line-through">175000</span>
                      <span className=" text-error">20%</span>
                    </div>
                    <div>
                      <span>15000 تومان</span>
                    </div>
                  </div>
                </div>
                <button className="  mx-2 md:mx-4 bg-primaryGreen py-2 px-5 text-sm md:text-base md:px-14 md:py-2 text-white rounded">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
            {/* Card */}
            <div className=" w-64 md:w-72 bg-white border border-gray-2 rounded-lg overflow-hidden">
              <img
                src={image}
                alt="image"
                className=" w-full h-28 object-cover md:h-60"
              />
              <div className=" flex flex-col gap-y-2 my-2 md:gap-y-4 md:my-4 justify-center items-center">
                <p>پاستا رژیمی</p>
                <div className="flex justify-between items-center w-full px-2 md:px-4">
                  <div className=" flex flex-col gap-1">
                    <div className="flex text-[10px] text-gray-5 items-center gap-1">
                      <Heart size={16} />
                      <p>افزودن به علاقمندی ها</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star1 size={16} className="" />
                      <span className=" font-estedadMedium text-sm">
                        5
                      </span>{" "}
                      <span className=" text-[10px] text-gray-5">
                        (62 امتیاز )
                      </span>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-1">
                    <div className="flex text-[10px] text-gray-5 items-center gap-1 justify-end">
                      <span className=" line-through">175000</span>
                      <span className=" text-error">20%</span>
                    </div>
                    <div>
                      <span>15000 تومان</span>
                    </div>
                  </div>
                </div>
                <button className="  mx-2 md:mx-4 bg-primaryGreen py-2 px-5 text-sm md:text-base md:px-14 md:py-2 text-white rounded">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <span className=" text-xl text-gray-8">
            موردی با این مشخصات پیدا نکردیم!
          </span>
          <InputSearch ExtraCssDiv="w-[300px] rounded-lg md:w-[395px]" />
          <img
            src={notFoundimage}
            alt="موردی یافت نشد "
            className=" w-1/2 h-1/2"
          />
        </>
      )}
    </section>
  );
}

export default SearchPage;
