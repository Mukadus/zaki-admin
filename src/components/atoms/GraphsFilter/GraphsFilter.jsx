import React from "react";
import classes from "./GraphsFilter.module.css";
import DropDown from "@/components/molecules/DropDown/DropDown";
import { yearFilter } from "@/developmentContent/enums/enums";

export default function GraphsFilter() {
  return (
    <div className={classes.mainDiv}>
      <h4>New Sign Ups</h4>
      <DropDown
        containerClassName={classes?.dropdownContainer}
        options={yearFilter}
        onChange={() => {}}
        placeholder={'Yearly'}
        isGraphsFilter
      />
    </div>
  );
}
