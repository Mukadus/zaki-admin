import React from 'react';
import classes from "./ShadowWrapper.module.css"

const ShadowWrapper = ({children,className}) => {
  return (
    <div className={`${classes?.shadowWrapper} ${className}`}>
        {children}
    </div>
  )
}

export default ShadowWrapper