import React, { FC, useState } from 'react';
import classes from './Carousel.module.css';


interface CarouselProps {
  imgData           : string[],  // array with img urls
  clickImgChange    ?: boolean,  // if you want to slide by click image
  withFooter        ?: boolean, // if want to show footer with small images navigation
}

const Carousel: FC<CarouselProps> = ({
  imgData,
  withFooter,
  clickImgChange,
}) => {
  const [imgIndx, setImgIndx] = useState(1);

  // adding additional styles for landscape and portrait image
  const imageOrientation = (src: string) => {
    const img = new Image();
    img.src = src;

    const width = img.width;
    const height = img.height;
    
    if(width > height) { 
      return classes.landscape; 
    } else {
      return classes.portrait;
    } 
  } 

  const getPreviousImg = () => {
    // check, because we want to show minimum 2 images
    if(imgIndx === 0) {
      return;
    }

    setImgIndx(prev => prev - 1);
  }

  const getNextImg = () => {
    // check, because we want to show minimum 2 images
    if(imgIndx === imgData.length - 1) {
      return;
    }

    setImgIndx(prev => prev + 1);
  }

  // current images, which user see
  let imagesContent = imgData.map((img, i) => {
    const imageClasses = [classes.img];
    imageClasses.push(imageOrientation(img));

    if(i === imgIndx) {
      imageClasses.push(classes.current);
    } else if(i === imgIndx - 1) {
      imageClasses.push(classes.previous);
    } else if(i === imgIndx + 1) {
      imageClasses.push(classes.next);
   }

    // change image by click on image
    const changeImage = () => {
      if(imageClasses.includes(classes.next)) {
        getNextImg();
      } else if(imageClasses.includes(classes.previous)) {
        getPreviousImg();
      }
    }

    const styles: any = {};
    if(imageClasses.includes(classes.current)) {
      styles.cursor = 'auto';
    } else {
      styles.cursor = 'pointer';
    }

    return (
      <div 
        key               = {i} 
        className         = {imageClasses.join(' ')}
        style             = {clickImgChange ? styles : {}}
        onClick           = {clickImgChange ? changeImage : () => {}}
      >
        <img src={img} alt="" />
      </div>
    );
  });

  let footerContent: any = null;
  const imagesClasses = [classes.images];
  if(withFooter) {
    imagesClasses.push(classes['with-footer']);

    footerContent = imgData.map((img, i) => {
      const styles = {
        backgroundImage: `url(${img})`,
        opacity: `${imgIndx === i ? '1' : '0.6'}` // to show current image
      }

      return (
        <div
          key             = {i}
          style           = {styles}
          className       = {classes['img-footer']}
          onClick         = {() => setImgIndx(i)}
        />
      );
    });
  }

  return (
    <div className={classes.carousel}>
      {!clickImgChange && (
        <div className={[classes.arrow, classes.left].join(' ')} onClick={getPreviousImg}>
          <i className="fas fa-arrow-left" />
        </div>
      )}
      <div className={classes.main}>
        <div className={imagesClasses.join(' ')}> {imagesContent} </div>
        {withFooter && (
          <div className={classes['footer-wrapper']} >
            <div className={classes.footer}> {footerContent} </div>
          </div>
        )}
      </div>
      {!clickImgChange && (
        <div className={[classes.arrow, classes.right].join(' ')} onClick={getNextImg}>
          <i className="fas fa-arrow-right" />
        </div>
      )}
    </div>
  );
}

export default Carousel;
