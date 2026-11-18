import React, { useEffect, useRef } from 'react';
import styles from './Carousel.module.css';
import left from '../../Utilities/left.svg';
import right from '../../Utilities/right.svg';
import Slide from './Slide';
import FakeDB from '../../FakeDB/FakeDB';
const Carousel = () => {
  const slideShow = useRef(null);
  const intervaloSlideShow = useRef(null);
  const next = () => {
    if (slideShow.current?.children.length > 0) {
      const firstElement = slideShow.current.children[0];
      slideShow.current.style.transition = `800ms ease-out all`;
      const sizeSlide = slideShow.current.children[0].offsetWidth;
      slideShow.current.style.transform = `translateX(-${sizeSlide}px)`;
      const transi = () => {
        slideShow.current.style.transition = 'none';
        slideShow.current.style.transform = `translateX(0px)`;
        slideShow.current.appendChild(firstElement);
        slideShow.current.removeEventListener('transitionend', transi);
      };
      slideShow.current.addEventListener('transitionend', transi);
    }
  };
  const previous = () => {
    if (slideShow.current?.children.length > 0) {
      const endElement = slideShow.current.children[slideShow.current.children.length - 1];
      slideShow.current.insertBefore(endElement, slideShow.current.firstChild);
      slideShow.current.style.transition = 'none';
      const sizeSlide = slideShow.current.children[0].offsetWidth;
      slideShow.current.style.transform = `translateX(-${sizeSlide}px)`;
      setTimeout(() => {
        slideShow.current.style.transition = `800ms ease-out all`;
        slideShow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };
  useEffect(() => {
    const remove = () => {
      intervaloSlideShow.current = setInterval(() => {
        next();
      }, 5000);
    };
    intervaloSlideShow.current = setInterval(() => {
      next();
    }, 5000);
    slideShow.current.addEventListener('mouseenter', () => {
      clearInterval(intervaloSlideShow.current);
    });
    slideShow.current.addEventListener('mouseleave', remove);
  }, []);
  return (
    <div className={styles.contMain}>
      <div className={styles.contSlideShow} ref={slideShow}>
        {FakeDB.map((e) => (
          <Slide img={e.img} name={e.name} />
        ))}
      </div>
      <div className={styles.control}>
        <button className={styles.left} onClick={previous}>
          <img src={left} alt="" />
        </button>
        <button className={styles.right} onClick={next}>
          <img src={right} alt="" />
        </button>
      </div>
    </div>
  );
};
export default Carousel;
