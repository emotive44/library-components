import React, { FC, ReactElement } from 'react';
import classes from './Divider.module.css';

interface DividerProps {
  imgSrc          ?: string;
  icon            ?: ReactElement;
  title           ?: string,
  longerLines     ?: boolean, // extension of width on lines
  basicDivider    ?: boolean, // if you want only title 
}

const Divider: FC<DividerProps> = ({ 
  icon,
  title,
  imgSrc,
  longerLines,
  basicDivider,
}) =>  {

  if(basicDivider && (title || icon)) {
    return (
      <h3 className={classes.divider}>
        {title}
        {icon}
      </h3>
    )
  }

  const dividerImgClasses: string[] = [classes.dividerImg];
  if(longerLines) {
    dividerImgClasses.push(classes.longer);
  }

  if(imgSrc) {
    return (
      <div className={dividerImgClasses.join(' ')}>
        <img src={imgSrc} alt="" />
      </div>
    )
  }

  return null;
}

export default Divider;