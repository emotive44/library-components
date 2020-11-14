import React, { FC, useState } from 'react';
import classes from './RadioBtn.module.css';


interface RadioBtnProps {
  callbackChange    : React.ChangeEventHandler<HTMLInputElement>;
  checked           : boolean;
  name              : string;
  value             : string;
  id                ?: string;
  label             ?: string;
  leftLabel         ?: boolean;
}

const RadioBtn: FC<RadioBtnProps> = ({
  id,
  name,
  label,
  value,
  checked,
  leftLabel,
  callbackChange,
}) => {
  const [hover, setHover] = useState(false);

  const labelClasses: string[] = [classes.label];
  if(leftLabel) labelClasses.push(classes.left);

  const wrapperClasses: string[] = [classes.wrapper];
  if(hover) wrapperClasses.push(classes.hover);

  return (
    <div>
      <label htmlFor={id} className={labelClasses.join(' ')}>
        {label && 
          <span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
            {label}
          </span>
        }
        <div 
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={wrapperClasses.join(' ')}
        >
          <input 
            hidden 
            id          = {id} 
            name        = {name}
            type        = "radio" 
            value       = {value}
            checked     = {checked}
            onChange    = {callbackChange}
          />
          <span className={classes.checked}></span>
        </div>
      </label>
    </div>
  )
}

export default RadioBtn;
