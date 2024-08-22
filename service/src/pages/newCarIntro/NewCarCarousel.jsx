import React, { useState, useRef } from 'react';
import arrowLeftCircle from '@/assets/images/arrowLeftCircle.svg';
import arrowRightCircle from '@/assets/images/arrowRightCircle.svg';
import newCarCarouselData from '@/constants/newCarIntro/newCarCarouselData';
import SlideUpMotion from '@/components/SlideUpMotion/SlideUpMotion';
import '@/styles/newCarCarousel.css';

function NewCarCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isClickDisabled = useRef(false); //isClickDisabled는 랜더링과 관련이 없음을 의미하기 위해 useRef로 선언
  const totalItems = 5;

  const getSliderClasses = index => {
    const positions = ['s1', 's2', 's3', 's4', 's5'];
    return positions[(index - currentIndex + totalItems) % totalItems]; //s1,s2,s3,s4,s5는 위치를 지정
  };

  const handleCarousel = direction => {
    if (isClickDisabled.current) return; //화살표 버튼 클릭 시 추가 클릭 방지
    isClickDisabled.current = true;
    setCurrentIndex(
      prevIndex => (prevIndex + (totalItems + direction)) % totalItems,
    );
    setTimeout(() => {
      isClickDisabled.current = false;
    }, 350);
  };

  const moveToIndex = async targetIndex => {
    if (isClickDisabled.current) return; //화살표 버튼 클릭 시 추가 클릭 방지
    let diff = targetIndex - currentIndex;
    if (diff >= 3) diff = -5 + diff;
    else if (diff <= -3) diff = 5 + diff;

    const direction = Math.sign(diff);
    isClickDisabled.current = true;
    for (let i = 0; i < Math.abs(diff); i++) {
      setCurrentIndex(
        prevIndex => (prevIndex + (totalItems + direction)) % totalItems,
      );
      await new Promise(resolve => setTimeout(resolve, 350));
    }
    isClickDisabled.current = false;
  };

  return (
    <div className="new-car-carousel">
      <SlideUpMotion delay={1.0}>
        <div className="mx-5000 mb-1100">
          <div className="text-body-3-semibold text-primary-blue">
            Highlights
          </div>
          <div className="text-heading-2-bold">
            전력을 다해, CASPER Electric
          </div>
        </div>
        <div className="slider-container">
          <div className="slider">
            {newCarCarouselData.map((item, idx) => (
              <div
                key={item.id}
                className={`slider-item ${getSliderClasses(idx)}`}
              >
                <img
                  src={item.imageSrc}
                  alt={`Car Image ${item.id}`}
                  className="object-cover w-full h-full select-none"
                  onClick={() => moveToIndex(idx)}
                  loading="lazy"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-600">
          {newCarCarouselData.map((item, idx) => (
            <div
              key={item.id}
              className={`indicator-item m-2 ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => moveToIndex(idx)}
            ></div>
          ))}
        </div>
        <div className="flex justify-center mt-600 mb-3000 gap-600">
          <img
            src={arrowLeftCircle}
            alt="Previous Slide"
            onClick={() => handleCarousel(-1)}
            className="hover:cursor-pointer"
          />
          <img
            src={arrowRightCircle}
            alt="Next Slide"
            onClick={() => handleCarousel(1)}
            className="hover:cursor-pointer"
          />
        </div>
      </SlideUpMotion>
    </div>
  );
}

export default NewCarCarousel;
