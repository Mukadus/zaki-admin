import React from "react";
import classes from "./GraphsFilter.module.css";
import DropDown from "@/components/molecules/DropDown/DropDown";

export default function GraphsFilter({ startingYear = 2017 }) {
  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    
    for (let year = currentYear; year >= startingYear; year--) {
      years.push({
        label: year.toString(),
        value: year.toString(),
      });
    }
    
    return years;
  };

  const yearOptions = generateYearOptions();

  return (
    <div className={classes.mainDiv}>
      <h4>New Sign Ups</h4>
      <DropDown
        containerClassName={classes?.dropdownContainer}
        options={yearOptions}
        onChange={() => {}}
        placeholder={'Yearly'}
        isGraphsFilter
      />
    </div>
  );
}
