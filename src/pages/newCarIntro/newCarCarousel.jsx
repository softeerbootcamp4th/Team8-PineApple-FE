import React, { useEffect, useRef } from 'react';
import newCarImage1 from '@/assets/images/newCarImage1.svg';
import arrowLeftCircle from '@/assets/images/arrowLeftCircle.svg';
import arrowRightCircle from '@/assets/images/arrowRightCircle.svg';

function NewCarCarousel() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/npm/micro-slider@1.0.9/dist/micro-slider.min.js';
    script.onload = () => {
      const __ms = sliderRef.current;
      const __msSlider = new MicroSlider(__ms, {
        indicators: true,
        indicatorText: '',
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="mx-5000 mb-1500">
        <div className="text-body-3-semibold text-primary-blue">Highlights</div>
        <div className="text-heading-2-bold">전력을 다해, CASPER Electric</div>
        <div className="mt-1500 mb-1200" id="micro-slider">
          <div className="micro-slider" ref={sliderRef}>
            <div className="slider-item s1">1</div>
            <div className="slider-item s2">2</div>
            <div className="slider-item s3">3</div>
            <div className="slider-item s4">4</div>
            <div className="slider-item s5">5</div>
            <div className="slider-item s6">6</div>
          </div>
          <img
            src={newCarImage1}
            alt="newCarImage1"
            className="w-[1240px] h-[567px]"
          />
        </div>
        <div className="flex justify-center gap-600">
          <img src={arrowLeftCircle} className="hover:cursor-pointer"></img>
          <img src={arrowRightCircle} className="hover:cursor-pointer"></img>
        </div>
      </div>
    </>
  );
}
export default NewCarCarousel;
