"use client";
import React from 'react';
import classes from "./HeaderList.module.css";
import { IoHomeOutline } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const HeaderList = ({ item }) => {
  const pathname = usePathname();
  const isActive = pathname === item?.link || pathname.startsWith(item?.link  + "/");


  const router = useRouter();

  return (
    <div onClick={() => {
      router.push(item?.link);
    }} className={`${classes?.headerList} ${isActive ? classes?.active : ""}`}>
      {item?.icon}
      <span>{item?.label}</span>
    </div>
  )
}

export default HeaderList;