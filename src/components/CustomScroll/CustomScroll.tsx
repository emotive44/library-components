import React, { FC } from 'react';
import classes from './CustomScroll.module.css';


interface CustomScrollProps {
  className?: string,
  size: 'micro' | 'small' | 'medium' | 'large',
}

const CustomScroll:FC<CustomScrollProps> = ({ 
  size, 
  children,
  className,
}) => {
  const scrollClasses = [classes.scroll];
  scrollClasses.push(classes[size]);

  if(className) {
    scrollClasses.push(className);
  }

  return (
    <div className={scrollClasses.join(' ')} >
      {children}
    </div>
  );
}

export default CustomScroll;
