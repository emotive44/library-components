import React, { FC, useState } from 'react';
import classes from './Datepicker.module.css';

import moment from 'moment';


const months: any = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  "09": 'September',
  '10': 'Octomber',
  '11': 'November',
  '12': 'December',
}

type TFormat = 'DD-MM-YYYY' | 'MM-DD-YYYY' | 'YYYY-MM-DD';

interface DatepickerProps {
  name                :  string,
  label               ?: string,
  minDate             ?: string,
  maxDate             ?: string,
  format              ?: TFormat,
  callbackChange      :  (date: string, name: string) => void,
}

const Datepicker:FC<DatepickerProps> = ({
  name,
  label,
  format,
  minDate,
  maxDate,
  callbackChange,
}) => {
  const [inputValue, setInputValue] =useState('');
  // set default placeHolder depands by date format
  let placeHolder = ''
  if(format) {
    switch (format) {
      case 'MM-DD-YYYY':
        placeHolder = 'Month / Day / Year';
        break;
      case 'YYYY-MM-DD':
        placeHolder = 'Year / Month / Day';
        break;
      case 'DD-MM-YYYY':
        placeHolder = 'Day / Month / Year';
        break;
    }
  } else {
    placeHolder = 'Day / Month / Year';
  }
  
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    let date = e.target.value;

    // convert date for specific date-format
    const momentObj = moment(date, 'YYYY-MM-DD');
    date = momentObj.format(format ? format : 'DD-MM-YYYY');

    // print date and show month for user like: 12 / January / 2020
    let currDateForm = '';
    if(format) {
      switch (format) {
        case 'MM-DD-YYYY':
          currDateForm = date.split('-')[0];
          currDateForm = `${months[currDateForm]} / ${date.split('-')[1]} / ${date.split('-')[2]}`
          break;
        case 'YYYY-MM-DD':
          currDateForm = date.split('-')[1];
          currDateForm = `${date.split('-')[0]} / ${months[currDateForm]} / ${date.split('-')[2]}`
          break;
        case 'DD-MM-YYYY':
          currDateForm = date.split('-')[1];
          currDateForm = `${date.split('-')[0]} / ${months[currDateForm]} / ${date.split('-')[2]}`
          break;
      }
    } else {
      currDateForm = date.split('-')[1];
      currDateForm = `${date.split('-')[0]} / ${months[currDateForm]} / ${date.split('-')[2]}`
    }

    // set input value only for frontend
    setInputValue(currDateForm)

    callbackChange(date, name);
  }

  return (
    <div>
      <span>{label}</span>
      <div className={classes['date-picker']}>
        <div className={classes['input-wrapper']}>
          <span className={classes.value}>
            {inputValue ? inputValue : placeHolder}
          </span>
          <input 
            type            = 'date'
            name            = {name}
            min             = {minDate}
            max             = {maxDate}
            defaultValue    = {maxDate}
            onChange        = {onChange}
            className       = {classes.input} 
          />
        </div>
        <span className={classes.button}>
          <img src='/calendar.png' alt='' />
        </span>
      </div>
    </div>
  );
}

export default Datepicker