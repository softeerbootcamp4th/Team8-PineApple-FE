import React, { useEffect, useRef } from 'react';
import newCarImage1 from '@/assets/images/newCarImage1.svg';
import arrowLeftCircle from '@/assets/images/arrowLeftCircle.svg';
import arrowRightCircle from '@/assets/images/arrowRightCircle.svg';
import '@/styles/newCarCarousel.css';
import loadMicroSlider from './loadMicroSlider';

function NewCarCarousel() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const cleanup = loadMicroSlider(() => {
      const __ms = sliderRef.current;
      if (__ms) {
        new MicroSlider(__ms, {
          indicators: true,
          indicatorText: '',
        });
      }
    });
    return cleanup;
  }, []);

  return (
    <>
      <div className="mx-5000 mb-1500">
        <div className="text-body-3-semibold text-primary-blue">Highlights</div>
        <div className="text-heading-2-bold">전력을 다해, CASPER Electric</div>
      </div>
      <div className="mt-1500 mb-1200" id="micro-slider">
        <div className="micro-slider px-500" ref={sliderRef}>
          <div className="slider-item s1"></div>
          <div className="slider-item s2"></div>
          <div className="slider-item s3"></div>
          <div className="slider-item s4"></div>
          <div className="slider-item s5"></div>
        </div>
      </div>
      <div className="flex justify-center mt-1500 mb-3000 gap-600">
        <img src={arrowLeftCircle} className="hover:cursor-pointer"></img>
        <img src={arrowRightCircle} className="hover:cursor-pointer"></img>
      </div>
    </>
  );
}
export default NewCarCarousel;
