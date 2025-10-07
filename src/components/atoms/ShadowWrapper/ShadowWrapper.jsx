import React from 'react';
import classes from "./ShadowWrapper.module.css"

const ShadowWrapper = ({children}) => {
  return (
    <div className={classes?.shadowWrapper}>
        {children}
    </div>
  )
}

export default ShadowWrapper