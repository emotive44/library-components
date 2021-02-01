import React, { FC, ReactElement, ReactNode, useEffect } from 'react';
import classes from './SelectOption.module.css';


interface SelectOptionProps {
  value              : string,
  currValue          : string,
  checked            : boolean,
  setSelectValue     : Function,
  template          ?: ReactNode,
  icon              ?: ReactElement,
  closeSelect: () => void,
  onChange: (value: string) => void,
}

const SelectOption:FC<SelectOptionProps> = ({
  icon,
  value,
  checked,
  template,
  onChange,
  currValue,
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

  // check if have default value, and set template for selectedValue
  useEffect(() => {
    if(currValue === value) {
      setSelectValue(content);
    }
  }, []);

  const clickHendler = () => {
    closeSelect();  // on every choosed option we close select popup
    onChange(value); // set value for select 
    setSelectValue(content); // if option is not only text we set current template like a value
  }


  return (
    <div className={classes.option} onClick={clickHendler} >
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
