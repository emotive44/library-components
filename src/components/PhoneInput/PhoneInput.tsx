import React, { FC, useEffect, useState, useRef } from 'react';
import classes from './PhoneInput.module.css';

import { Select, Option } from '../Select';
import Input from '../Input/Input';
import { countries } from './countries';


interface PhoneInputProps {
  label                   ?: string,
  className               ?: string,
  err                     ?: string,
  name                     : string,
  value                    : string,
  callbackChange           : Function,
}

const PhoneInput:FC<PhoneInputProps> = ({
  err,
  name,
  value,
  label,
  className,
  callbackChange,
}) => {
  const phoneRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [prefix, setPrefix] = useState('+359');

  const phoneInputClasses = [classes['phone-input']];
  if(className) {
    phoneInputClasses.push(className);
  }

  // get width of container, to make select options width 100%
  useEffect(() => {
    const el: any = phoneRef.current;
    setWidth(el.getBoundingClientRect().width);
  }, []);

  useEffect(() => {
    callbackChange(undefined, prefix, name);
  }, [prefix]);

  const generateImgFlag = (code: string) => {
    return (
      <img 
        alt               = ''
        className         = {classes['country-flags']} 
        src               = {`https://flagpedia.net/data/flags/h80/${code}.webp`} 
      />
    );
  }

  const options = countries.map((country, i) => {
    return (
      <Option 
        key               = {i}
        value             = {country.pattern} 
        label             = {country.country} 
        customTempValue   = {generateImgFlag(country.code)}
      >
        <div className={classes['custom-temp-opts']}>
          {generateImgFlag(country.code)}
          <span> {country.country} </span>
          <span> ({country.pattern}) </span>
        </div>
      </Option>
    )
  });

  return (
   <div ref={phoneRef}>
     {label && <p>{label}</p>}
     <div className={phoneInputClasses.join(' ')}>
        <Select
          searchable
          optsMaxHeight   = {300}
          optsWidth       = {width}
          value           = {prefix}
          onChange        = {setPrefix}
          className       = {classes.select}
        >
          {options}
        </Select>

        <Input 
          type            = 'text'
          name            = {name}
          value           = {value}
          className       = {classes.input}
          maxLength       = {prefix.length + 9}
          callbackChange  = {(e: any) => callbackChange(e, prefix)}
        />
     </div>
     {err && <p className={classes.errmsg}> {err} </p>}
   </div>
  );
}

export default PhoneInput;
