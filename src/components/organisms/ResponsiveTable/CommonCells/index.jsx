import { getFormattedParams } from "@/resources/utils/helper";
import clsx from "clsx";
import moment from "moment";
import classes from "./CommonCells.module.css";

const statusClassMap = {
  "Upcoming": {
    className: classes.upcomingStatus,
  },
  "Completed": {
    className: classes.completedStatus,
  },
  "Active": {
    className: classes.upcomingStatus,
  },
  "In-Active": {
    className: classes.inactiveStatus,
  },
  "cancelled": {
    className: classes.cancelledStatus,
  },
  "rescheduled": {
    className: classes.rescheduledStatus,
  },
};

export const RenderTextCell = ({ cellValue: item, bold = false }) => {
  return (
    <span className={clsx("maxLine1", classes.textCell, bold && classes.bold)}>
      {item ? getFormattedParams(item?.toString()) : item ?? "-"}
    </span>
  );
};

export const RenderDateCell = ({ cellValue: item }) => {
  return (
    <span className={clsx(classes?.date, "maxLine1", classes.textCell)}>
      {moment(item).format("MMMM DD, YYYY")}
    </span>
  );
};

export const RenderStatusCell = ({ cellValue: item }) => {
  const isBoolean = typeof item === "boolean";
  
  const displayValue = isBoolean ? (item ? "active" : "inactive") : item;

  const statusClass = statusClassMap[displayValue];

  return (
    <span
      className={clsx(classes.status, statusClass && statusClass?.className)}
    >
      {getFormattedParams(displayValue)}
    </span>
  );
};
