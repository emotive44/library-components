import React, { FC, ReactNode } from 'react';
import classes from './Tag.module.css';


type TColor = 'secondary' | 'success' | 'danger' | 'warning' | 'dark' | 'light';

interface TagProps {
  type                 : TColor,
  text                ?: string,
  className           ?: string,
  icon                ?: ReactNode,
  closeClickCallback  ?: any,
}

const Tag:FC<TagProps> = ({
  icon,
  text,
  type,
  children,
  className,
  closeClickCallback
}) => {
  const tagClasses = [classes.tag, classes[type]];
  if(className) {
    tagClasses.push(className);
  }

  let close: ReactNode = null;
  if(closeClickCallback) {
    close = (
      <span className={classes.close} onClick={closeClickCallback} >
        <i className="fas fa-times" />
      </span>
    )
  }

  return (
    <div className={tagClasses.join(' ')}>
      {icon && icon}
      {text && <p>{text}</p>}
      {children}
      {close}
    </div>
  );
}

export default Tag;
