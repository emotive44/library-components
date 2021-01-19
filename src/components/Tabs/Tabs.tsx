import React, { FC, ReactElement, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classes from './Tabs.module.css';


interface IChildProps {
  props: {
    label               :  string,   // will be use for change current url
    tabName             ?: string,
    icon                ?: ReactElement,
    children            :  React.ReactNode,
  },
}

type TPosition = 'top' | 'bottom' | 'left' | 'right';

interface TabsProps {
  children              :  any,
  position              :  TPosition,
  noUrlChange           ?: boolean, // if you don't want to change url for tabs
}

const Tabs:FC<TabsProps> = ({
  position,
  children,
  noUrlChange,
}) => {
  // get current location
  const location = useLocation();
  
  const firstTab = children[0].props.label;
  // set active a first tabName
  const [activeTab, setActiveTab] = useState('');

  // after refresh to stay active the current tabname
  useEffect(() => {
    const currTab = location.search.split('=')[1];

    if(currTab) {
      setActiveTab(currTab)
    } else {
      setActiveTab(firstTab)
    }
  }, [location.search, firstTab]);

  const containerClasses = [classes.container, classes[position]];

  // return array with one element [{}], which contain info for active tabName
  const content: IChildProps[] = children.filter((child: IChildProps) => child.props.label === activeTab);
  // get childrens on active tabname
  const tabContent = content[0]?.props.children;


  const tabs = children.map((child: IChildProps, i: number) => {
    const { tabName, icon, label } = child.props;

    let to: string;
    // if the first tab clicks we will not change a url
    // else will add to url ?tabs={activeTabName}
    if(firstTab === label || noUrlChange) {
      to = `${location.pathname}`;
    } else {
      to = `${location.pathname}?tabs=${label}`;
    }

    //add active class
    let activeClass = '';
    if(label === activeTab) {
      activeClass = classes['active-tab'];
    }

    return (
      <NavLink
        key               = {i}
        to                = {to}
        activeClassName   = {activeClass}
        className         = {classes['tab-link']}
        onClick           = {() => setActiveTab(label)}
      >
        {icon &&  (
          <small style={{ marginRight: `${tabName && '0.6rem'}`, fontSize: `${!tabName ? '24px' : '18px'}` }}>
            {icon}
          </small>
        )}
        {tabName && <p>{tabName}</p>}
      </NavLink>
    )
  })

  return (
    <div className={containerClasses.join(' ')}>
      <div className={classes.tabs}> {tabs} </div>
      <div className={classes.content}> {tabContent} </div>
    </div>
  );
}

export default Tabs;
