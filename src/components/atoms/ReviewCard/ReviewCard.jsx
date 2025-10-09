import React from "react";
import classes from "./ReviewCard.module.css";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
import Rating from "../Rating";

const ReviewCard = () => {
  return (
    <div className={classes.reviewCard}>
      <div className={classes.reviewCardHeader}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut{" "}
        </p>
      </div>
      <Wrapper>
        <div className={classes.imageDivWrapper}>
          <div className={classes.imageDiv}>
            <Image src={"/app-images/userDummy.png"} alt="user" fill />
          </div>
          <div>
            <h4>John Doe</h4>
            <Rating rating={4.5} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ReviewCard;
