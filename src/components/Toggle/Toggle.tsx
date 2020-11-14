import React, { FC } from 'react';
import classes from './Toggle.module.css';


interface ToggleProps {
  callbackChange  : React.ChangeEventHandler<HTMLInputElement>;
  checked         : boolean;
  name            : string;
  id              ?: string;
  label           ?: string;
  leftLabel       ?: boolean;
}

const Toggle: FC<ToggleProps> = ({
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
    <div>
      <label htmlFor={id} className={labelClasses.join(' ')}>
        {label && <span>{label}</span>}
        <input 
          hidden 
          id         = {id} 
          name       = {name}
          checked    = {checked}
          type       = "checkbox" 
          className  = {classes.toggle} 
          onChange   = {callbackChange}
        />
        <div className={classes.wrapper}>
          <span className={classes.checked}></span>
        </div>
      </label>
    </div>
  )
}

export default Toggle;
