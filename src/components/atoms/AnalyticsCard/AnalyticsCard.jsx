import React from "react";
import classes from "./AnalyticsCard.module.css";
import { HiMiniUsers } from "react-icons/hi2";

export default function AnalyticsCard({ title, value, change, icon: Icon = HiMiniUsers }) {
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <h5>{title}</h5>
        <div className={classes.iconDiv}>
          <Icon className={classes.icon} />
        </div>
      </div>
      <div className={classes.valuesDiv}>
        <h3>{value}</h3>
        <p>{change}</p>
      </div>
    </div>
  );
}
