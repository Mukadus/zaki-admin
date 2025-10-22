import React from "react";
import classes from "./ReviewCard.module.css";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
import Rating from "../Rating";
import {imageUrl} from "@/resources/utils/helper";

const ReviewCard = ({data}) => {
  return (
    <div className={classes.reviewCard}>
      <div className={classes.reviewCardHeader}>
        <p>
          {data?.review}
        </p>
      </div>
      <Wrapper>
        <div className={classes.imageDivWrapper}>
          <div className={classes.imageDiv}>
            <Image src={imageUrl(data?.photo) || "/app-images/userDummy.png"} alt="user" fill />
          </div>
          <div>
            <h4>{data?.fullName}</h4>
            <Rating rating={data?.rating} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ReviewCard;
