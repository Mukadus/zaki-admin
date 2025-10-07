import React from "react";
import classes from "./TopHeader.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";

const TopHeader = ({ title = "", backButton = true }) => {
  return (
    <div className={classes?.topHeader}>
      {backButton && (
        <div className={classes?.backButton}>
          <IoMdArrowRoundBack size={20} color="var(--white)" />
        </div>
      )}

      <h1>{title}</h1>
    </div>
  );
};

export default TopHeader;
