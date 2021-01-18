import React, { FC, ReactElement, useState } from 'react';
import classes from './Modal.module.css';

import Text from '../Text/Text';
import CustomScroll from '../CustomScroll/CustomScroll';


interface ModalProps {
  title       :  string,
  main        :  ReactElement,
  footer      ?: ReactElement,
}

const Modal:FC<ModalProps> = ({
  title,
  main,
  footer,
}) => {
  const [modalClasses, setModalClasses] = useState([classes.modal]);

  const closeModal = () => {
    setModalClasses(prev => [
      ...prev,
      classes.closed
    ]);
  }

  return (
    <>
      <section className={modalClasses.join(' ')}>
      <header className={classes.header}>
        <div className={classes['header-wrapper']}>
          <Text fontWeight="900"> {title} </Text>
        </div>
        <span 
          onClick         = {closeModal}
          className       = {classes.close}
        >
          <i className='far fa-times-circle' />
        </span>
      </header>

      <CustomScroll size="small">
        <main className={classes.main}> {main} </main>
      </CustomScroll>

      <footer className={classes.footer}> {footer} </footer>

      </section>
      <div 
        onClick           = {closeModal}
        className         = {classes.overlay} 
      />
    </>
  )
}

export default Modal;