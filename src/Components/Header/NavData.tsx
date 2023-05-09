import {
  CallCalling,
  Home,
  HomeHashtag,
  MenuBoard,
  Profile2User,
} from "iconsax-react";
import React from "react";
type NavDataType = {
  id: number;
  icon: React.ReactNode;
  title: string;
  subNav?: {
    title: string;
    subRoute: string;
  }[];
  mainRoute: string;
}[];
const NavData: NavDataType = [
  {
    id: 1,
    icon: <Home size={20} />,
    title: "صفحه اصلی",
    mainRoute: "/",
  },
  {
    id: 2,
    icon: <MenuBoard size={20} />,
    title: "منو ",
    mainRoute: "",
    subNav: [
      {
        title: "غذای اصلی",
        subRoute: "/",
      },
      {
        title: "پیش غذا",
        subRoute: "/",
      },
      {
        title: "دسر",
        subRoute: "/",
      },
      {
        title: "نوشیدنی",
        subRoute: "/",
      },
    ],
  },
  {
    id: 3,
    icon: <HomeHashtag size={20} />,
    title: "شعبه",
    mainRoute: "",
    subNav: [
      {
        title: "اکباتان",
        subRoute: "/",
      },
      {
        title: "اقدسیه",
        subRoute: "/",
      },
      {
        title: "چالوس",
        subRoute: "/",
      },
      {
        title: "ونک",
        subRoute: "/",
      },
    ],
  },
  {
    id: 4,
    icon: <Profile2User size={20} />,
    title: "درباره ما",
    mainRoute: "/",
  },
  {
    id: 5,
    icon: <CallCalling size={20} />,
    title: "تماس با ما",
    mainRoute: "/",
  },
];
export default NavData;
