import React, { FC, ReactElement, ReactNode } from 'react';


interface OptionProps {
  value            : any,
  label           ?: string,
  customTempValue ?: ReactNode,
  icon            ?: ReactElement,
}

const Option:FC<OptionProps> = ({ children }) => {
  return <> {children} </>;
}

export default Option;
