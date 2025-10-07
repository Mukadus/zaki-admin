import React from "react";
import classes from "./PersonalInfo.module.css";
import ShadowWrapper from "../ShadowWrapper/ShadowWrapper";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";

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

    </ShadowWrapper>
  );
}
