import React, { FC, useEffect, useRef } from 'react';
import classes from './RangeSlider.module.css';


interface RangeSliderProps {
  name                  :  string,
  value                 :  string,
  minValue              :  number,
  maxValue              :  number,
  onChange              :  Function,
  defaultValue          ?: number,
}

const RangeSlider:FC<RangeSliderProps> = ({
  name,
  value,
  onChange,
  minValue,
  maxValue,
  defaultValue,
}) => {
  const bubbleRef = useRef(null);
  
  // mooving bubble value input
  useEffect(() => {
    const min = minValue ? minValue : 0;
    const max = maxValue ? maxValue : 100;
    let currValue: number = 0;
    if(value) {
      currValue = ((+value - min) * 100) / (max - min);
    } else if(defaultValue) {
      currValue = ((defaultValue - min) * 100) / (max - min);
    }

    const el: any = bubbleRef.current;
    el.style.left = `calc(${currValue}% + (${8 - currValue * 0.15}px))`;
  }, [minValue, maxValue, value, defaultValue]);

  return (
    <div className={classes.range}>
      <span className={[classes['border-value'], classes.left].join(' ')}>
        {minValue}
      </span>
      <div className={classes.wrapper}>
        <input 
          type              = "range"
          name              = {name} 
          min               = {minValue}
          max               = {maxValue}
          onChange          = {(e) => onChange(e)}
          value             = {value || defaultValue || minValue} 
          />
        <span className={classes.bubble} ref={bubbleRef} >
          {value || defaultValue || minValue}
        </span>
      </div>
      <span className={[classes['border-value'], classes.right].join(' ')}>
        {maxValue}
      </span>
    </div>
  );
}

export default RangeSlider;
