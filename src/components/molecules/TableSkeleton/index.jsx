import { Skeleton } from "@mui/material";
import React from "react";
import classes from "./TableSkeleton.module.css";

function TableSkeleton({ rowsCount = 10, colsData = [] }) {
  const rows = Array(rowsCount).fill(0);
  const colsCount = colsData.length || 5;

  return (
    <>
      {rows?.map((item, index) => (
        <tr key={index}>
          {Array(colsCount).fill(0).map((col, idx) => (
            <td key={idx}>
              <Skeleton height={"40px"} variant="rectangular" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default TableSkeleton;
