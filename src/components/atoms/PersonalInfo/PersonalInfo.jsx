import React from "react";
import classes from "./PersonalInfo.module.css";
import ShadowWrapper from "../ShadowWrapper/ShadowWrapper";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
import { FaCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";

export default function PersonalInfo() {
  return (
    <ShadowWrapper className={classes?.shadowWrapper}>
      <Wrapper className={classes.photoNameDiv}>
        <div className={classes?.photoDiv}>
            <Image src={'/app-images/userDummy.png'} fill/>
        </div>
        <h4 className={classes.userName}>John Doe</h4>
      </Wrapper>
      <h3 className={classes.personalInfoTitle}>Personal Info</h3>
      <hr className={classes.divider}/>
      <div className={classes.infoDiv}>
        <FaCalendarDays className={classes.icon}/>
        <p className={classes.keyValue}>Email {' '} <span>anastasya@yahoo.com</span></p>
      </div>
      <div className={classes.infoDiv}>
        <FaLocationDot  className={classes.icon}/>
        <p className={classes.keyValue}>Location {' '} <span>Ondrickachester</span></p>
      </div>
      <div className={classes.infoDiv}>
        <BiWorld className={classes.icon}/>
        <p className={classes.keyValue}>Language {' '} <span>English</span></p>
      </div>

    </ShadowWrapper>
  );
}
