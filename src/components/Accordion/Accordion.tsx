import React, { FC, useState,useEffect } from 'react';
import classes from './Accordion.module.css';

import AccordionSection from './AccordionSection';


interface IState {
  [key: string]: boolean,
}

interface IChildProps {
  props: {
    title: string,
    children: React.ReactNode,
  },
}

interface AccordionProps {
  multipleOpen?: boolean,
  className?: string,
  maxWidth?: number, // if you want to specify with for horizontal accordion
  horizontal?: boolean,
}

const Accordion: FC<AccordionProps> = ({
  children,
  className,
  maxWidth,
  horizontal,
  multipleOpen,
}) => {
  const [state, setState] = useState<IState>({});

  // set initial state
  useEffect(() => {
    React.Children.map(children as IChildProps[], (child: IChildProps) => {
      const { title } = child?.props;
      
      setState(prev => ({
        ...prev,
        [title]: false,
      }));
    })
  }, [children]);

  const accordionClasses: string[] = [];
  if (className) {
    accordionClasses.push(className);
  }

  if(horizontal) {
    accordionClasses.push(classes['horizontal-accordion']);
  } else {
    accordionClasses.push(classes['vertical-accordion']);
  }

  const clickHandler = (title: string) => {
    if(multipleOpen && !horizontal) {
      setState(prev => ({
        ...prev,
        [title]: !state[title],
      }));
    } else {
      setState(({
        [title]: !state[title],
      }));
    }
  }

  return (
    <div className={accordionClasses.join(' ')}>
      {React.Children.map(children as IChildProps[], (child: IChildProps) => {
        const { title } = child?.props;
       
        return (
          <AccordionSection
            title           = {title}
            horizontal      = {horizontal}
            isOpen          = {state[title]}
            clickHandler    = {clickHandler}
            maxWidth        = {maxWidth || 30}
          >
            {child.props.children}
          </AccordionSection>
        )
      })}
    </div>
  );
}

export default Accordion;
