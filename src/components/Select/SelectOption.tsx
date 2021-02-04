import React, { FC, ReactElement, ReactNode, useEffect } from 'react';
import classes from './SelectOption.module.css';

import Tag from '../Tag/Tag';
import { IOption } from './Select';


interface SelectOptionProps {
  value              : string,
  label             ?: string,
  setSelectValue     : Function,
  onChange           : Function,
  closeSelect        : Function,
  multiValues       ?: IOption[]
  template          ?: ReactNode,
  icon              ?: ReactElement,
  currValue          : any,
}

const SelectOption:FC<SelectOptionProps> = ({
  icon,
  value,
  label,
  template,
  onChange,
  currValue,
  multiValues,
  closeSelect,
  setSelectValue,
}) => {
  let content: ReactNode = null;
  if(template) {
    content = template;
  } else {
    content = (
      <div className={classes.content}> 
        {icon && icon}
        <p> {label} </p>
      </div>
    );
  }

  // remove option value from selected array with options
  const removeSelectedValue = (value: any) => {
    onChange(value, true, true);
  }

  let multiContent: ReactNode = null;
  if(typeof currValue === 'object') {
    multiContent = multiValues!.map((option, i: number) => {
      return (
        <Tag 
          key                   = {i}
          type                  = 'light'
          icon                  = {option.icon}
          text                  = {!option.temp ? option.label : ''}
          closeClickCallback    = {() => removeSelectedValue(option.value)}
        > {option.temp} </Tag>
      );
    });
  }

  // check that current select option is selected 
  let checked = false;
  if(typeof currValue === 'string') {
    checked = currValue === value;
  } else {
    checked = JSON.stringify(currValue) === JSON.stringify(value);
  }

  if(Array.isArray(currValue)) {
    if(typeof value !== 'object') {
      checked = currValue.includes(value);
    }

    if(typeof value === 'object') {
      currValue.forEach(curr => {
        if( JSON.stringify(curr) === JSON.stringify(value)) {
          checked = true;
        }
      });
    }
  }
 
  const optionClasses = [classes.option];
  if(checked) {
    optionClasses.push(classes['checked-option']);
  }

  // check if have default value, and set template for selectedValue
  useEffect(() => {
    // single select and value string
    if(typeof currValue === 'string' && currValue === value) {
      setSelectValue(content);
      return;
    } 

    // single select and value object
    if(typeof value === 'object' && JSON.stringify(currValue) === JSON.stringify(value)) {
      setSelectValue(content);
      return;
    }

    // for multi select 
    if(Array.isArray(currValue)) {
      // when remove last element from multi select, we set null and show placeholder
      if(currValue.length < 1) {
        setSelectValue(null);
        return;
      }

      // // show all already selected options values
      setSelectValue(multiContent);
    }
  }, [currValue]);

  const clickHendler = () => {
    if(!Array.isArray(currValue) && !checked) {
      closeSelect();  // on every choosed option we close select popup
      onChange(value); // set value for select 
      setSelectValue(content); // if option is not only text we set current template like a value
    }

    if(Array.isArray(currValue)){
      // with multi select if options is alredy checked after second click will be unchecked and removed
      !checked ? onChange(value, true) : onChange(value, true, true);
    }
  }

  return (
    <div className={optionClasses.join(' ')} onClick={clickHendler} >
      {content}
      {checked && (
         <span className={classes.checked}>
          <i className='fas fa-check' />
        </span>
      )}
    </div>
  );
}

export default SelectOption;
