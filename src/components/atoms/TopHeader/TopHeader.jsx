"use client";
import React from "react";
import classes from "./TopHeader.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";


const TopHeader = ({ title = "",route="" }) => {
  const router = useRouter();
  return (
    <div className={classes?.topHeader}>
      {route && (
        <div onClick={()=>{
          router.push(route);
        }} className={classes?.backButton}>
          <IoMdArrowRoundBack size={20} color="var(--white)" />
        </div>
      )}

      <h1>{title}</h1>
    </div>
  );
};

export default TopHeader;
