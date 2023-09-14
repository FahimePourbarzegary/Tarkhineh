import { useState } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import image from "../assets/user.svg";
import { Heart, Location, LogoutCurve, User, Wallet2 } from "iconsax-react";
import Profile from "../Components/Dashboard/Profile";
import FavoritesPage from "../Components/Dashboard/FavoritesPage";
import Address from "../Components/Dashboard/Address";
import CardPopUpBox from "../Components/CardPopUpBox/CardPopUpBox";
function DashboardPage() {
  const [isLogout, setIsLogout] = useState<number | null>(null);
  const navigate = useNavigate();
  const LogoutHandler = () => {
    setIsLogout(null);
    navigate("/");
  };
  const settingUserData = [
    {
      id: 1,
      title: "پروفایل",
      icon: (isActive) => (
        <User
          className={` w-4 h-4  md:w-5 md:h-5`}
          variant={`${isActive ? "Bold" : "Outline"}`}
        />
      ),
      route: "profile",
    },
    {
      id: 2,
      title: "پیگیری سفارشات",
      icon: (isActive) => (
        <Wallet2
          className={` w-4 h-4 md:w-5 md:h-5`}
          variant={`${isActive ? "Bold" : "Outline"}`}
        />
      ),
      route: "/",
    },
    {
      id: 3,
      title: "علاقمندی ها",
      icon: (isActive) => (
        <Heart
          className={` w-4 h-4 md:w-5 md:h-5`}
          variant={`${isActive ? "Bold" : "Outline"}`}
        />
      ),
      route: "favorites",
    },
    {
      id: 4,
      title: "آدرس های من",
      icon: (isActive) => (
        <Location
          className={` w-4 h-4 md:w-5 md:h-5`}
          variant={`${isActive ? "Bold" : "Outline"}`}
        />
      ),
      route: "address",
    },
  ];
  return (
    <section className=" relative flex items-start  gap-8 w-full h-screen md:px-10 lg:px-24 lg:py-4">
      <div className=" w-full h-screen  py-4 px-5 md:w-72 md:h-auto md:border md:border-gray-4 md:rounded-md md:px-2  ">
        <div className=" flex items-center gap-3 py-2 border-b-2  border-b-gray-5">
          <img src={image} alt="پروفایل" />
          <div className=" flex flex-col gap-1">
            <h1 className=" text-sm">کاربر ترخینه</h1>
            <p className="text-gray-5 text-[10px]">۰۹۳۵۲۸۷۶۷۸۶</p>
          </div>
        </div>
        <ul className=" my-2 [&>*:last-child]:text-error">
          {settingUserData.map((data, index) => {
            return (
              <li>
                <NavLink
                  key={index}
                  to={data.route}
                  className={({ isActive }) =>
                    `flex  items-center justify-start px-[6px] py-3 gap-1 hover:bg-tint-1 rounded-sm duration-200 ${
                      isActive
                        ? " text-primaryGreen font-medium border-r-2 "
                        : ""
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {data.icon(isActive)}
                      <span className=" text-sm md:text-base">
                        {data.title}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
          <li
            className="flex  items-center justify-start px-[6px] py-3 gap-1 hover:bg-tint-1 rounded-sm duration-200 "
            onClick={() => {
              setIsLogout(1);
            }}
          >
            <LogoutCurve className={` w-4 h-4 md:w-5 md:h-5`} />
            <span className=" text-sm md:text-base">خروج</span>
          </li>
        </ul>
        {isLogout && (
          <CardPopUpBox
            title="خروج"
            description="آیا میخواهید از حساب خود خارج شوید؟"
            buttonTitle="خروج"
            action={() => LogoutHandler()}
            setIsCloseCard={setIsLogout}
          />
        )}
      </div>

      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="address" element={<Address />} />
      </Routes>
    </section>
  );
}

export default DashboardPage;
