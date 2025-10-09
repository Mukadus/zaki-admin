import React from "react";
import classes from "./NotificationCard.module.css";

const NotificationCard = ({item}) => {
  return (
    <div className={classes?.notificationCard}>
      <h4 className="maxLine1">{item?.title}</h4>
      <div className={`${classes?.description} maxLine2`}>
        {item?.description}
      </div>
      <span className="maxLine1">{item?.time}</span>
    </div>
  );
};

export default NotificationCard;
