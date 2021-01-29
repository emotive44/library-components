import React, { FC, useState } from 'react';
import classes from './Select.module.css';

import CustomScroll from '../CustomScroll/CustomScroll';

interface SelectProps {
  label       ?: string,
  clearable   ?: boolean,
}

const Select:FC<SelectProps> = ({
  label,
  clearable,
}) => {
  const [open, setOpen] = useState(false);

  const optionsClasses = [classes.options];
  const toggleIconClasses = [classes.icon, classes.arrow];
  if(open) {
    toggleIconClasses.push(classes.open);
    optionsClasses.push(classes.open);

  }

  const toggleSelect = () => {
    setOpen(prev => !prev);
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.select}>
          <CustomScroll size='micro' className={classes.scroll}>
            <p 
              onClick={toggleSelect}
              className={classes.label}
            > {label} </p>
          </CustomScroll>
          <div className={classes.icons}>
            {clearable && (
              <span className={classes.icon}>
                <i className='fas fa-times' />
              </span>
            )}
            <small />
            <span 
              onClick={toggleSelect}
              className={toggleIconClasses.join(' ')}
            >
              <i className='fas fa-chevron-down' />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Select;
