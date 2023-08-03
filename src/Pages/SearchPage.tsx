import { useState } from "react";
import notFoundimage from "../assets/searchnotfound.svg";
import InputSearch from "../Components/InputSearch/InputSearch";
import ProductCard from "../Components/ProductCard/ProductCard";
function SearchPage() {
  const [filteredSearch] = useState([{},{}]);
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
           {filteredSearch.map((()=>{
            return <ProductCard/>
           }))}
       
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
