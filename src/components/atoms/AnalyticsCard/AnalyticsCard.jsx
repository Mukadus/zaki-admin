import React from "react";
import classes from "./AnalyticsCard.module.css";
import { HiMiniUsers } from "react-icons/hi2";

export default function AnalyticsCard() {
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <h5>Total Therapists</h5>
        <div className={classes.iconDiv}>
          <HiMiniUsers className={classes.icon} />
        </div>
      </div>
      <div className={classes.valuesDiv}>
        <h3>150</h3>
        <p>+5%</p>
      </div>
    </div>
  );
}
