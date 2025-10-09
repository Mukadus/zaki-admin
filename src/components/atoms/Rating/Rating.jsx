"use client";
import React from "react";
import classes from "./Rating.module.css";

export default function Rating({ 
  rating = 0, 
  maxRating = 5, 
  size = "medium", 
  showNumber = false,
  className = "" 
}) {
  // Ensure rating is within bounds
  const normalizedRating = Math.max(0, Math.min(rating, maxRating));
  
  // Calculate filled and half stars
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`${classes.ratingContainer} ${classes[size]} ${className}`}>
      <div className={classes.starsContainer}>
        {/* Full stars */}
        {Array.from({ length: fullStars }, (_, index) => (
          <span key={`full-${index}`} className={`${classes.star} ${classes.fullStar}`}>
            ★
          </span>
        ))}
        
        {/* Half star */}
        {hasHalfStar && (
          <span className={`${classes.star} ${classes.halfStar}`}>
            ★
          </span>
        )}
        
        {/* Empty stars */}
        {Array.from({ length: emptyStars }, (_, index) => (
          <span key={`empty-${index}`} className={`${classes.star} ${classes.emptyStar}`}>
            ★
          </span>
        ))}
      </div>
      
      {/* Optional rating number */}
      {showNumber && (
        <span className={classes.ratingNumber}>
          {normalizedRating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
