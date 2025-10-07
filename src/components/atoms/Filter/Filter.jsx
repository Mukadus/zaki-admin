
"use client";
import React from 'react';
import classes from "./Filter.module.css"
import { CiUser } from "react-icons/ci";


const Filter = ({item = {},SelectedData,setSelectedData}) => {
  return (
    <div onClick={()=>{setSelectedData(item)}} className={`${classes?.filter} ${SelectedData.value === item.value && classes?.active}`}>
            {item?.icon}
        <h4>{item?.label || ""}</h4>
    </div>
  )
}

export default Filter