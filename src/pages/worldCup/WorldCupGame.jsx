import React, { useState } from 'react';
import WorldCupHeader from './WorldCupHeader';
import WorldCupTitle from './WorldCupTitle';
import data from '@/constants/worldCup/worldCupData';
import PropTypes from 'prop-types';

function WorldCupGame({ title = '8강', onselect }) {
  const [currentState, setCurrentState] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const getTextLeftStyle = () => {
    return currentState === 1
      ? 'text-gradient-blue-purple'
      : 'text-neutral-black';
  };

  const getLeftImageSrc = () => {
    return currentState === 2 ? data[0].grayImage : data[0].image;
  };

  const getTextRightStyle = () => {
    return currentState === 2
      ? 'text-gradient-blue-purple'
      : 'text-neutral-black';
  };

  const getRightImageSrc = () => {
    return currentState === 1 ? data[1].grayImage : data[1].image;
  };

  const handleCurrentState = isLeft => {
    if (animationClass) return;
    if (isLeft) {
      setCurrentState(1);
    } else {
      setCurrentState(2);
    }
  };

  const handleMouseLeave = () => {
    setCurrentState(0);
  };

  const handleAnimation = isLeft => {
    setCurrentState(0);
    if (isLeft) {
      setAnimationClass('animate-slide-left-to-right');
    } else {
      setAnimationClass('animate-slide-right-to-left');
    }
    // 1초 후 애니메이션 클래스 제거
    // setTimeout(() => {
    //   setAnimationClass('');
    // }, 1000);
  };

  return (
    <div className="fixed inset-0 w-full z-[10] min-w-[1104px] min-h-[860px]">
      <div className="relative">
        <WorldCupHeader />
        <WorldCupTitle title={title} />
        {animationClass === '' ? (
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary-blue text-detail-1-bold">
            VS
          </span>
        ) : null}
        <div className="flex h-screen">
          <div
            className={`flex flex-col items-center justify-center pt-[5%] ${currentState === 2 ? 'bg-neutral-100' : 'bg-gradient-cobaltblue-white-opposite'} ${animationClass === 'animate-slide-left-to-right' ? 'animate-slide-left-to-right' : animationClass === 'animate-slide-right-to-left' ? 'animate-remove-left-to-right w-[0%]' : 'w-1/2'}`}
          >
            <div
              className={`w-[455px] h-[435px] rounded-[35px] z-[50] flex items-start pt-2 mb-1000 justify-center ${currentState === 1 ? 'bg-gradient-blue-purple' : 'bg-transparent'}`}
            >
              <img
                src={getLeftImageSrc()}
                alt={data[0].story}
                onMouseEnter={() => handleCurrentState(true)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleAnimation(true)}
                className={`z-[100] w-[440px] h-[490px] ${animationClass === 'animate-slide-right-to-left' ? 'hidden' : null}`}
              />
            </div>

            <p
              className={`text-detail-2-semibold ${getTextLeftStyle()} ${animationClass === 'animate-slide-right-to-left' ? 'hidden' : null}`}
            >
              {data[0].story}
            </p>
          </div>
          <div
            className={`flex flex-col items-center justify-center pt-[5%] ${currentState === 1 ? 'bg-neutral-100' : 'bg-gradient-lightblue-white'} ${animationClass === 'animate-slide-right-to-left' ? 'animate-slide-right-to-left' : animationClass === 'animate-slide-left-to-right' ? 'animate-remove-right-to-left w-[0%]' : 'w-1/2'}`}
          >
            <div
              className={`w-[455px] h-[435px] rounded-[35px] z-[50] flex items-start pt-2 mb-1000 justify-center ${currentState === 2 ? 'bg-gradient-blue-purple' : 'bg-transparent'}`}
            >
              <img
                src={getRightImageSrc()}
                alt={data[1].story}
                onMouseEnter={() => handleCurrentState(false)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleAnimation(false)}
                className={`z-[100] w-[440px] h-[490px] ${animationClass === 'animate-slide-left-to-right' ? 'hidden' : null}`}
              />
            </div>
            <p
              className={`text-detail-2-semibold ${getTextRightStyle()} ${animationClass === 'animate-slide-left-to-right' ? 'hidden' : null}`}
            >
              {data[1].story}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

WorldCupGame.propTypes = {
  title: PropTypes.string,
  onselect: PropTypes.func,
};

export default WorldCupGame;
