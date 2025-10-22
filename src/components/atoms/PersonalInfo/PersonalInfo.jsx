import React from "react";
import classes from "./PersonalInfo.module.css";
import ShadowWrapper from "../ShadowWrapper/ShadowWrapper";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
import { FaCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import ImageComponent from "../ImageComponent/ImageComponent";
import { mergeClass } from "@/resources/utils/helper";
import { FaPhone } from "react-icons/fa6";
import Button from "../Button";
import { MdEmail } from "react-icons/md";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

export default function PersonalInfo({
  showCertifications = false,
  isAppointment = false,
  showName = false,
  user,
}) {

  console.log("user",user);

  const getStatusClass = (status) => {
    return status === "Completed"
      ? classes.completedStatus
      : classes.upcomingStatus;
  };

  // const personalInfoData = isAppointment
  //   ? [
  //       {
  //         icon: FaCalendarDays,
  //         label: "Date",
  //         value: "Mon Feb, 16",
  //       },
  //       {
  //         icon: MdOutlineAccessTimeFilled,
  //         label: "Time",
  //         value: "9:00 AM",
  //       },
  //       {
  //         icon: FaLocationDot,
  //         label: "Location",
  //         value: "Ondrickachester",
  //       },
  //       {
  //         icon: BiWorld,
  //         label: "Language",
  //         value: "English",
  //       },
  //     ]
  //   : [
  //       {
  //         icon: MdEmail,
  //         label: "Email",
  //         value: "anastasya@yahoo.com",
  //       },
  //       {
  //         icon: FaPhone,
  //         label: "Contact",
  //         value: "(209) 555-0104",
  //       },
  //       {
  //         icon: FaLocationDot,
  //         label: "Location",
  //         value: "Ondrickachester",
  //       },
  //       {
  //         icon: BiWorld,
  //         label: "Language",
  //         value: "English",
  //       },
  //     ];

  // const renderInfoItem = (item, index) => {
  //   const IconComponent = item.icon;
  //   return (
  //     <div key={index} className={classes.infoDiv}>
  //       <IconComponent className={classes.icon} />
  //       <p className={classes.keyValue}>
  //         {item.label} <span>{item.value}</span>
  //       </p>
  //     </div>
  //   );
  // };

  const renderCertificateItem = (item, index) => {
    return (
      <div className={classes.certificateItem}>
        <div className={classes.certificateImageDiv}>
          <ImageComponent src={"/app-images/pdf.png"} />
        </div>
        <div className={classes.certificateInfo}>
          <p className={classes.certificateName}>Document.pdf</p>
          <p className={classes.certificateDate}>Jan 17, 2022</p>
        </div>
      </div>
    );
  };

  return (
    <ShadowWrapper className={classes?.shadowWrapper}>
      <Wrapper className={classes.photoNameDiv}>
        <div className={classes.basicInfoDiv}>
          <div className={classes?.photoDiv}>
            <ImageComponent src={user?.image} />
          </div>
          <div className={classes.profileInfoDiv}>
            <h4 className={classes.userName}>{user?.userName}</h4>
            <p className={classes.email}>{user?.userEmail}</p>
          </div>
        </div>
        {isAppointment && (
          <span
            className={`${classes.statusPill} ${getStatusClass("Completed")}`}
          >
            Completed
          </span>
        )}
      </Wrapper>
      {isAppointment && (
        <div className={classes.categoryDiv}>
          <p className={classes.categoryLabel}>Category</p>
          <h6 className={classes.category}>Psychodynamic Therapy</h6>
        </div>
      )}
      {!isAppointment && (
        <h3 className={classes.personalInfoTitle}>Personal Info</h3>
      )}
      <hr className={classes.divider} />
      
        <div className={classes.flexColumn}>
          {/* {personalInfoData?.map(renderInfoItem)} */}
          {
            user?.userEmail && (
              <div className={classes.infoDiv}>
                <MdEmail className={classes.icon} />
                <p className={classes.keyValue}>
                  Email <span> {user?.userEmail}</span>
                </p>
              </div>
            )
          }
        {
          user?.location && (
            <div className={classes.infoDiv}>
              <FaLocationDot className={classes.icon} />
              <p className={classes.keyValue}>
                Location<span> {user?.location}</span>
              </p>
            </div>
          )
        }
        {
          user?.language && (
            <div className={classes.infoDiv}>
              <BiWorld className={classes.icon} />
              <p className={classes.keyValue}>
                Language<span> {user?.language}</span>
              </p>
            </div>
          )
        }
         
        </div>
  
    
      {showCertifications && (
        <>
          <h3
            className={mergeClass(classes.personalInfoTitle, classes.marginTop)}
          >
            Certifications
          </h3>
          <hr className={classes.divider} />
          <div className={classes.certificationsDiv}>
            {[1, 2].map(renderCertificateItem)}
          </div>
          <div className={classes.btnsDiv}>
            <Button variant={"primary"} label={"Accept"} />
            <Button variant={"secondary"} label={"Reject"} />
          </div>
        </>
      )}
    </ShadowWrapper>
  );
}
