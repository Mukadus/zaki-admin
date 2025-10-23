"use client";
import classes from "./LottieLoader.module.css";

const LottieLoader = ({ className }) => {
  return (
    <div className={`${classes?.container} ${className || ""}`}>
      <div className={classes.circleLoader}></div>
    </div>
  );
};

export default LottieLoader;