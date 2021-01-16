import React, { FC, useRef, useState } from 'react';
import classes from './AccordionSection.module.css';


interface AccordionSectionProps {
  title: string,
  isOpen?: boolean,
  clickHandler: (title: string) => void,
}

const AccordionSection: FC<AccordionSectionProps> = ({
  title,
  isOpen,
  children,
  clickHandler,
}) => {
  const childrenRef = useRef(null);
  const [height, setHeight] = useState(0);

  const titleClasses = [classes.title];
  const arrowClasses = ["fas fa-chevron-down"];
  if(isOpen) {
    arrowClasses.push(classes.open);
    titleClasses.push(classes['title-open']);
  } else {
    arrowClasses.push(classes.close);
  }
 
  const onClick = () => {
    clickHandler(title);

    const el: any = childrenRef.current;
    if(el) {
      setHeight(el.scrollHeight);
    }
  }

  return (
    <div className={classes.section}>
      <div onClick={onClick}>
        <div className={titleClasses.join(' ')}>
          <p> {title} </p>
          <div className={classes.arrow}>
            <i className={arrowClasses.join(' ')} />
          </div>
        </div>
      </div>
      <div 
        className={classes.children} 
        ref={childrenRef } 
        style={{
          maxHeight: `${isOpen ? `${height}px` : '0px'}`,
          marginTop: `${!isOpen ? '-0.5rem' : '0'}`
        }}
      >
        {children} 
      </div>
    </div>
  );
}

export default AccordionSection;
