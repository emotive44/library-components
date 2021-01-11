import React, { FC } from 'react';

import classes from './InfoBox.module.css';

interface InfoBoxProps {
  title: string
}

const InfoBox: FC<InfoBoxProps> = ({ title, children }) => {
	const mainClasses = [classes.infobox];

  return (
    <div className={mainClasses.join(' ')}>
      <div 
        className={classes.title}
        dangerouslySetInnerHTML={{__html: title}} 
      />
      <div className={classes.body}>
        <div className={classes.cnt}>
          {children}
        </div>
      </div>
    </div>
  );
}


export default InfoBox;
