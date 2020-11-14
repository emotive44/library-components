import React, { FC, useState } from 'react';
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
  const [hover, setHover] = useState(false);
  const labelClasses: string[] = [classes.label];
  if(leftLabel) labelClasses.push(classes.left);
  
  const wrapperClasses: string[] = [classes.wrapper];
  if(hover) wrapperClasses.push(classes.hover);

  return (
    <section className={classes.container}>
      <label htmlFor={id} className={labelClasses.join(' ')}>
        {label && 
          (<span
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
          >
            {label}
          </span>) 
        }
        <div 
          onMouseEnter={() => setHover(true)} 
          onMouseLeave={() => setHover(false)}
          className={wrapperClasses.join(' ')} 
        >
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
