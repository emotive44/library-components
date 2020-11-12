import React, { FC, useState } from 'react';
import classes from './CheckBox.module.css';

interface CheckBoxProps { 
  id?: string;
  name?: string;
  label?: string;
  leftLabel?: boolean;
}

const CheckBox:FC<CheckBoxProps> = ({
  id,
  name,
  label,
  leftLabel,
}) => {
  const [checked, setChecked] = useState(false);

  const labelClasses: string[] = [classes.label];
  if(leftLabel) labelClasses.push(classes.left);

  const checkHandler = () => setChecked(!checked);
  
  return (
    <section className={classes.container}>
      <label htmlFor={id} className={labelClasses.join(' ')}>
        {label && <span>{label}</span> }
        <div className={classes.wrapper}>
          <input 
            hidden
            id={id} 
            name={name}
            type="checkbox" 
            checked={checked}
            onChange={checkHandler}
          />
          <span className={classes.checked} />
        </div>
      </label>
    </section>
  )
}

export default CheckBox;
