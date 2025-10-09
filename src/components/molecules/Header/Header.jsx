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
import PopOver from "@/components/molecules/PopOver";

const Header = () => {
  const router = useRouter();

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
      // Add logout logic here
      console.log("Logging out...");
      // You can add actual logout logic like clearing tokens, redirecting to login, etc.
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
