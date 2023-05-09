import { useState } from "react";
import logo from "../../assets/Logo.svg";
import {
  HambergerMenu,
  SearchNormal1,
  ShoppingCart,
  User,
} from "iconsax-react";
import SideNav from "./SideNav";
import MainNav from "./MainNav";

function Header() {
  const [isToggle, setIsToggle] = useState(false);
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
        className={` absolute top-0 right-0 h-screen  ${
          isToggle ? "w-full" : "w-0"
        } duration-500 transition-all bg-black/40 backdrop-blur-sm z-10  `}
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
        <div className=" hidden bg-tint-1 p-1 rounded md:p-2  md:block cursor-pointer hover:bg-tint-2">
          <SearchNormal1 size="16" color="#417F56" className="md:w-6 md:h-6" />
        </div>
        <div className=" bg-tint-1 p-1 rounded md:p-2 cursor-pointer hover:bg-tint-2">
          <ShoppingCart size="16" color="#417F56" className="md:w-6 md:h-6" />
        </div>
        <div className=" bg-tint-1 p-1 rounded md:p-2  cursor-pointer hover:bg-tint-2">
          <User size="16" color="#417F56" className="md:w-6 md:h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
