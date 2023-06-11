import userImg from "../../assets/user-pic.jpg";
function UserComment() {
  return (
    <div className=" py-5 px-4  w-64 bg-white flex  justify-around items-start rounded-[4px] border border-gray-4 md:rounded-lg gap-2 text-[10px] relative md:px-9 md:py-6 md:w-[600px] md:items-center md:gap-3">
      <div className="flex flex-col gap-1 items-center justify-center [&>*:p]:text-center text-gray-7 md:text-sm">
        <div className="w-14 h-14 md:w-24 md:h-24 ">
          {" "}
          <img
            src={userImg}
            alt="user-profile"
            className=" w-full h-full rounded-full  "
          />
        </div>
        <p>نام کاربر</p>
        <p>۲۳ اسفند ۱۴۰۲</p>
      </div>
      <article className=" leading-5 text-justify text-gray-8 md:text-base">
        از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو
        اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم.{" "}
      </article>
      <div className=" absolute bottom-2 left-6 flex  justify-evenly items-center w-8 md:text-base md:gap-3 md:w-10 ">
        {" "}
        <div
          id="maskDiv"
          className=" box-border w-4 h-4 star-clip relative bg-gray-4"
        >
          <div className="star-clip bg-white w-3 h-3 absolute top-[2px] left-[2px]  bg-gradient-to-t from-warnning-light to-white via-white from-50%"></div>
        </div>
        <span>۳</span>
      </div>
    </div>
  );
}

export default UserComment;
