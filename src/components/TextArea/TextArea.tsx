import React, { FC, useEffect, useState } from 'react';
import classes from './TextArea.module.css';


interface TextAreaProps {
  id           ?: string;
  cols         ?: number;
  rows         ?: number;
  name         ?: string;
  label        ?: string;
  nonResize    ?: boolean; 
  readonly     ?: boolean;
  required     ?: boolean;
  disabled     ?: boolean;
  autoFocus    ?: boolean;
  maxLength    ?: number;     // maxLength for words in textarea
  className    ?: string;
  placeHolder  ?: string;
  labelLeft    ?: boolean;
  labelRight   ?: boolean;
  defaultValue ?: string;
}

const TextArea: FC<TextAreaProps> = ({
  id,
  name,
  cols,
  rows,
  label,
  readonly,
  required,
  disabled,
  nonResize,
  autoFocus,
  maxLength,
  className,
  labelLeft,
  labelRight,
  placeHolder,
  defaultValue,
}) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if(defaultValue) setValue(defaultValue);
  }, [defaultValue, setValue]);

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  }

  const containerClasses: string[] = [classes.container];
  if(labelLeft) containerClasses.push(classes.left);
  if(labelRight) containerClasses.push(classes.right);

  const textAreaClasses: string[] = [classes.textarea];
  if(className) textAreaClasses.push(className);
  if(!cols && !rows) textAreaClasses.push(classes.size); // append default size 
  if(nonResize) textAreaClasses.push(classes.nonresize); // fixed size of textarea

  return <section className={containerClasses.join(' ')}>
    {label && <label htmlFor={id}> {label} </label> }

    <textarea 
      id          = {id} 
      name        = {name} 
      cols        = {cols} 
      rows        = {rows}
      value       = {value}
      readOnly    = {readonly}
      required    = {required}
      disabled    = {disabled}
      autoFocus   = {autoFocus}
      maxLength   = {maxLength}
      placeholder = {placeHolder}
      className   = {textAreaClasses.join(' ')}
      onChange    = {changeHandler}
    />
  </section>
}

export default TextArea;
