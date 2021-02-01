import React, { FC, useState, useRef, useEffect, ReactElement, ReactNode } from 'react';
import classes from './Select.module.css';

import Input from '../Input/Input';
import SelectOption from './SelectOption';
import CustomScroll from '../CustomScroll/CustomScroll';


interface IChildProps {
  props: {
    value              : string
    icon              ?: ReactElement,
    children           : React.ReactNode,
  },
}

interface SelectProps {
  value                : string, // value, which will send to server
  optsMaxHeight        : number,
  err                 ?: string,
  label               ?: string,
  placeholder         ?: string,
  className           ?: string,
  optsWidth           ?: number,
  clearable           ?: boolean,
  searchable          ?: boolean,
  onChange: (value: string) => void, // change current value
}

const Select:FC<SelectProps> = ({
  err,
  label,
  onChange,
  children,
  className,
  optsWidth,
  clearable,
  searchable,
  placeholder,
  optsMaxHeight,
  value: currValue,
}) => {
  const opRef = useRef(null);
  const selectRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [optionsHeight, setOptionsHeight] = useState(0);
  const [selectValue, setSelectValue] =  useState<ReactNode>(null);
  const [searchValue, setSearchValue] = useState('');

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

  // reset value and close a select popup
  const clearHandler = () => {
    setSelectValue(null);
    setOpen(false);
    onChange('');
  }

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    // set dynamicly height for options container
    const el: any = opRef.current;
    setOptionsHeight(el.scrollHeight + 7);

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
  }, [setOptionsHeight, searchValue]);

  // dynamic styles for options contnainer
  let optionsStyles: any = { top: '30px', maxHeight: '0px' };
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
    optionsStyles.top = '45px';
    optionsStyles.maxHeight = `${optionsHeight < optsMaxHeight! ? optionsHeight : optsMaxHeight!}px`;
  } 

  // create Options for select
  let optionsContent = React.Children.map(children as IChildProps[], (child: IChildProps) => {
    const { value, icon } = child?.props;
    return (
      <SelectOption 
        icon            = {icon}
        value           = {value}
        onChange        = {onChange}
        currValue       = {currValue}
        setSelectValue  = {setSelectValue}
        checked         = {value === currValue}
        template        = {child.props.children}
        closeSelect     = {() => setOpen(false)}
      />
    );
  });

  // check if user put in search value, we look for all options which start with this search value
  if(searchValue !== '') {
    optionsContent = optionsContent.filter(
      child => child.props.value.toLowerCase().startsWith(searchValue.toLowerCase())
    );
  }

  return (
    <>
      <p>{label}</p>
      <div className={mainClasses.join(' ')} ref={selectRef}>
        <div className={classes.select}>
          <CustomScroll size='micro' className={classes.scroll}>
            <div onClick={toggleSelect} className={classes['select-value']}>
              {selectValue ? selectValue : placeholder} 
            </div>
          </CustomScroll>
          <div className={classes.icons}>
            {clearable && (
              <span className={classes.icon} onClick={clearHandler}>
                <i className='fas fa-times' />
              </span>
            )}
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
          {searchable && (
            <div  className={classes.search}>
              <Input
                leftIcon 
                type              = "search" 
                name              = "search"
                placeHolder       = "Search...." 
                value             = {searchValue}
                callbackChange    = {inputChangeHandler}
              />
            </div>
          )}

          {optionsContent.length > 0 
            ? optionsContent
            : <p className={classes['search-msg']}>No Options</p>
          }
        </div>
      </div>
      {err && <p className={classes.errmsg}> {err} </p>}
    </>
  );
}

export default Select;
