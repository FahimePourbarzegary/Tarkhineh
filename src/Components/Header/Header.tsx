import { useState } from "react";
import logo from "../../assets/Logo.svg";
import { HambergerMenu, ShoppingCart, User } from "iconsax-react";
import SideNav from "./SideNav";

function Header() {
  const [isToggle, setIsToggle] = useState(false);
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
          isToggle ? "w-full" : "w-0"
        } duration-500 transition-all bg-black/40 backdrop-blur-sm z-10  `}
        onClick={() => navbarToggle()}
      ></div>
      {/* section sidebar mobile */}
      <SideNav isToggle={isToggle} setIsToggle={setIsToggle} />
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
