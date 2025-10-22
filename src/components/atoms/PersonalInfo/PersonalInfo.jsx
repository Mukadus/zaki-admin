import React from "react";
import classes from "./PersonalInfo.module.css";
import ShadowWrapper from "../ShadowWrapper/ShadowWrapper";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
import { FaCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import ImageComponent from "../ImageComponent/ImageComponent";
import { imageUrl, mergeClass } from "@/resources/utils/helper";
import { FaPhone } from "react-icons/fa6";
import Button from "../Button";
import { MdEmail } from "react-icons/md";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import moment from "moment";
import { getFormattedPrice } from "@/resources/utils/helper";

export default function PersonalInfo({
  showCertifications = false,
  isAppointment = false,
  showName = false,
  data,
}) {
  const getStatusClass = (status) => {
    return status === data?.status ? classes.completedStatus : classes.upcomingStatus;
  };

  const personalInfoData = isAppointment
    ? [
        {
          icon: FaCalendarDays,
          label: "Date",
          value: moment(data?.date).format("MMM DD, YYYY"),
        },
        {
          icon: MdOutlineAccessTimeFilled,
          label: "Time",
          value: moment(data?.time).format("HH:mm A"),
        },
        {
          icon: FaLocationDot,
          label: "Location",
          value: data?.location || data?.user?.location,
        },
        {
          icon: BiWorld,
          label: "Language",
          value: data?.language || data?.user?.language,
        },
      ]
    : [
        {
          icon: MdEmail,
          label: "Email",
          value: data?.email || data?.user?.email,
        },
        {
          icon: FaPhone,
          label: "Contact",
          value: data?.phoneNumber || data?.user?.phoneNumber,
        },
        {
          icon: FaLocationDot,
          label: "Location",
          value: data?.location || data?.user?.location,
        },
        {
          icon: BiWorld,
          label: "Language",
          value: data?.language || data?.user?.language,
        },
      ];

  const renderInfoItem = (item, index) => {
    const IconComponent = item.icon;
    return (
      <div key={index} className={classes.infoDiv}>
        <IconComponent className={classes.icon} />
        <p className={classes.keyValue}>
          {item.label} <span>{item.value}</span>
        </p>
      </div>
    );
  };

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
            <ImageComponent src={imageUrl(data?.therapist?.photo || data?.user?.photo) || "/app-images/userDummy.png"} />
          </div>
          <div className={classes.profileInfoDiv}>
            <h4 className={classes.userName}>{data?.therapist?.fullName || data?.user?.fullName}</h4>
            <p className={classes.email}>{data?.therapist?.email || data?.user?.email}</p>
          </div>
        </div>
        {isAppointment && (
          <span
            className={`${classes.statusPill} ${getStatusClass(data?.status)}`}
          >
            {data?.status}
          </span>
        )}
      </Wrapper>
      {isAppointment && (
        <div className={classes.categoryDiv}>
          <p className={classes.categoryLabel}>Category</p>
          <h6 className={classes.category}>{data?.category}</h6>
        </div>
      )}
       {!isAppointment && (
         <h3 className={classes.personalInfoTitle}>Personal Info</h3>
       )}
       <hr className={classes.divider} />
       {!isAppointment && (
         <div className={classes.flexColumn}>
           {personalInfoData?.map(renderInfoItem)}
         </div>
       )}
       {isAppointment && (
         <div className={classes.appointmentInfoDiv}>
           <div className={classes.flexColumn}>
             {personalInfoData?.map(renderInfoItem)}
           </div>
           <div className={classes.priceDiv}>
             <h4>{getFormattedPrice(data?.price)}</h4>
             <p>Total Bill</p>
           </div>
         </div>
       )}
      {isAppointment && (
        <>
          <hr className={classes.divider} />
          <div className={classes.categoryDiv}>
            <p className={`${classes.categoryLabel} mb-2`}>Client Name</p>
            <div className={classes.basicInfoDiv}>
              <div className={classes?.photoDiv}>
                <ImageComponent src={imageUrl(data?.user?.photo) || "/app-images/userDummy.png"} />
              </div>
              <div className={classes.profileInfoDiv}>
                <h4 className={classes.userName}>{data?.user?.fullName}</h4>
                <p className={classes.email}>{data?.user?.email }</p>
              </div>
            </div>
          </div>
        </>
      )}
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
