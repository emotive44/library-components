import React, { FC, ReactElement, ReactNode, useEffect } from 'react';
import classes from './SelectOption.module.css';

import { IOption } from './Select';


interface SelectOptionProps {
  value              : string,
  setSelectValue     : Function,
  onChange           : Function,
  closeSelect        : Function,
  multiValues       ?: IOption[]
  template          ?: ReactNode,
  icon              ?: ReactElement,
  currValue          : string | string[],
}

const SelectOption:FC<SelectOptionProps> = ({
  icon,
  value,
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
        <p> {value} </p>
      </div>
    );
  }

  // remove option value from selected array with options
  const removeSelectedValue = (e: React.MouseEvent, value: string) => {
    e.stopPropagation();
    onChange(value, true, true);
  }

  let multiContent: ReactNode = null;
  if(typeof currValue === 'object') {
    multiContent = multiValues!.map((option, i: number) => {
      return (
        <div key={i} className={classes.multiContent}>
          {/* if we have template, present him else icon and value */}
          {option.temp ? option.temp : (<> {option.icon} <p> {option.value} </p> </>)}
          <span className={classes.close} onClick={(e) => removeSelectedValue(e, option.value)}>
            <i className='fas fa-times' />
          </span>
        </div>
      );
    });
  }

  // check that current select option is selected 
  let checked = false;
  if(typeof currValue !== 'object') {
    checked = currValue === value;
  } else {
    checked = currValue.includes(value);
  }

  const optionClasses = [classes.option];
  if(checked) {
    optionClasses.push(classes['checked-option']);
  }

  // check if have default value, and set template for selectedValue
  useEffect(() => {
    if(typeof currValue === 'string' && currValue === value) {
      setSelectValue(content);
      return;
    } 

    // when remove last element from multi select, we set null and show placeholder
    if(typeof currValue === 'object' && currValue.length < 1) {
      setSelectValue(null);
      return;
    }

    // show all already selected options values
    if(typeof currValue === 'object' && currValue.includes(value)) {
      setSelectValue(multiContent);
    }
  }, [currValue]);

  const clickHendler = () => {
    if(typeof currValue !== 'object' && !checked){
      closeSelect();  // on every choosed option we close select popup
      onChange(value); // set value for select 
      setSelectValue(content); // if option is not only text we set current template like a value
    }

    if(typeof currValue === 'object'){
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
