import { IoHomeOutline } from "react-icons/io5";
import { LuUsersRound } from "react-icons/lu";
import { MdDateRange } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import { GrAnalytics } from "react-icons/gr";
import { TbWallet } from "react-icons/tb";


export const headerData = [
  {
    _id: 1,
    label: "Dashboard",
    link: "/",
    icon: <IoHomeOutline size={18} />,
  },
  {
    _id: 2,
    label: "User Registration",
    link: "/user-registration",
    icon: <LuUsersRound size={18} />,
  },
  {
    _id: 3,
    label: "Appointments",
    link: "/appointment",
    icon: <MdDateRange size={18} />,
  },
  {
    _id: 4,
    label: "Categories",
    link: "/category",
    icon: <TbCategory size={18} />,
  },
  {
    _id: 5,
    label: "Analytics",
    link: "/analytics",
    icon: <GrAnalytics size={18} />,
  },
  {
    _id: 6,
    label: "Wallet",
    link: "/wallet",
    icon: <TbWallet size={18} />,
  }
  
];
