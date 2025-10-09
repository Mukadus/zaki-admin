import React, { useState } from 'react';
import Image from 'next/image';
import classes from './DynamicImage.module.css';

const DynamicImage = ({
  src,
  alt = '',
  width,
  height,
  fill = false,
  priority = false,
  quality = 75,
  placeholder = 'blur',
  blurDataURL,
  className = '',
  fallbackSrc = '/app-images/default-fallback-image.png',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const imageProps = {
    src: imgSrc,
    alt,
    quality,
    priority,
    placeholder,
    blurDataURL,
    onError: handleError,
    onLoad: handleLoad,
    className: `${classes.dynamicImage} ${className}`,
    ...props
  };

  if (fill) {
    return (
      <div className={`${classes.imageContainer} ${className}`}>
        {isLoading && (
          <div className={classes.loadingPlaceholder}>
            <div className={classes.spinner}></div>
          </div>
        )}
        <Image
          {...imageProps}
          fill
          style={{
            objectFit: 'cover',
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }}
        />
      </div>
    );
  }

  return (
    <div className={`${classes.imageWrapper} ${className}`}>
      {isLoading && (
        <div className={classes.loadingPlaceholder}>
          <div className={classes.spinner}></div>
        </div>
      )}
      <Image
        {...imageProps}
        width={width}
        height={height}
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease'
        }}
      />
    </div>
  );
};

export default DynamicImage;
