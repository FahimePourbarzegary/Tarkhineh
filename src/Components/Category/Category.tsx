import CategoryData from "./CategoryData";
function Category() {
  return (
    <section className=" grid grid-cols-2  justify-center items-center gap-20  px-20 mt-16  py-16 md:gap-40 md:px-24 md:py-32 xl:grid-cols-4">
      {CategoryData.map((data) => {
        return (
          <div className="relative flex flex-col justify-center items-center hover:scale-105 duration-300">
            <div className=" h-20 w-40 rounded border border-primaryGreen md:w-72 md:h-[180px]"></div>
            <div className=" absolute w-[110px] h-auto -top-14 md:w-60 md:-top-32 ">
              <img src={data.imgUrl} alt={data.title} />
            </div>
            <div className=" absolute top-16 md:top-40">
              <button
                className={` bg-primaryGreen text-white text-xs rounded w-[71px] h-8 md:w-[155px] md:h-12 md:text-xl hover:bg-shade-3 hover:scale-110 duration-100 `}
              >
                {data.title}
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Category;
