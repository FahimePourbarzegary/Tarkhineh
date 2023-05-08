import { useState } from "react";
import logo from "../../assets/Logo.svg";
import logoSidebar from "../../assets/LogoSidebar.svg";
import {
  ArrowDown2,
  CallCalling,
  CloseCircle,
  HambergerMenu,
  Home,
  HomeHashtag,
  MenuBoard,
  Profile2User,
  ShoppingCart,
  User,
} from "iconsax-react";
function Header() {
  const [isToggle, setIsToggle] = useState(true);
  const navbarToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <header className="w-full h-16 flex items-center justify-between p-5 ">
      <div className="w-6 h-6 flex justify-center items-center">
        <HambergerMenu
          size="32"
          color="#417F56"
          onClick={() => navbarToggle()}
          className=" cursor-pointer"
        />
      </div>
      {/* section toggle navbar*/}
      <div
        className={` absolute top-0 right-0 h-screen  ${
          isToggle ? "w-screen" : "w-0"
        } duration-500 transition-all bg-black/40 backdrop-blur-sm z-10  `}
        onClick={() => navbarToggle()}
      ></div>
      {/* section sidebar mobile */}
      <div
        className={`${
          isToggle ? "w-3/4 " : "w-0 [&>*]:hidden"
        } duration-500  h-full bg-white z-20 absolute top-0 right-0`}
      >
        {/* Head */}
        <div className=" bg-gray-8 relative">
          <div
            className=" h-32 opacity-50  w-full  bg-center  bg-no-repeat bg-cover   "
            style={{
              backgroundImage: `url("https://s3-alpha-sig.figma.com/img/1793/6674/832c8a64b2c34d3480247217b7544394?Expires=1684713600&Signature=KZbgInf-cgSYey46B-aVjU-BRx2gws~YO4HMzIS9AJVjMJ3hPch~cNz~f1PKzKRuLt6lJ3IAdP0vtTF6Mxx8omAAJa0emzkKYzeKO4jlSSC3M9nxlXCSeaxRS8vWV7DoSDSsV-v363YUJ2GnaxLcfLGIpewg28BowPXw0bomkj~6C1Lg677iLlaNxLegeN6mrBh5y3dQ8hisLmghZ0BiJKuM6ZPNWqA~lDFV8B2woFn2OkbbOzEJDuCIlhnGh1fV-Wp2EmDJcQssk-PBvzD1mC5sCRzvnz9SC5jDmrhlY8Z7MreHIXLCTKK~6Ohfv3LLG9kyMG6n-goLbCpfIAvYyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")`,
            }}
          ></div>
          <img
            src={logoSidebar}
            alt="logo-sidebar"
            className=" absolute z-40 top-12 right-4 w-28 h-12"
          />
          <CloseCircle
            size="28"
            color="#FFFFFF"
            className=" absolute top-4  left-2"
            onClick={() => navbarToggle()}
          />
        </div>
        {/* Link to Navigate */}
        <nav className="px-4">
          <a
            href="#"
            className="flex items-center gap-2 py-2 text-sm leading-6 border-gray-2 border-b-2 hover:bg-gray-1  hover:text-primaryGreen duration-500"
          >
            <Home size={20} />
            <p className=" text-primaryGreen">صفحه اصلی</p>
          </a>
          <a className="flex justify-between items-center gap-1 cursor-pointer border-gray-2 border-b-2 w-full hover:bg-gray-1  hover:text-primaryGreen duration-500">
            <div className="flex items-center gap-1 py-2 text-sm leading-6">
              {" "}
              <MenuBoard size={20} />
              <p> منو</p>
            </div>
            <ArrowDown2 size={20} />
          </a>
          <a className="flex justify-between items-center gap-1 cursor-pointer border-gray-2 border-b-2 w-full hover:bg-gray-1  hover:text-primaryGreen duration-500">
            <div className="flex grow items-center gap-1 py-2 text-sm leading-6 w-full">
              <HomeHashtag size={20} />
              <p>شعبه</p>
            </div>
            <ArrowDown2 size={20} />
          </a>
          <a
            href="#"
            className="flex items-center gap-1 py-2 text-sm leading-6 border-gray-2 border-b-2 hover:bg-gray-1  hover:text-primaryGreen duration-500"
          >
            <Profile2User size={20} />
            <p> درباره ما</p>
          </a>
          <a
            href="#"
            className="flex items-center gap-1  py-2 text-sm leading-6 border-gray-2 border-b-2 hover:bg-gray-1  hover:text-primaryGreen duration-500 "
          >
            <CallCalling size={20} />
            <p> تماس با ما</p>
          </a>
        </nav>
      </div>
      {/* section logo */}
      <div>
        <img src={logo} alt="logo-header" className=" h-8" />
      </div>
      {/* section navbar Desktop */}
      <div className="hidden md:flex">nav</div>
      {/* section user action */}
      <div className=" flex gap-1 justify-evenly items-center ">
        <div className=" bg-tint-1 p-1 rounded">
          <ShoppingCart size="16" color="#417F56" />
        </div>
        <div className=" bg-tint-1 p-1 rounded">
          <User size="16" color="#417F56" />
        </div>
      </div>
    </header>
  );
}

export default Header;
