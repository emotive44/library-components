import React, { FC, useState } from 'react';
import classes from './Carousel.module.css';


interface CarouselProps {
  imgData           : string[],  // array with img urls
  clickImgChange    ?: boolean,  // if you want to slide by click image
  infinity          ?: boolean,  // if you want infinity carousel
  withFooter        ?: boolean, // if want to show footer with small images navigation
}

const Carousel: FC<CarouselProps> = ({
  imgData,
  infinity,
  withFooter,
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
    if(!infinity && imgIndx === -1) {
      return;
    } 


    if(infinity && imgIndx*(-1) > imgData.length - 1) {
      setImgIndx(-1);
      return;
    }

    setImgIndx(prev => prev - 1);
  }

  const getNextImg = () => {
    // check, because we want to show minimum 2 images
    if(!infinity && imgIndx === imgData.length - 2) {
      return;
    }

    if(infinity && imgIndx === imgData.length - 2) {
      setImgIndx(-1);
      return;
    }

    setImgIndx(prev => prev + 1);
  }

  let arrayWithImgs = [];
  if(infinity) {
    if(imgIndx === -1) {
      // if user open first image, we have to show last and first two images
      arrayWithImgs = [...imgData.slice(-1), ...imgData.slice(0, 2)];
    } else if (imgIndx === -2) {
      arrayWithImgs = [...imgData.slice(-2), ...imgData.slice(0, 1)];
    } else if (imgIndx < -2) {
      // get current 3 images if scroll on left
      arrayWithImgs = [...imgData.slice(imgIndx).slice(0, 3)];
    } else if (imgIndx === imgData.length - 2) {
      // with infinity carousel at the end get last two image and first
      arrayWithImgs = [...imgData.slice(-2), ...imgData.slice(0, 1)];
    } else if (imgIndx === imgData.length -1 ) {
      // with infinity carousel at the end get last image and first two
      arrayWithImgs = [...imgData.slice(-1), ...imgData.slice(0, 2)];
    } else {
      // get current 3 images if scroll on right
      arrayWithImgs = imgData.slice(imgIndx, imgIndx + 3);
    }
  } else {
    if(imgIndx === - 1) {
      // if we want to show first 2 images
      arrayWithImgs = imgData.slice(0, 2);
    } else {
      // else get current 3 images
      arrayWithImgs = imgData.slice(imgIndx, imgIndx + 3);
    }
  }

  // current images, which user see
  let imagesContent =  arrayWithImgs.map((img, i) => {
    const imageClasses = [classes.img];
    imageClasses.push(imageOrientation(img));

    // by default image in middle is current, but if user show first 2 images,
    // we have to make first image to be current only for not infinity carousel
    if(!infinity && imgIndx === -1) {
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
        opacity: `${imgIndx === i - 1 ? '1' : '0.6'}` // to show current image
      }

      return (
        <div
          key             = {i}
          style           = {styles}
          className       = {classes['img-footer']}
          onClick         = {() => setImgIndx(i - 1)}
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
