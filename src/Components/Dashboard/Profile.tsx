import { ArrowRight2, Edit } from "iconsax-react";
import Button from "../Button/Button";
import { useState } from "react";
import MultiDatePicker from "../MultiDatePicker/MultiDatePicker";

function Profile() {
  const [isDisable, setIsDisable] = useState(true);
  console.log(isDisable);
  const setDisableHandler = () => {
    setIsDisable(!isDisable);
    console.log(isDisable);
  };
  console.log(isDisable);
  return (
    <div className=" w-full h-screen absolute top-0 right-0   px-6 bg-white md:static  md:h-[400px] md:w-4/5  md:border md:border-gray-4 md:rounded-md  ">
      <header className=" flex justify-center items-center py-6 md:border-b md:border-b-gray-5 mb-2 ">
        <ArrowRight2 className=" md:hidden" />
        <h1 className="w-full text-center md:text-start  ">
          {isDisable ? "پروفایل من" : "ویرایش اطلاعات شخصی "}
        </h1>
      </header>
      <form className=" flex flex-col gap-6 justify-center items-center p-10">
        <div className=" w-full grid md:grid-cols-2 gap-4  md:flex-row md:flex-wrap">
          <div className=" relative">
            {!isDisable && (
              <label className=" absolute -top-3 right-4 text-sm bg-white text-gray-8 px-1 ">
                نام
              </label>
            )}
            <input
              type="text"
              placeholder="نام"
              className={` w-full bg-white px-4 py-2 rounded-md border border-gray-4 ${
                !isDisable
                  ? " text-gray-7 outline-primaryGreen border-gray-7"
                  : "text-gray-6"
              }`}
              disabled={isDisable}
            />
          </div>
          <div className="relative">
            {!isDisable && (
              <label className=" absolute -top-3 right-4 text-sm bg-white text-gray-8 px-1 ">
                نام خانوادگی
              </label>
            )}
            <input
              type="text"
              placeholder="نام خانوادگی"
              className={` w-full bg-white px-4 py-2 rounded-md border border-gray-4  ${
                !isDisable
                  ? " text-gray-7 outline-primaryGreen border-gray-7"
                  : "text-gray-6"
              }`}
              disabled={isDisable}
            />
          </div>
          <div className="relative">
            {!isDisable && (
              <label className=" absolute -top-3 right-4 text-sm bg-white text-gray-8 px-1 ">
                آدرس ایمیل
              </label>
            )}
            <input
              type="text"
              placeholder="آدرس ایمیل"
              className={` w-full bg-white px-4 py-2 rounded-md border border-gray-4  ${
                !isDisable
                  ? " text-gray-7 outline-primaryGreen border-gray-7"
                  : "text-gray-6"
              }`}
              disabled={isDisable}
            />
          </div>
          <div className="relative">
            {!isDisable && (
              <label className=" absolute -top-3 right-4 text-sm bg-white text-gray-8 px-1 ">
                شماره همراه
              </label>
            )}
            <input
              type="text"
              placeholder="۰۹۳۴۳۴۴۵۲۳۴"
              className={` w-full bg-white px-4 py-2 rounded-md border border-gray-4  ${
                !isDisable
                  ? " text-gray-7 outline-primaryGreen border-gray-7"
                  : "text-gray-6"
              }`}
              disabled={isDisable}
            />
          </div>
          <div className="relative">
            {!isDisable && (
              <label className=" absolute -top-3 right-4 text-sm bg-white text-gray-8 px-1 ">
                تاریخ تولد(اختیاری)
              </label>
            )}

            <div className=" [&>*]:w-full">
              {" "}
              <MultiDatePicker
                placeholder="تاریخ تولد(اختیاری)"
                disable={isDisable}
                ExtraClass={` w-full  bg-white !px-4 !py-2 rounded-md border border-gray-4  ${
                  !isDisable
                    ? " text-gray-7 outline-primaryGreen border-gray-7"
                    : "text-gray-6"
                }`}
              />
            </div>
          </div>
          <div className="relative">
            {!isDisable && (
              <label className=" absolute -top-3 right-4 text-sm bg-white text-gray-8 px-1 ">
                نام نمایشی
              </label>
            )}
            <input
              type="text"
              placeholder="نام نمایشی"
              className={` w-full  bg-white px-4 py-2 rounded-md border border-gray-4  ${
                !isDisable
                  ? " text-gray-7 outline-primaryGreen border-gray-7"
                  : "text-gray-6"
              }`}
              disabled={isDisable}
            />
          </div>
        </div>
        {isDisable ? (
          <div onClick={setDisableHandler}>
            <Button
              type="submit"
              ExtraClass=" p-2 bg-white !text-primaryGreen flex items-center gap-2 border hover:!text-white "
            >
              <Edit size={16} />
              <span>ویرایش اطلاعات شخصی </span>
            </Button>
          </div>
        ) : (
          <div className=" flex w-full justify-end gap-2">
            <div onClick={setDisableHandler}>
              <Button ExtraClass=" p-2 px-4 bg-white !text-primaryGreen flex items-center gap-2 border hover:!text-white ">
                <span> انصراف </span>
              </Button>
            </div>
            <div onClick={setDisableHandler}>
              <Button ExtraClass=" p-2" type="submit">
                ذخیره اطلاعات
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Profile;
