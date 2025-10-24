"use client";
import React from "react";
import classes from "./StatusToggle.module.css";

const StatusToggle = ({ 
  isActive = true, 
  onChange, 
  label = "Status",
  disabled = false,
  size = "medium" 
}) => {
  const handleToggle = () => {
    if (!disabled && onChange) {
      onChange(!isActive);
    }
  };

  return (
    <div className={classes.statusContainer}>
      <label className={classes.label}>{label}</label>
      <div className={classes.toggleWrapper}>
        <div 
          className={`${classes.statusToggle} ${isActive ? classes.active : classes.inactive} ${disabled ? classes.disabled : ''} ${classes[size]}`}
          onClick={handleToggle}
        >
          <div className={classes.toggleSlider}></div>
        </div>
        <span className={classes.statusText}>{isActive ? "Active" : "Inactive"}</span>
      </div>
    </div>
  );
};

export default StatusToggle;
