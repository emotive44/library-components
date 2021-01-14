import React, { FC, ReactElement } from 'react';
import classes from './NotFound.module.css';


interface NotFoundProps {
  title: string,
  message?: string,
  icon?: ReactElement,
}

const NoFound: FC<NotFoundProps> = ({
  icon,
  title,
  message,
  children,
}) => {
  const messageClasses = [classes.message];

  if (!title) {
    messageClasses.push(classes.nom);
  }

  //Check do we need additional class for childrens
  let childrenClasses = [];
  if (typeof children !== 'undefined') {
    childrenClasses.push(classes.mtop);
  }

  return (
    <div className={classes.nofound}>
      {icon && <div className={classes.icon}> {icon} </div>}

      {title && <h2> {title} </h2>}

      {message && <div className={messageClasses.join(' ')}> {message} </div>}

      <div className={childrenClasses.join(' ')}> {children} </div>
    </div>
  );
};

export default NoFound;
