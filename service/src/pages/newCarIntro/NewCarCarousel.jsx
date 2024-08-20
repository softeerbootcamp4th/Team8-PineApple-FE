import React, { useState } from 'react';
import arrowLeftCircle from '@/assets/images/arrowLeftCircle.svg';
import arrowRightCircle from '@/assets/images/arrowRightCircle.svg';
import newCarCarouselData from '@/constants/newCarIntro/newCarCarouselData';
import '@/styles/newCarCarousel.css';
import { animationVariants } from '@/styles/FramerMotion';
import { motion } from 'framer-motion';

function NewCarCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 5;

  const getSliderClasses = index => {
    const positions = ['s1', 's2', 's3', 's4', 's5'];
    return positions[(index - currentIndex + totalItems) % totalItems];
  };

  const handlePrevButton = () => {
    setCurrentIndex(prevIndex => (prevIndex + (totalItems - 1)) % totalItems);
  };

  const handleNextButton = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % totalItems);
  };

  const handleIndicatorClick = idx => {
    setCurrentIndex(idx);
  };

  return (
    <div className="new-car-carousel">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
      >
        <div className="mx-5000 mb-1100">
          <div className="text-body-3-semibold text-primary-blue">
            Highlights
          </div>
          <div className="text-heading-2-bold">
            전력을 다해, CASPER Electric
          </div>
        </div>
      </motion.div>
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
                className="object-cover w-full h-full"
                onClick={() => setCurrentIndex(item.id)}
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
            onClick={() => handleIndicatorClick(idx)}
          ></div>
        ))}
      </div>
      <div className="flex justify-center mt-600 mb-3000 gap-600">
        <img
          src={arrowLeftCircle}
          alt="Previous Slide"
          onClick={handlePrevButton}
          className="hover:cursor-pointer"
        />
        <img
          src={arrowRightCircle}
          alt="Next Slide"
          onClick={handleNextButton}
          className="hover:cursor-pointer"
        />
      </div>
    </div>
  );
}

export default NewCarCarousel;
