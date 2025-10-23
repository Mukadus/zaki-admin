"use client";
import React from "react";
import classes from "./Header.module.css";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Button from "@/components/atoms/Button";
import { IoNotificationsOutline, IoPersonOutline, IoLogOutOutline } from "react-icons/io5";
import HeaderList from "@/components/atoms/HeaderList/HeaderList";
import { headerData } from "@/developmentContent/developmentData/HeaderData";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import PopOver from "@/components/molecules/PopOver";
import { signOutRequest } from "@/store/auth/authSlice";
import { clearAllCookies } from "@/resources/utils/cookie";
import { PiSealQuestionLight } from "react-icons/pi";
import { TbLayoutDashboard } from "react-icons/tb";
import { PiNewspaperClippingLight } from "react-icons/pi";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // Profile popover options
  const profilePopoverOptions = [
    {
      label: "Profile",
      value: "profile",
      icon: <IoPersonOutline size={18} />,
      link: "/profile",
    },
    {
      label: "CMS",
      value: "cms",
      icon: <TbLayoutDashboard size={18} />,
      link: "/cms",
    },
    {
      label: "FAQ",
      value: "faq",
      icon:<PiSealQuestionLight size={18} />,
      link: "/faq",
    },
    {
      label: "Blog",
      value: "blog",
      icon:<PiNewspaperClippingLight size={18} />,
      link: "/blog",
    },
    {
      label: "Logout",
      value: "logout",
      icon: <IoLogOutOutline size={18} />
    },
    
  ];

  const handleProfileClick = (value) => {
    if (value === "profile") {
      router.push("/profile");
    } else if (value === "cms") {
      router.push("/cms");
    } else if (value === "faq") {
      router.push("/faq");
    } else if (value === "blog") {
      router.push("/blog");
    } else if (value === "logout") {
      dispatch(signOutRequest());
      clearAllCookies();
      router.push("/login");
    }
  };


  return (
    <header className={classes.header}>
      <Container>
        {/* //// logo */}
        <div className={classes?.headerContent}>
          <div className={classes?.logo} onClick={()=>{
            router.push("/");
          }}>
            <Image src={"/app-images/logo.png"} alt="logo" fill />
          </div>
          {/* //// header list */}
          <div className={classes?.headerList}>
            {
              headerData?.map((item)=>{
                return <HeaderList key={item?._id} item={item} />
              })
            }
          </div>
          {/* right side action */}
          <div className={classes?.rightSideAction}>
            <Button
            onClick={()=>{
              router.push("/notification");
            }}
              className={classes?.btn}
              label="Notifications"
              leftIcon={<IoNotificationsOutline size={18} />}
            />
            <PopOver
              popover={profilePopoverOptions}
              onClick={handleProfileClick}
            >
              <div className={classes?.profile}>
                <Image src={"/app-images/avatar.png"} alt="profile" fill />
              </div>
            </PopOver>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
