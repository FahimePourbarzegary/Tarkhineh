import { useState } from "react";
import logo from "../../assets/Logo.svg";
import {
  ArrowDown2,
  HambergerMenu,
  Heart,
  Location,
  LogoutCurve,
  SearchNormal1,
  ShoppingCart,
  User,
  Wallet2,
} from "iconsax-react";
import SideNav from "./SideNav";
import MainNav from "./MainNav";
import { Link } from "react-router-dom";

function Header() {
  const [isToggle, setIsToggle] = useState(false);
  const [isOpenSettingUser, setIsOpenSettingUser] = useState(false);
  const settingUserData = [
    {
      id: 1,
      title: "پروفایل",
      icon: <User size={16} />,
      route: "/",
    },
    {
      id: 2,
      title: "پیگیری سفارشات",
      icon: <Wallet2 size={16} />,
      route: "/",
    },
    {
      id: 3,
      title: "علاقمندی ها",
      icon: <Heart size={16} />,
      route: "/",
    },
    {
      id: 4,
      title: "آدرس های من",
      icon: <Location size={16} />,
      route: "/",
    },
    {
      id: 5,
      title: "خروج",
      icon: <LogoutCurve size={16} />,
      route: "/",
    },
  ];
  const navbarToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <header className="w-full h-16 flex items-center justify-between p-5 md:px-10 md:py-11">
      <div className="w-6 h-6 flex justify-center items-center  lg:hidden">
        <HambergerMenu
          size="32"
          color="#417F56"
          onClick={() => navbarToggle()}
          className=" cursor-pointer"
        />
      </div>
      {/* section toggle navbar*/}
      <div
        className={` fixed top-0 right-0 h-screen  ${
          isToggle ? "w-full" : "w-0"
        } duration-500 transition-all bg-black/40 backdrop-blur-sm z-20  `}
        onClick={() => navbarToggle()}
      ></div>
      {/* section sidebar mobile */}
      <SideNav isToggle={isToggle} setIsToggle={setIsToggle} />
      {/* section logo */}
      <div>
        <img src={logo} alt="logo-header" className="h-8 md:h-auto" />
      </div>
      {/* section navbar Desktop */}
      <MainNav />
      {/* section user action */}
      <div className=" flex gap-1 justify-evenly items-center  ">
        <div className=" hidden text-primaryGreen bg-tint-1 p-1 rounded md:p-2  md:block cursor-pointer  hover:text-white hover:bg-primaryGreen duration-300">
          <SearchNormal1 size="16" className="md:w-6 md:h-6" />
        </div>
        <div className="text-primaryGreen bg-tint-1 p-1 rounded md:p-2 cursor-pointer  hover:text-white hover:bg-primaryGreen duration-300">
          <ShoppingCart size="16" className="md:w-6 md:h-6" />
        </div>
        <div
          className={` ${
            isOpenSettingUser
              ? "text-white bg-primaryGreen"
              : "text-primaryGreen"
          } flex cursor-pointer relative justify-center items-center transition-all duration-300  bg-tint-1 p-1 rounded md:p-2  hover:text-white hover:bg-primaryGreen `}
          onClick={() => {
            setIsOpenSettingUser(!isOpenSettingUser);
          }}
        >
          <User size="16" className="md:w-6 md:h-6  duration-300  " />
          <ArrowDown2
            size="14"
            className={`md:w-4 md:h-4 duration-300 ${
              !isOpenSettingUser && "hidden"
            }`}
          />
          <ul
            className={` absolute w-36  top-11 left-0.5 z-50 rounded-md shadow  bg-white duration-300 px-1 ${
              !isOpenSettingUser && "w-0 opacity-0 hidden"
            }`}
            onMouseLeave={() => setIsOpenSettingUser(false)}
          >
            {settingUserData.map((data) => {
              return (
                <li className="flex gap-2 font-normal text-xs text-gray-8 p-2 border-b-2 border-b-gray-1 cursor-pointer hover:text-primaryGreen hover:bg-gray-1 duration-300">
                  {data.icon}
                  <Link to={"/"} className="">
                    {data.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
