import React, { FC } from 'react';
import classes from './CheckBox.module.css';

interface CheckBoxProps { 
  callbackChange  : React.ChangeEventHandler<HTMLInputElement>;
  checked         : boolean;
  name            : string;
  id              ?: string;
  label           ?: string;
  leftLabel       ?: boolean;
}

const CheckBox:FC<CheckBoxProps> = ({
  id,
  name,
  label,
  checked,
  leftLabel,
  callbackChange,
}) => {
  const labelClasses: string[] = [classes.label];
  if(leftLabel) labelClasses.push(classes.left);
  
  return (
    <section className={classes.container}>
      <label htmlFor={id} className={labelClasses.join(' ')}>
        {label && <span>{label}</span> }
        <div className={classes.wrapper}>
          <input 
            hidden
            id           = {id} 
            name         = {name}
            checked      = {checked}
            type         = "checkbox" 
            onChange     = {callbackChange}
          />
          <span className={classes.checked} />
        </div>
      </label>
    </section>
  )
}

export default CheckBox;
