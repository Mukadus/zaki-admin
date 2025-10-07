import React from "react";
import classes from "./PersonalInfo.module.css";
import ShadowWrapper from "../ShadowWrapper/ShadowWrapper";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
import { FaCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import ImageComponent from "../ImageComponent/ImageComponent";

export default function PersonalInfo() {
  const personalInfoData = [
    {
      icon: FaCalendarDays,
      label: 'Email',
      value: 'anastasya@yahoo.com'
    },
    {
      icon: FaLocationDot,
      label: 'Location',
      value: 'Ondrickachester'
    },
    {
      icon: BiWorld,
      label: 'Language',
      value: 'English'
    }
  ];

  const renderInfoItem = (item, index) => {
    const IconComponent = item.icon;
    return (
      <div key={index} className={classes.infoDiv}>
        <IconComponent className={classes.icon}/>
        <p className={classes.keyValue}>{item.label} {' '} <span>{item.value}</span></p>
      </div>
    );
  };

  return (
    <ShadowWrapper className={classes?.shadowWrapper}>
      <Wrapper className={classes.photoNameDiv}>
        <div className={classes?.photoDiv}>
            <ImageComponent src={'/app-images/userDummy.png'}/>
        </div>
        <h4 className={classes.userName}>John Doe</h4>
      </Wrapper>
      <h3 className={classes.personalInfoTitle}>Personal Info</h3>
      <hr className={classes.divider}/>
      {personalInfoData.map(renderInfoItem)}
    </ShadowWrapper>
  );
}
