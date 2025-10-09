"use client";
import React from "react";
import classes from "./TopHeader.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import Button from "../Button";

const TopHeader = ({ title = "", back = false,btnlabel="",onClick=()=>{},leftIcon=null,rightIcon=null }) => {
  const router = useRouter();
  return (
    <div className={classes?.topHeaderWrapper}>
      <div className={classes?.topHeader}>
        {back && (
          <div
            onClick={() => {
              router.back();
            }}
            className={classes?.backButton}
          >
            <IoMdArrowRoundBack size={20} color="var(--white)" />
          </div>
        )}

        <h1>{title}</h1>
      </div>
      {
        btnlabel && (
          <div className={classes?.right}>
            <Button onClick={onClick} leftIcon={leftIcon&&leftIcon} rightIcon={rightIcon&&rightIcon} label={btnlabel}variant="tertiary" />
          </div>
        )
      }
     
    </div>
  );
};

export default TopHeader;
