import banner from "../assets/banner/aboutus.jpg";
import aboutus from "../assets/aboutus.png";
import { Diagram, HomeWifi, MenuBoard, User } from "iconsax-react";
function AboutUsPage() {
  return (
    <div>
      <div className=" w-full h-44 md:h-72 relative">
        <img src={banner} alt="بنر" className=" w-full h-full object-fill" />
        <h1 className=" text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold lg:text-[40px]">
          درباره ترخینه بیشتر بدانید!
        </h1>
      </div>
      <article className=" p-5 lg:py-12 lg:px-24 overflow-auto">
        <h1 className=" text-gray-8 font-bold lg:text-2xl mb-1 lg:mb-6">
          درباره ما
        </h1>
        <div className="lg:flex lg:justify-between  gap-4 lg:gap-6 lg:w-full">
          <img
            src={aboutus}
            alt="درباره ما"
            className=" h-32  float-left mr-4 mb-4 lg:h-full lg:m-0 order-2"
          />
          <p className=" text-justify text-gray-6 text-[10px] lg:text-xl lg:leading-7  order-1">
            رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
            این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در
            تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولیت جلب
            رضایت مشتریان بوده است.
            <br /> دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این زمان‌ها
            کیفیت غذاهای خودرا در بهترین حالت نگه داشته و حتی با نوسانات
            قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته است. ترخینه
            شعبات خود را افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای برگزاری
            جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با کیفیت بالا
            را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه پله مدرن و
            آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس به شما
            عزیزان می‌باشند.
            <br /> چشم انداز: در آینده‌ای نزدیک تالار پذیرایی شعبات راه اندازی
            شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید
            آن روز که همه ایرانیان سالم و سلامت باشند.
          </p>
        </div>
        <div></div>
      </article>
      <div className=" px-5 py-3 lg:py-4 lg:px-24  flex justify-between items-center bg-gray-3 text-[10px] ">
        <div className=" flex flex-col  justify-between items-center lg:gap-4 [&>*]:hover:text-primaryGreen hover:cursor-pointer duration-300">
          <User className=" w-4 h-4 lg:w-12 lg:h-12 text-gray-8" />
          <p className="text-gray-7 lg:text-lg w-14 text-center lg:w-full">
            {" "}
            پرسنل مجرب و حرفه ای
          </p>
        </div>

        <div className=" flex flex-col  justify-between items-center lg:gap-4 [&>*]:hover:text-primaryGreen hover:cursor-pointer duration-300">
          <Diagram className=" w-4 h-4 lg:w-12 lg:h-12 text-gray-8" />
          <p className="text-gray-7 lg:text-lg w-14 text-center lg:w-full">
            {" "}
            کیفیت بالای غذاها
          </p>
        </div>
        <div className=" flex flex-col  justify-between items-center lg:gap-4 [&>*]:hover:text-primaryGreen hover:cursor-pointer duration-300">
          <HomeWifi className=" w-4 h-4 lg:w-12 lg:h-12 text-gray-8" />
          <p className="text-gray-7 lg:text-lg w-16 text-center lg:w-full">
            {" "}
            محیط دلنشیت و آرام
          </p>
        </div>
        <div className=" flex flex-col  justify-between items-center lg:gap-4 [&>*]:hover:text-primaryGreen hover:cursor-pointer duration-300">
          <MenuBoard className=" w-4 h-4 lg:w-12 lg:h-12 text-gray-8" />
          <p className="text-gray-7 lg:text-lg w-14 text-center lg:w-full">
            منوی متنوع
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
