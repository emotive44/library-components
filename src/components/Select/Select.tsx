import React, { FC, useState, useRef, useEffect } from 'react';
import classes from './Select.module.css';

import CustomScroll from '../CustomScroll/CustomScroll';

interface SelectProps {
  optsMaxHeight        : number,
  err                 ?: string,
  label               ?: string,
  placeholder         ?: string,
  className           ?: string,
  optsWidth           ?: number,
  clearable           ?: boolean,
}

const Select:FC<SelectProps> = ({
  err,
  label,
  className,
  optsWidth,
  clearable,
  placeholder,
  optsMaxHeight,
}) => {
  const opRef = useRef(null);
  const selectRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [optionsHeight, setOptionsHeight] = useState(0);

  // add custom class 
  const mainClasses = [classes.container];
  if(className) {
    mainClasses.push(className);
  }

  // animate open and close select 
  const optionsClasses = [classes.options];
  const toggleIconClasses = [classes.icon, classes.arrow];
  if(open) {
    toggleIconClasses.push(classes.open);
    optionsClasses.push(classes.open);
  }
  
  const toggleSelect = () => {
    setOpen(prev => !prev);
  }

  useEffect(() => {
    // set dynamicly height for options container
    const el: any = opRef.current;
    setOptionsHeight(el.scrollHeight);

    // close select if user click outside
    const handleClickOutside = (e: MouseEvent) => {
      const el: any = selectRef.current;
      if (el && !el.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // dynamic styles for options contnainer
  let optionsStyles: any = { bottom: '0px', maxHeight: '0px' };
  // if options container is more than maxheight, set scrollbar
  if(optionsHeight > optsMaxHeight!) {
    optionsStyles.overflowY = 'auto';
  }

  // set custom width, by default is 100%
  if(optsWidth) {
    optionsStyles.width = `${optsWidth}px`;
  }

  // if options container is smaller then maxheight we set him value else set maxheight 
  if(open) {
    optionsStyles.bottom = `-${optionsHeight < optsMaxHeight! ? optionsHeight + 10 : optsMaxHeight! + 10}px`;
    optionsStyles.maxHeight = `${optionsHeight < optsMaxHeight! ? optionsHeight : optsMaxHeight!}px`;
  } 

  return (
    <>
      <p>{label}</p>
      <div className={mainClasses.join(' ')} ref={selectRef}>
        <div className={classes.select}>
          <CustomScroll size='micro' className={classes.scroll}>
            <p onClick={toggleSelect} className={classes.label}> {placeholder} </p>
          </CustomScroll>
          <div className={classes.icons}>
            {clearable && <span className={classes.icon}> <i className='fas fa-times' /> </span>}
            <small />
            <span onClick={toggleSelect} className={toggleIconClasses.join(' ')}>
              <i className='fas fa-chevron-down' />
            </span>
          </div>
        </div>
        <div 
          ref           = {opRef} 
          style         = {optionsStyles}
          className     = {optionsClasses.join(' ')} 
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maiores impedit iure illum? Dignissimos ullam, quaerat obcaecati doloribus perspiciatis sunt quisquam veniam laudantium itaque? Deserunt sapiente voluptate eveniet error minima.</p>
          <p>1 123 1</p>
        </div>
      </div>
      {err && <p className={classes.errmsg}> {err} </p>}
    </>
  );
}

export default Select;
