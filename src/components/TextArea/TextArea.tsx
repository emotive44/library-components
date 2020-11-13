import React, { FC } from 'react';
import classes from './TextArea.module.css';


interface TextAreaProps {
  name         : string;
  value        : string;
  calbackChange: Function;
  id           ?: string;
  cols         ?: number;
  rows         ?: number;
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
  value,
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
  calbackChange,
}) => {
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
      value       = {defaultValue && !value ? defaultValue : value}
      readOnly    = {readonly}
      required    = {required}
      disabled    = {disabled}
      autoFocus   = {autoFocus}
      maxLength   = {maxLength}
      placeholder = {placeHolder}
      className   = {textAreaClasses.join(' ')}
      onChange    = {(e) => calbackChange(e)}
    />
  </section>
}

export default TextArea;
