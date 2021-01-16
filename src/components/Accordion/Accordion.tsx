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
}

const Accordion: FC<AccordionProps> = ({
  children,
  className,
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

  const accordionClasses = [classes.accordion];
  if (className) {
    accordionClasses.push(className);
  }

  const clickHandler = (title: string) => {
    if(multipleOpen) {
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
    <div className={accordionClasses.join(' ')} >
      {React.Children.map(children as IChildProps[], (child: IChildProps) => {
        const { title } = child?.props;
       
        return (
          <AccordionSection
            title           = {title}
            isOpen          = {state[title]}
            clickHandler    = {clickHandler}
          >
            {child.props.children}
          </AccordionSection>
        )
      })}
    </div>
  );
}

export default Accordion;
