import React, { FC } from 'react';
import classes from './CustomScroll.module.css';


interface CustomScrollProps {
  size: 'small' | 'medium' | 'large'
}

const CustomScroll:FC<CustomScrollProps> = ({ 
  size, 
  children
}) => {
  const scrollClasses = [classes.scroll];
  scrollClasses.push(classes[size]);

  return (
    <div className={scrollClasses.join(' ')} >
      {children}
    </div>
  );
}

export default CustomScroll;
