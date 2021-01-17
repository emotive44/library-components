import React, { FC, useState, useEffect } from 'react';
import classes from './Notification.module.css';

import Text from '../Text/Text';


type TType        = 'success' | 'info' | 'warning' | 'error';
type TPosition    = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface NotificationProps {
  type            :  TType,
  title           :  string,
  message         :  string,
  secondsDelay    ?: number,
  className       ?: string,
  autoClose       ?: boolean,
  position        :  TPosition,
}

const Notification: FC<NotificationProps> = ({
  type,
  title,
  message,
  position,
  autoClose,
  className,
  secondsDelay,
}) => {
  const [notificationClasses, setNotificationClasses] = useState([classes.notification, classes[type], classes[position]]);
  if(className) {
    notificationClasses.push(className);
  }

  let iconClass: string;
  switch(type) {
    case 'warning':
      iconClass =  'fa-exclamation-triangle';
      break;
    case 'success':
      iconClass = 'fa-check-circle';
      break;
    case 'error':
      iconClass = 'fa-times';
      break;
    case 'info':
      iconClass = 'fa-info-circle';
      break;
  }

  let timeOut: number = 2000;
  if(secondsDelay) {
    timeOut = secondsDelay * 1000;
  }

  useEffect(() => {
    if(autoClose) {
      setTimeout(() => {
        closeNotification();  
      }, timeOut);
    }
  }, [autoClose, timeOut]);

  const closeNotification = () => {
   setNotificationClasses(prev => ([
     ...prev,
     classes.closed
   ]));
  }

  return (
    <div className={notificationClasses.join(' ')} >
      <div className={classes.content} >
        <div className={classes.title}>
          <i className={['fas', iconClass].join(' ')} />
          <Text 
            fontSize        = {18}
            fontWeight      = "800"
            textTransform   = "uppercase" 
          >
            {title}
          </Text>
        </div>
        <Text textIndent={10}> {message} </Text>
      </div>
      <span 
        className           = {classes.close}
        onClick             = {closeNotification}
      >
        <i className="far fa-times-circle" />
      </span>
    </div>
  )
};

export default Notification;
