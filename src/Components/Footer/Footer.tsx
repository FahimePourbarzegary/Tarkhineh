import footerImg from "../../assets/footer.jpg";
import tewitterLogo from "../../assets/tewitter.svg";
import instagramLogo from "../../assets/instagram.svg";
import telegramLogo from "../../assets/telegram.svg";
import InputFooter from "./InputFooter";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className={` bg-black h-48 w-full relative md:h-80 `}>
      {/*Footer image */}
      <div
        className=" opacity-25 h-full bg-center  bg-no-repeat bg-cover  "
        style={{ backgroundImage: `url(${footerImg})` }}
      ></div>
      {/* Footer sections */}
      <div className="grid grid-cols-2 w-full absolute top-0 left-0 text-white pt-4 pb-6 pr-5 md:grid-cols-4 md:pt-8 md:px-8">
        {/* section easy access */}
        <section>
          {/* title */}
          <h6 className=" text-xs font-normal leading-6 mb-2 md:font-bold md:text-xl md:leading-7 md:mb-4">
            دسترسی آسان
          </h6>
          {/* links */}
          <ul className=" [&>*]:text-[10px] [&>*]:font-normal flex flex-col items-start gap-2 md:gap-4 pr-3 md:[&>*]:font-medium md:[&>*]:text-sm ">
            <li>
              <Link to={"/FAQ"} className="hover:text-gray-5 duration-500">
                پرسش های متداول
              </Link>
            </li>
            <li>
              <Link to={"/rules"} className="hover:text-gray-5 duration-500">
                قوانین ترخینه
              </Link>
            </li>
            <li>
              <Link to={"/privacy"} className="hover:text-gray-5 duration-500">
                حریم خصوصی
              </Link>
            </li>
            <li>
              <a href="#" className=" flex justify-center items-center gap-2">
                <img src={tewitterLogo} className="md:h-4" alt="tewitter" />
                <img src={instagramLogo} className="md:h-4" alt="instagram" />
                <img src={telegramLogo} className="md:h-4" alt="telegram" />
              </a>
            </li>
          </ul>
        </section>
        {/* section locations */}
        <section>
          {/* title */}
          <h6 className=" text-xs font-normal leading-6 mb-2 md:font-bold md:text-xl md:leading-7">
            شعبه های ترخینه
          </h6>
          {/* links */}
          <ul className=" [&>*]:text-[10px] [&>*]:font-normal flex flex-col items-start gap-2 pr-3 md:[&>*]:font-medium md:[&>*]:text-sm ">
            <li>
              <a href="#" className="hover:text-gray-5 duration-500">
                شعبه چالوس
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-5 duration-500">
                شعبه اکباتان
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-5 duration-500">
                شعبه اقدسیه
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-5 duration-500">
                شعبه ونک
              </a>
            </li>
          </ul>
        </section>
        {/* section contact us */}
        <section className="  hidden lg:block col-span-2">
          {/* title */}
          <h5 className=" font-bold text-xl">پیام به ترخینه</h5>
          <div className="  grid grid-cols-2 gap-x-6 p-4">
            <div className="flex flex-col gap-y-4">
              <InputFooter type="text" placeholder="نام و نام خانوادگی" />
              <InputFooter type="phone" placeholder=" شماره تماس" />
              <InputFooter type="text" placeholder="ایمیل (اختیاری)" />
            </div>
            <div className="h-full w-full  ">
              <textarea
                name=""
                className="h-full w-full bg-transparent border border-white/40 rounded text-sm  px-4 py-2 focus:border-0 focus:outline-white/30"
                placeholder="پیام شما"
                maxLength={200}
              ></textarea>
              <p className="w-full  flex flex-row-reverse  text-xs ">۰/۲۰۰</p>
              <div className="py-2">
                <button className="w-full relative group border border-white/40 rounded text-sm  px-4 py-2 z-[1] overflow-hidden ">
                  <span className="w-full h-full translate-x-96 rounded bg-white inset-0 absolute -z-[1] group-hover:translate-x-0 duration-500"></span>
                  <span className="group-hover:text-black duration-500">
                    ارسال پیام
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
