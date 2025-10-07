import React from 'react';
import classes from "./PackageCard.module.css"

const PackageCard = () => {
  return (
    <div className={classes?.packageCard}>
        <div className={classes?.packageCardHeader}>
            <h3>Start Listing Your Profile</h3>
        </div>
        <div className={classes?.body}>
            <h4>$60</h4>
            <p>Reoccurs every year</p>
        </div>
    </div>
  )
}

export default PackageCard