import React, { FC, ReactElement, useEffect, useState } from "react";
import classes from "./Input.module.css";

type InputType =
  | "email"
  | "number"
  | "password"
  | "search"
  | "text";

interface InputProps {
  id?: string;
  err?: string;
  icon?: ReactElement ;
  name?: string;
  step?: number;
  label?: string;
  type: InputType;
  pattern?: string;
  leftIcon?: boolean;
  readonly?: boolean;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  placeHolder?: string;
  labelInside?: boolean;
  defaultValue?: string | number;
  // sizes
  largeInput?: boolean;
  mediumInput?: boolean;
}

const Input: FC<InputProps> = ({
  id,
  err,
  type,
  name,
  step,
  icon, // for custom icon like icon={<i className="fas fa-user" />}
  label,
  pattern,
  leftIcon,
  readonly,
  required,
  disabled,
  className,
  labelInside,
  largeInput,
  mediumInput,
  placeHolder,
  defaultValue,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [value, setValue] = useState<number | string>("");
  const [showPass, setShowPass] = useState(false);
  const [isIcon, setIsIcon] = useState(false);


  const containerClasses:string[] = [classes.input];
  if(mediumInput) containerClasses.push(classes.medium);               //depends of size
  if(largeInput) containerClasses.push(classes.large);
  if(labelInside && largeInput) containerClasses.push(classes.inside);  // float label inside, default is on top

  const inputClasses:string[] = [classes.inputtag];
  if(className) inputClasses.push(className);                           // custom class styles

  const labelClasses:string[] = [classes.label];
  if(isHover || value || defaultValue ) labelClasses.push(classes.top); // float label on top
  if(labelInside && largeInput && leftIcon && isIcon) labelClasses.push(classes.in);

  const iconClasses:string[] = [classes.icon];
  if(leftIcon) iconClasses.push(classes.left); 
  

  const hoverHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) {
      setIsHover(true);
    }
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) {
      setIsHover(false);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  useEffect(() => {
    defaultValue && setValue(defaultValue);
    if(type === 'email' || type === 'search' || icon) setIsIcon(true);
    
  }, [setValue, defaultValue, setIsIcon, type, icon]);

  return (
    <>
      <section
        className={containerClasses.join(' ')}
      >
        {/* Default icons for types */}
        {type === "password" && (
          <span className={iconClasses.join(' ')} style={{ cursor: 'pointer' }}>
            {showPass
              ? <i className="fas fa-eye-slash" onClick={() => setShowPass(false)} />
              : <i className="fas fa-eye" onClick={() => setShowPass(true)} />
            }
          </span>
        )}
        {type === "email" && (
          <span className={iconClasses.join(' ')}>
            <i className="fas fa-at" />
          </span>
        )}
        {type === "search" && (
          <span className={iconClasses.join(' ')}>
            <i className="fas fa-search" />
          </span>
        )}
        {/*  */}
        {icon && <span className={iconClasses.join(' ')}>{icon}</span>}

        {label && <label className={labelClasses.join(' ')}>{label}</label>}

        <input
          id={id}
          name={name}
          step={step}
          value={value}
          pattern={pattern} // the pattern have to be string like: pattern="[A-Z]+", instead new RegExp
          readOnly={readonly}
          required={required}
          disabled={disabled}
          type={showPass ? "text" : type}
          className={inputClasses.join(' ')}
          placeholder={label ? "" : placeHolder}
          //events
          onBlur={blurHandler}
          onClick={hoverHandler}
          onChange={changeHandler}
        />
      </section>
      {err && <p className={classes.errmsg}>{err}</p>}
    </>
  );
};

export default Input;
