import { ArrowDown2, ArrowUp2, CloseCircle } from "iconsax-react";
import React, { useState } from "react";
import NavData from "./NavData";
import { Link } from "react-router-dom";
import logoSidebar from "../../assets/LogoSidebar.svg";
type SideNavProps = {
  isToggle: boolean;
  setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
};
type isOpenType = {
  id: number;
  status: boolean;
}[];
function SideNav({ isToggle, setIsToggle }: SideNavProps) {
  const [isOpen, setIsOpen] = useState<isOpenType>([
    { id: 2, status: false },
    { id: 3, status: false },
  ]);
  const openSubMenue = (id: number) => {
    const newArr = [...isOpen];
    if (id === isOpen[0].id) {
      newArr[0].status = !newArr[0].status;
    } else {
      newArr[1].status = !newArr[1].status;
    }
    setIsOpen(newArr);
    console.log(isOpen);
  };
  return (
    <div
      className={`${
        isToggle ? "w-3/4 " : "w-0 [&>*]:hidden"
      } duration-500  ease-linear h-screen bg-white z-20 absolute top-0 right-0`}
    >
      {/* Head */}
      <div className=" bg-gray-8 relative ">
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
          className=" absolute top-4  left-2 cursor-pointer"
          onClick={() => setIsToggle(!isToggle)}
        />
      </div>
      {/* Link to Navigate */}
      <nav className="px-4 [&>*:first-child>p]:text-primaryGreen [&>*:first-child]:pt-4 [&>*:last-child]:border-b-0">
        {NavData.map((nav) => {
          if (!nav.subNav)
            return (
              <Link
                to={nav.mainRoute}
                key={nav.id}
                className="flex items-center gap-2 py-2 text-sm leading-6 border-gray-2 border-b-2 hover:bg-gray-1  hover:text-primaryGreen duration-500 "
              >
                {nav.icon}
                <p>{nav.title}</p>
              </Link>
            );
          else
            return (
              <>
                <a
                  key={nav.id}
                  className={`flex justify-between items-center gap-1 cursor-pointer border-gray-2 ${
                    isOpen[nav.id - 2].status ? "border-b-0" : "border-b-2"
                  } w-full hover:bg-gray-1  hover:text-primaryGreen duration-200`}
                  onClick={() => openSubMenue(nav.id)}
                >
                  <div className="flex items-center gap-1 py-2 text-sm leading-6">
                    {" "}
                    {nav.icon}
                    <p>{nav.title}</p>
                  </div>
                  {isOpen[nav.id - 2].status ? (
                    <ArrowUp2 size={20} />
                  ) : (
                    <ArrowDown2 size={20} />
                  )}
                </a>
                <div
                  className={` ${
                    isOpen[nav.id - 2].status
                      ? "h-full opacity-100 [&>*]:block"
                      : "h-0 opacity-0 [&>*]:hidden"
                  } transition-all`}
                >
                  {" "}
                  <ul className=" flex flex-col gap-y-2 py-2 px-8 ">
                    {nav.subNav.map((sub, index) => {
                      return (
                        <li
                          key={index}
                          className=" rounded cursor-pointer p-1 hover:bg-gray-1  hover:text-primaryGreen duration-500 "
                        >
                          <Link to={sub.subRoute}>{sub.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            );
        })}
      </nav>
    </div>
  );
}

export default SideNav;
