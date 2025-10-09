"use client";
import React from "react";
import classes from "./Header.module.css";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import { BiMenu, BiOutline } from "react-icons/bi";
import { IoNotificationsOutline, IoPersonOutline, IoLogOutOutline } from "react-icons/io5";
import HeaderList from "@/components/atoms/HeaderList/HeaderList";
import { headerData } from "@/developmentContent/developmentData/HeaderData";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import PopOver from "@/components/molecules/PopOver";
import { signOutRequest } from "@/store/auth/authSlice";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // Profile popover options
  const profilePopoverOptions = [
    {
      label: "Profile",
      value: "profile",
      icon: <IoPersonOutline size={18} />
    },
    {
      label: "Logout",
      value: "logout",
      icon: <IoLogOutOutline size={18} />
    }
  ];

  const handleProfileClick = (value) => {
    if (value === "profile") {
      router.push("/profile");
    } else if (value === "logout") {
      logout();
    }
  };

  const logout = () => {
    dispatch(signOutRequest());
    router.push("/login");
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
