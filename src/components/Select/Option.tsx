import React, { FC, ReactElement } from 'react';


interface OptionProps {
  value: string,
  icon?: ReactElement
}

const Option:FC<OptionProps> = ({ children }) => {
  return <> {children} </>;
}

export default Option;
