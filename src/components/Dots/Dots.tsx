import React, { FC, useRef, useEffect, useState } from 'react';

import classes from './Dots.module.css';


interface DotsProps {
  count         : number, // count of dots
  dotColor      : string,
  dotSize       : number,
  className     ?: string,
}

const Dots: FC<DotsProps> = ({
  count,
  dotSize,
  dotColor,
  children,
  className,
}) => {
  const dotsContainer = useRef(null);
  const [right, setRight] = useState(0);
  const mainCntClasses = [classes.container];

  if (className) {
    mainCntClasses.push(className)
  }

  // get dynamic width of dots container and set correct right(px)
  useEffect(() => {
    const el: any = dotsContainer.current;
    setRight(el.getBoundingClientRect().width + 3);
  }, []);

  return (
    <div className={mainCntClasses.join(' ')}>
      <div className={classes.children}>
        {children}

        {/* create array with N elemnets depends by COUNT props */}
        <div className={classes.dots} style={{ right: `-${right}px` }} ref={dotsContainer} >
          {Array.from({ length: count }).map((_, i) => {
            return (
              <div key={i}
                className    = {classes.dot}
                style={{
                  width      : `${dotSize}px`,
                  height     : `${dotSize}px`,
                  background : dotColor,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dots;
