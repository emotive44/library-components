import React, { FC, useRef, useState } from 'react';
import classes from './AccordionSection.module.css';


interface AccordionSectionProps {
  title               :  string,
  isOpen              ?: boolean,
  maxWidth            ?: number,
  sectionHeight       ?: number,
  horizontal          ?: boolean,
  clickHandler        : (title: string) => void,
}

const AccordionSection: FC<AccordionSectionProps> = ({
  title,
  isOpen,
  children,
  maxWidth,
  horizontal,
  sectionHeight,
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

  const childrenClasses: string[] = [];
  const classesSection = [classes.section]
  if(horizontal) {
    classesSection.push(classes['horizontal-section']);
    childrenClasses.push(classes['horizontal-children']);
  } else {
    childrenClasses.push(classes.children);
  }
    
  return (
    <div className={classesSection.join(' ')}>
      <div onClick={onClick} style={{display: `${horizontal && 'flex'}`}} >
        <div className={titleClasses.join(' ')}>
          <p> {title} </p>
          {/* for horizontal, don't need a arrow */}
          {!horizontal && (
            <div className={classes.arrow}>
              <i className={arrowClasses.join(' ')} />
            </div>
          )}
        </div>
      </div>

      {/* for horizontal children */}
      {horizontal && (
        <div 
          ref={childrenRef } 
          className={childrenClasses.join(' ')} 
          style= {{
            maxWidth: `${horizontal && isOpen ? `${maxWidth}rem` : '0px'}`,
            height: `${sectionHeight}rem`,
            margin: `${horizontal && !isOpen ? '0.5rem 0' : '0.5rem 1rem'}`
          }}
        >
          {children} 
        </div>
      )} 

      {/* for vertical children */}
      {!horizontal && (
        <div 
          ref={childrenRef } 
          className={childrenClasses.join(' ')} 
          style= {{
            maxHeight: `${isOpen ? `${height}px` : '0px'}`,
            marginTop: `${!isOpen ? '-0.5rem' : '0'}`,
          }}
        >
          {children} 
        </div>
      )} 
    </div>
  );
}

export default AccordionSection;
