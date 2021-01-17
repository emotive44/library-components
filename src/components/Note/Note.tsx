import React, { FC } from 'react';

import classes from './Note.module.css';


interface NoteProps {
  className   ?: string,
  size        ?: number,  // fontSize in px
}

const Note: FC<NoteProps> = ({ className, children, size }) => { 
  const mainClasses = [classes.note];
  if (className) {
    mainClasses.push(className);
  }

  return (
    <div 
      className    =  {mainClasses.join(' ')}
      style        =  {{ fontSize: `${size}px` }}
    >
      {children}
    </div>
  );
	
};

export default Note;