import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import classes from  './Button.module.css';

import Spinner from '../Spinner/Spinner';


interface ButtonProps {
  type?: 'secondary' | 'success' | 'danger' | 'warning' | 'dark' | 'light' | 'link',
  size?: 'small' | 'medium' | 'large',
  href?: string, // url link
  newBlank?: boolean, // if want open url link at new page
  className?: string,
  outline?: boolean, // if want button to be with transparent background
  callback?: () => any,
  disabled?: boolean,
  loading?: boolean,
  fullWidth?: boolean,
}

const Button: FC<ButtonProps> = ({
  type,
  size,
  href,
  outline,
  callback,
  disabled,
  loading,
  children,
  newBlank,
  fullWidth,
  className,
}) => {

  const mainClasses: string[] = [classes.medium, classes.button];

  if(className) {
    mainClasses.push(className);
  }

  if (type) {
    switch (type) {
      case 'secondary':
        mainClasses.push(classes.secondary);
        break;
      case 'success':
        mainClasses.push(classes.success);
        break;
      case 'danger':
        mainClasses.push(classes.danger);
        break;
      case 'warning':
        mainClasses.push(classes.warning);
        break;
      case 'light':
        mainClasses.push(classes.light);
        break;
      case 'dark':
        mainClasses.push(classes.dark);
        break;
    }
  }

  if(size) {
    switch (size) {
      case 'small':
        mainClasses.push(classes.small);
        break;
      case 'medium':
        mainClasses.push(classes.medium);
        break;
      case 'large':
        mainClasses.push(classes.large);
        break;
    }
  }

  if(fullWidth) {
    mainClasses.push(classes.block);
  }

  // check if want button to be transparent background
  if(outline) {
    mainClasses.push(classes.outline);
  }

  if(type === 'link') {
    return (
      <Link 
        className   = {classes.link}
        to          = {href ? href : ''}
        target      = {newBlank ? '_blank' : ''}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      onClick       = {callback}
      disabled      = {disabled}
      className     = {mainClasses.join(' ')}
    >
      {loading ? <Spinner btnSpinner /> : children}
    </button>
  );
}

export default Button;