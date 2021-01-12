import React, { FC } from 'react';

import classes from './Tooltip.module.css';


interface TooltipProps {
  message: any,
  position?: 'left' | 'right' | 'top' | 'bottom',
}

const Tooltip: FC<TooltipProps> = ({
  position,
  message,
  children
}) => {
  const mainClasses = [classes.tooltip];

  //Set position of the tooltip
  if (position) {
    switch (position) {
      case 'bottom':
        mainClasses.push(classes['position-bottom']);
        break;
      case 'left':
        mainClasses.push(classes['position-left']);
        break;
      case 'right':
        mainClasses.push(classes['position-right']);
    }
  }
  else {
    mainClasses.push(classes['position-top']);
  }

  return (
    <div className={mainClasses.join(' ')}>
      <div className={classes.children}>
        {children}
        <span className={classes.message}>
          {message}
        </span>
      </div>
    </div>
  );
};

export default Tooltip;