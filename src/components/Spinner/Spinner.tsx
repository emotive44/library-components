import React, { FC } from 'react';
import classes from './Spinner.module.css';


interface SpinnerProps {
  btnSpinner?: boolean
}

const Spinner: FC<SpinnerProps> = ({
  btnSpinner
}) => {
  const spinnerClasses = [classes.spinner];

  if(btnSpinner) {
    spinnerClasses.push(classes['button-spinner']);
  }

  return (
    <div className={spinnerClasses.join(' ')}>
      <img
        src="/spinner.gif"
        alt=""
      />
    </div>
  );
}

export default Spinner;