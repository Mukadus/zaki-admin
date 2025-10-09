"use client";
import React from "react";
import classes from "./SeeAll.module.css";
import { useRouter } from "next/navigation";
import { IoChevronForwardOutline } from "react-icons/io5";

const SeeAll = ({ title="", link="" }) => {
  const router = useRouter();
  return (
    <div className={classes?.seeAll}>
      <h3>{title}</h3>
      <div className={classes?.arrow} onClick={() => router.push(link)}>
        <IoChevronForwardOutline  />
      </div>
    </div>
  );
};

export default SeeAll;
