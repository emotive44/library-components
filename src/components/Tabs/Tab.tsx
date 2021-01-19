import React, { FC, ReactElement } from 'react';


interface TabProps {
  label         :  string,
  tabName       ?: string,
  icon          ?: ReactElement,
}

const Tab:FC<TabProps> = ({ children }) => {
  return (<> {children} </>);
}

export default Tab;
