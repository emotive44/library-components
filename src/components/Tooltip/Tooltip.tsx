import React, { FC, useEffect, useRef, useState } from 'react';
import classes from './Tooltip.module.css';


interface TooltipProps {
  message   : any,
  position  ?: 'left' | 'right' | 'top' | 'bottom',
}

const Tooltip: FC<TooltipProps> = ({
  position,
  message,
  children
}) => {
  const msgRef = useRef(null);
  const [msgWidth, setMsgWidth] = useState(0);
  const [styles, setStyles] = useState<any>({});
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

  useEffect(() => {
    let el: any = msgRef.current;
    setMsgWidth(el.getBoundingClientRect().width + 10);

    // set inital styles to have animation for show and hide
    if(position === 'right') {
      setStyles({ left: `${msgWidth - 50}px` });
    }

    if(position === 'left') {
      setStyles({ right: `${msgWidth - 50}px` });
    }
  }, [msgWidth, position]);

  const showToolTip = () => {
    if(position === 'right') {
      setStyles({ left: `${msgWidth}px` });
    }

    if(position === 'left') {
      setStyles({ right: `${msgWidth}px` });
    }
  }

  const hideToolTip = () => {
    if(position === 'right') {
      setStyles({ left: `${msgWidth - 50}px` });
    }

    if(position === 'left') {
      setStyles({right: `${msgWidth - 50}px`});
    }
  }

  return (
    <div 
      ref             = {msgRef}
      onMouseEnter    = {showToolTip}
      onMouseLeave    = {hideToolTip} 
      className       = {mainClasses.join(' ')} 
    >
      <div className={classes.children}>
        {children}
        <span className={classes.message} style={styles}>
          {message}
        </span>
      </div>
    </div>
  );
};

export default Tooltip;