import { Bank, Book1, Chart, EmptyWallet, FolderAdd } from "iconsax-react";
import banner from "../assets/banner/franchise.jpg";
import MultiDatePicker from "../Components/MultiDatePicker/MultiDatePicker";
import Button from "../Components/Button/Button";
import { useState } from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({
  text,
}: {
  lat: number;
  lng: number;
  text: string;
}) => <div>{text}</div>;
const inputStyle =
  "  px-2 lg:px-4 py-3 focus:outline-primaryGreen border border-gray-4 rounded w-full ";

function Franchise() {
  const ostanList = [
    "تهران",
    "اصفهان ",
    "زنجان",
    "تبریز",
    "خوزستان",
    " سیستان و بلوچستان",
    "خراسان",
    "بندرعباس",
    "مازندران",
    "گیلان",
  ];
  const [isOpenList, setIsOpenList] = useState({
    State: false,
    Area: false,
    City: false,
  });
  const defaultProps = {
    center: {
      lat: 51.4934,
      lng: 0.0098,
    },
    zoom: 11,
  };
  return (
    <div>
      {" "}
      <div className=" w-full h-44 md:h-72 relative">
        <img src={banner} alt="بنر" className=" w-full h-full object-fill" />
        <h1 className=" text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center lg:text-3xl">
          همین الان به خانواده بزرگ ترخینه بپیوندید!
        </h1>
      </div>
      <section className=" px-5 lg:px-24 py-4 lg:py-12 ">
        {/*********/}
        <div className=" flex justify-evenly items-start gap-6 md:gap-10 md:px-6 pb-5 md:pb-12 border-b-2 border-gray-4">
          <div className=" flex flex-col  justify-between items-center md:gap-4 hover:scale-110  duration-300">
            <div className="border border-primaryGreen rounded-full p-2 md:p-8">
              {" "}
              <Bank className=" w-4 h-4 md:w-12 md:h-12 text-primaryGreen" />
            </div>
            <p className="text-gray-7 md:text-md w-16 text-center md:w-full text-[10px]">
              بیش از 20 شعبه فعال در سراسر کشور
            </p>
          </div>{" "}
          <div className=" flex flex-col  justify-between items-center md:gap-4 hover:scale-110  duration-300">
            <div className="border border-primaryGreen rounded-full p-2 md:p-8">
              {" "}
              <EmptyWallet className=" w-4 h-4 md:w-12 md:h-12 text-primaryGreen" />
            </div>
            <p className="text-gray-7 md:text-md w-16 text-center md:w-full text-[10px]">
              تسهیلات راه‌اندازی رستوران و تجهیز آن
            </p>
          </div>{" "}
          <div className=" flex flex-col  justify-between items-center md:gap-4 hover:scale-110  duration-300">
            <div className="border border-primaryGreen rounded-full p-2 md:p-8">
              {" "}
              <Chart className=" w-4 h-4 md:w-12 md:h-12 text-primaryGreen" />
            </div>
            <p className="text-gray-7 md:text-md w-14 text-center md:w-full text-[10px]">
              طرح‌های تشویقی ارتقای فروش
            </p>
          </div>{" "}
          <div className=" flex flex-col  justify-between items-center md:gap-4 hover:scale-110  duration-300">
            <div className="border border-primaryGreen rounded-full p-2 md:p-8">
              {" "}
              <Book1 className=" w-4 h-4 md:w-12 md:h-12 text-primaryGreen" />
            </div>
            <p className="text-gray-7 md:text-md w-14 text-center md:w-full text-[10px]">
              اعطای دستورالعمل پخت غذاها
            </p>
          </div>
        </div>
        {/********/}
        <div className=" py-12 flex flex-col justify-center items-center  border-b-2 border-gray-4">
          <h1 className=" font-bold lg:text-2xl">مزیت دریافت نمایندگی</h1>
          <div className=" flex flex-col justify-center items-start md:flex-row md:gap-8 mt-6">
            <ul>
              <li className="flex justify-start items-center gap-1 mb-4">
                <div className=" w-3 h-3 border-2 border-primaryGreen rounded-sm rotate-45 inline-block "></div>
                استفاده از برند شناخته شده ترخینه
              </li>
              <li className="flex justify-start items-center gap-1 mb-4">
                <div className=" w-3 h-3 border-2 border-primaryGreen rounded-sm rotate-45 inline-block "></div>
                به حداقل رساندن ریسک سرمایه گذاری
              </li>
              <li className="flex justify-start items-center gap-1 mb-4">
                <div className=" w-3 h-3 border-2 border-primaryGreen rounded-sm rotate-45 inline-block "></div>
                تسریع روند بازگشت سرمایه
              </li>
              <li className="flex justify-start items-center gap-1 mb-4">
                <div className=" w-3 h-3 border-2 border-primaryGreen rounded-sm rotate-45 inline-block "></div>
                مشاوره های تخصصی جهت مدیریت رستوران
              </li>
            </ul>
            <ul>
              <li className="flex justify-start items-center gap-1 mb-4">
                <div className=" w-3 h-3 border-2 border-primaryGreen rounded-sm rotate-45 inline-block "></div>
                مشاوره در امور حقوقی، مالی و مالیاتی
              </li>
              <li className="flex justify-start items-center gap-1 mb-4">
                <div className=" w-3 h-3 border-2 border-primaryGreen rounded-sm rotate-45 inline-block "></div>
                پشتیبانی بازاریابی و منابع انسانی
              </li>
              <li className="flex justify-start items-center gap-1 mb-4">
                <div className=" w-3 h-3 border-2 border-primaryGreen rounded-sm rotate-45 inline-block "></div>
                دریافت مشاوره جهت تامین مواد اولیه و تجهیزات
              </li>
              <li className="flex justify-start items-center gap-1 mb-4">
                <div className=" w-3 h-3 border-2 border-primaryGreen rounded-sm rotate-45 inline-block "></div>
                طرح های تشویقی برای ارتقا فروش
              </li>
            </ul>
          </div>
        </div>
        {/*******/}
        <div className=" py-12 flex flex-col justify-center items-center  border-b-2 border-gray-4">
          {" "}
          <h1 className=" font-bold lg:text-2xl mb-6"> دریافت مشاوره</h1>
          <form className=" flex flex-col gap-3 md:gap-6 w-full justify-center items-center">
            <div className=" flex flex-col md:flex-row  gap-3 md:gap-6 w-full justify-center items-center [&>*]:w-full">
              {" "}
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className={`${inputStyle}`}
              />
              <input
                type="text"
                placeholder="شماره تماس"
                className={`${inputStyle}`}
              />
              <MultiDatePicker />
            </div>
            <div>
              <Button type="submit" ExtraClass=" py-2 px-4">
                درخواست مشاوره
              </Button>
            </div>
          </form>
        </div>
        {/*******/}
        <div className=" py-8 px-3 md:py-6 border border-gray-4 rounded mt-12 flex flex-col justify-center items-center ">
          <h1 className=" font-bold lg:text-2xl mb-6 ">فرم درخواست نمایندگی</h1>
          <form className=" w-full flex flex-col items-start gap-10">
            <div className="w-full">
              <h1 className=" lg:text-lg mb-6 "> مشخصات فرد متقاضی </h1>
              <div className=" flex flex-col md:flex-row  gap-3 md:gap-6 w-full justify-center items-center [&>*]:w-full">
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className={`${inputStyle}`}
                />
                <input
                  type="text"
                  placeholder=" کد ملی"
                  className={`${inputStyle}`}
                />
                <input
                  type="text"
                  placeholder="شماره تماس"
                  className={`${inputStyle}`}
                />
              </div>
            </div>
            <div className="w-full">
              <h1 className=" lg:text-lg mb-6"> آدرس ملک متقاضی </h1>
              <div className=" flex flex-col md:flex-row  gap-3 md:gap-6 w-full justify-center items-start [&>*]:w-full ">
                <div className=" flex flex-col gap-3 relative">
                  {" "}
                  <input
                    type="text"
                    placeholder="استان"
                    className={`${inputStyle} `}
                    onClick={() => {
                      setIsOpenList({
                        ...isOpenList,
                        State: !isOpenList.State,
                      });
                    }}
                  />
                  {
                    <DropDownList
                      list={ostanList}
                      isOpen={isOpenList}
                      setIsOpen={() => {
                        setIsOpenList({
                          ...isOpenList,
                          State: !isOpenList.State,
                        });
                      }}
                      value="State"
                      style="top-14"
                    />
                  }
                  <input
                    type="text"
                    placeholder="منطقه"
                    className={`${inputStyle} `}
                    onClick={() => {
                      setIsOpenList({
                        ...isOpenList,
                        Area: !isOpenList.Area,
                      });
                    }}
                  />
                  {
                    <DropDownList
                      list={ostanList}
                      isOpen={isOpenList}
                      setIsOpen={() => {
                        setIsOpenList({
                          ...isOpenList,
                          Area: !isOpenList.Area,
                        });
                      }}
                      value="Area"
                      style="top-28"
                    />
                  }
                </div>
                <div className=" flex flex-col gap-3 relative">
                  <input
                    type="text"
                    placeholder="شهر"
                    className={`${inputStyle}`}
                    onClick={() => {
                      setIsOpenList({
                        ...isOpenList,
                        City: !isOpenList.City,
                      });
                    }}
                  />
                  {
                    <DropDownList
                      list={ostanList}
                      isOpen={isOpenList}
                      setIsOpen={() => {
                        setIsOpenList({
                          ...isOpenList,
                          City: !isOpenList.City,
                        });
                      }}
                      value="City"
                      style="top-14"
                    />
                  }
                  <textarea
                    placeholder="آدرس دقیق"
                    className={`${inputStyle}`}
                  />
                </div>
                <div style={{ height: "22vh", width: "100%" }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  >
                    <AnyReactComponent
                      lat={59.955413}
                      lng={30.337844}
                      text="My Marker"
                    />
                  </GoogleMapReact>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h1 className=" lg:text-lg mb-6 md:text-lg">
                {" "}
                مشخصات ملک متقاضی{" "}
              </h1>
              <div className=" flex flex-col md:flex-row  gap-3 md:gap-6 w-full justify-center items-center [&>*]:w-full">
                <input
                  type="text"
                  placeholder="نوع مالکیت"
                  className={`${inputStyle}`}
                />
                <input
                  type="text"
                  placeholder=" مساحت ملک(متر مربع)"
                  className={`${inputStyle}`}
                />
                <input
                  type="text"
                  placeholder="سن بنا"
                  className={`${inputStyle}`}
                />
              </div>
            </div>
            <div className="w-full">
              {" "}
              <h1 className=" lg:text-lg mb-6 md:text-lg">
                {" "}
                امکانات ملک متقاضی{" "}
              </h1>
              <div className=" flex flex-col md:flex-row gap-4">
                <div className=" w-full md:w-5/12">
                  <h4 className="mb-6 text-gray-7 "> ملک متقاضی </h4>
                  <div className=" w-max md:w-auto grid grid-cols-2 gap-4">
                    <div className=" flex gap-2 items-center ">
                      <input type="checkbox" className=" accent-primaryGreen" />
                      <label htmlFor="#" className=" text-gray-7 text-sm">
                        پروانه کسب دارد.
                      </label>
                    </div>
                    <div className=" flex gap-2 items-center">
                      <input type="checkbox" className=" accent-primaryGreen" />
                      <label htmlFor="#" className=" text-gray-7 text-sm">
                        آشپزخانه دارد.
                      </label>
                    </div>
                    <div className=" flex gap-2 items-center">
                      <input type="checkbox" className=" accent-primaryGreen" />
                      <label htmlFor="#" className=" text-gray-7 text-sm">
                        پارکینگ دارد.
                      </label>
                    </div>
                    <div className=" flex gap-2 items-center">
                      <input type="checkbox" className=" accent-primaryGreen" />
                      <label htmlFor="#" className=" text-gray-7 text-sm">
                        انبار دارد.
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" w-full">
                  {" "}
                  <h4 className="mb-6 text-gray-7 "> امکانات ملک متقاضی </h4>
                  <div className="w-full">
                    <label className=" flex flex-col justify-center items-center py-12 border-2 border-gray-4 rounded cursor-pointer gap-2">
                      <FolderAdd
                        size={48}
                        className=" md:w-16 md:h-16 text-gray-7"
                      />
                      <h1 className=" text-gray-7 md:text-lg">
                        تصاویری از ملک را بارگذاری کنید...
                      </h1>
                      <input type="file" className=" sr-only " />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <Button
                type="submit"
                ExtraClass=" py-2 px-4 flex  justify-center items-center"
              >
                ثبت اطلاعات
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Franchise;
const DropDownList = ({
  list,
  isOpen,
  setIsOpen,
  value,
  style,
}: {
  list: string[];
  isOpen: { State: boolean; Area: boolean; City: boolean };
  setIsOpen: (isOpen) => void;
  value: string;
  style: string;
}) => {
  console.log(value);
  return (
    <div
      className={` absolute w-full h-48  overflow-auto  bg-white shadow px-3 rounded ${
        isOpen[value] ? "block" : "hidden"
      } ${style}`}
      dir="ltr"
    >
      <ul
        dir="rtl"
        className="  [&>*:not(last-child)]:border-b  [&>*:not(last-child)]:border-b-gray-3 [&>*]:cursor-pointer hover:[&>*]:bg-gray-1 hover:[&>*]:text-gray-7 hover:[&>*]:duration-300"
      >
        {list.map(() => {
          return (
            <li
              className=" py-3 text-gray-7 "
              onClick={() => {
                setIsOpen((prevState) => {
                  return { ...prevState, [value]: false };
                });
              }}
            >
              تهران
            </li>
          );
        })}
      </ul>
    </div>
  );
};
