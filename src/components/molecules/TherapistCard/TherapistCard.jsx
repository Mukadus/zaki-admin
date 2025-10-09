import React from "react";
import classes from "./TherapistCard.module.css";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import Image from "next/image";
import { MdOutlineTimer } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";

const TherapistCard = ({item}) => {
  return (
    <div className={classes?.therapistCard}>
      <Wrapper className={classes?.wrapper}>
        <div className={classes?.therapistInfo}>
          <div className={classes?.profileImage}>
            <Image src={item?.image || "/svgs/profile.svg"} fill alt="profile" />
          </div>
          <div className={classes?.therapistName}>
            <h4 className="maxLine1">{item?.name}</h4>
            <TiStarFullOutline color="#DBA02E" />
            <span>({item?.rating})</span>
          </div>
        </div>
      </Wrapper>
      <div className={`${classes?.therapistdetails} maxLine3`}>
        {item?.description}
      </div>
      <hr />
      <div className={classes?.bottom}>
        <div className={classes?.slot}>
          <MdOutlineTimer color="#024757" />
          <p>Slots: {item?.slots}</p>
        </div>
        <div className={classes?.slot}>
          <IoLocationOutline color="#024757" />
          <p>Location: {item?.location}</p>
        </div>
      </div>
    </div>
  );
};

export default TherapistCard;
