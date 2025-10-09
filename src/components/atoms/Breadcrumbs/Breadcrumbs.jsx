import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import classes from './Breadcrumbs.module.css';

const Breadcrumbs = ({ 
  items = [], 
  separator = '/', 
  className = '',
  showHome = true 
}) => {
  const router = useRouter();

  const handleClick = (href, e) => {
    if (href) {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <nav className={`${classes.breadcrumbs} ${className}`} aria-label="breadcrumb">
      <ol className={classes.breadcrumbList}>
        {showHome && (
          <li className={classes.breadcrumbItem}>
            <Link href="/" className={classes.breadcrumbLink}>
              Home
            </Link>
          </li>
        )}
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 || showHome ? (
              <li className={classes.separator}>
                <span>{separator}</span>
              </li>
            ) : null}
            <li className={classes.breadcrumbItem}>
              {item.href ? (
                <Link 
                  href={item.href} 
                  className={classes.breadcrumbLink}
                  onClick={(e) => handleClick(item.href, e)}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={classes.breadcrumbCurrent}>
                  {item.label}
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
