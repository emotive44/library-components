import React, { FC, ReactElement } from 'react';
import classes from './Divider.module.css';

interface DividerProps {
  title           ?: string,
  horizontal      ?: boolean,
  img             ?: string,
  icon            ?: ReactElement;
}

const Divider: FC<DividerProps> = ({ 
  icon,
  title,
  img,
  horizontal,
}) =>  {
  const dividerClasses = [classes.divider];
  if(horizontal) {
    dividerClasses.push(classes.horizontal);
  }

  return (
    <h3 className={dividerClasses.join(' ')}>
      <small className={classes.left} />
      <span>
        {title && title}
        {icon && icon}
        {img && <img src={img}  alt="" />}
      </span>
      <small className={classes.right} />
    </h3>
  );
}

export default Divider;