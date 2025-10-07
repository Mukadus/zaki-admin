"use client";
import React from 'react';
import classes from "./HeaderList.module.css";
import { IoHomeOutline } from 'react-icons/io5';
import { usePathname } from 'next/navigation';

const HeaderList = ({item}) => {
    const pathname = usePathname();
    const isActive = pathname === item?.link;
    
  return (
    <div className={`${classes?.headerList} ${isActive ? classes?.active : ""}`}>
        {item?.icon}
        <label>{item?.label}</label>
    </div>
  )
}

export default HeaderList;