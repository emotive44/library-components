import React, { FC, useState } from 'react';
import classes from './Carousel.module.css';


interface CarouselProps {
  imgData           : string[],
  clickImgChange    ?: boolean,  // if you want to slide by click image
}

const Carousel: FC<CarouselProps> = ({
  imgData,
  clickImgChange,
}) => {
  const [imgIndx, setImgIndx] = useState(0);

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
    if(imgIndx === -1) {
      return;
    } 

    setImgIndx(prev => prev - 1);
  }

  const getNextImg = () => {
    // check, because we want to show minimum 2 images
    if(imgIndx === imgData.length - 2) {
      return;
    }

    setImgIndx(prev => prev + 1);
  }

  let arrayWithImgs = [];

  if(imgIndx === - 1) {
    // if we want to show first 2 images
    arrayWithImgs = imgData.slice(0, 2);
  } else {
    // else get current 3 images
    arrayWithImgs = imgData.slice(imgIndx, imgIndx + 3);
  }

  let imagesContent =  arrayWithImgs.map((img, i) => {
    const imageClasses = [classes.img];
    imageClasses.push(imageOrientation(img));

    // by default image in middle is current, but if user show first 2 images,
    // we have to make first image to be current
    if(imgIndx === -1) {
      switch (i) {
        case 0:
          imageClasses.push(classes.current);
          break;
        case 1:
          imageClasses.push(classes.next);
          break;
      }
    } else {
      switch (i) {
        case 0:
          imageClasses.push(classes.previous);
          break;
        case 1:
          imageClasses.push(classes.current);
          break;
        case 2: 
          imageClasses.push(classes.next);
          break;
      }
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
      styles.cursor = 'pointer'
    }

    return (
      <div 
        key={i} 
        style={clickImgChange ? styles : {}}
        onClick={clickImgChange ? changeImage : () => {}}
        className={imageClasses.join(' ')}
      >
        <img src={img} alt="" />
      </div>
    )
  })

  return (
    <div className={classes.carousel}>
      {!clickImgChange && (
        <div className={[classes.arrow, classes.left].join(' ')} onClick={getPreviousImg}>
          <i className="fas fa-arrow-left" />
        </div>
      )}
      <div className={classes.main}>
        <div className={classes.images}> {imagesContent} </div>
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
