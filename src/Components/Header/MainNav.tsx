import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavData from "./NavData";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
type isOpenType = {
  id: number;
  status: boolean;
}[];
function MainNav() {
  //logic:change status when click or leave subnav or submenu
  //warning: when we want call them with index [id-2] because id start 2 and we want 0 index
  //so if you have id with 0 or 1 etc. you must to change indexes
  const [isOpen, setIsOpen] = useState<isOpenType>([
    { id: 2, status: false },
    { id: 3, status: false },
  ]);
  const openSubMenu = (id: number) => {
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
    <nav className="hidden lg:flex w-full">
      <ul className=" flex w-full gap-8 justify-center items-center text-md text-gray-5 [&>*:first-child]:font-bold  [&>*:first-child]:text-primaryGreen">
        {NavData.map((data) => {
          if (!data.subNav)
            return (
              <li>
                <NavLink
                  to={data.mainRoute}
                  className={`${
                    /*({ isActive }: { isActive: boolean }) =>
                  isActive &&
          " font-bold text-primaryGreen  border-primaryGreen border-b-2 p-2"*/ ""
                  }`}
                >
                  {data.title}
                </NavLink>
              </li>
            );
          else
            return (
              <>
                <li>
                  <div
                    className={`flex justify-center items-center relative gap-3 cursor-pointer ${
                      isOpen[data.id - 2].status &&
                      "text-primaryGreen font-bold transition-all"
                    }`}
                    onClick={() => openSubMenu(data.id)}
                    onMouseLeave={() => {
                      setIsOpen([
                        { ...isOpen[0], status: false },
                        { ...isOpen[1], status: false },
                      ]);
                    }}
                  >
                    {data.title}
                    {isOpen[data.id - 2].status ? (
                      <ArrowUp2 size={16} />
                    ) : (
                      <ArrowDown2 size={16} />
                    )}
                   
                      <ul
                        className={` absolute w-36 top-6 duration-300 ${
                          data.id == 2 ? "left-0.5" : "right-0.5"
                        } ${isOpen[data.id - 2].status ?"w-36":"w-0 opacity-0"} rounded-md shadow  bg-white z-30 `}
                        onMouseLeave={() => openSubMenu(data.id)}
                      >
                        {data.subNav.map((sub) => {
                          return (
                            <li className=" font-normal text-sm text-gray-8 p-2 border-b-2 border-b-gray-1 cursor-pointer hover:text-primaryGreen hover:bg-gray-1 duration-300">
                              <Link to={sub.subRoute} className="">
                                {sub.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                   
                  </div>
                </li>
              </>
            );
        })}
      </ul>
    </nav>
  );
}

export default MainNav;
