"use client";
import React from "react";
import classes from "./Header.module.css";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import { BiMenu, BiOutline } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import HeaderList from "@/components/atoms/HeaderList/HeaderList";
import { headerData } from "@/developmentContent/developmentData/HeaderData";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
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
            <div className={classes?.profile}>
              <Image src={"/app-images/avatar.png"} alt="profile" fill />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
