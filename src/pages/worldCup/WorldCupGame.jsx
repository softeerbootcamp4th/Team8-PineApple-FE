import React, { useState, useEffect } from 'react';
import EventHeader from '@/components/header/EventHeader';
import WorldCupTitle from './WorldCupTitle';
import PropTypes from 'prop-types';
import ExitModal from '@/components/modal/ExitModal';
import { useBlocker } from 'react-router-dom';

function WorldCupGame({ title = '8강', onSelect, roundData }) {
  const [currentState, setCurrentState] = useState(0);
  const [animationClass, setAnimationClass] = useState('');
  const [openExitModal, setOpenExitModal] = useState(false);

  // useBlocker(({ nextLocation: newLocation }) => {
  //   setOpenExitModal(true);
  //   setNextLocation(newLocation);
  //   return false; // 차단
  // });

  useEffect(() => {
    const handleBeforeUnload = event => {
      event.preventDefault();
      event.returnValue = ''; // 표준에 따라 이 메시지는 무시될 수 있습니다.
      // setOpenExitModal(true);
      return '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const getTextLeftStyle = () => {
    return currentState === -1
      ? 'text-gradient-blue-purple'
      : 'text-neutral-black';
  };

  const getLeftImageSrc = () => {
    return currentState === 1 ? roundData[0].grayImage : roundData[0].image;
  };

  const getTextRightStyle = () => {
    return currentState === 1
      ? 'text-gradient-blue-purple'
      : 'text-neutral-black';
  };

  const getRightImageSrc = () => {
    return currentState === -1 ? roundData[1].grayImage : roundData[1].image;
  };

  const handleCurrentState = isChosen => {
    if (animationClass) return;
    setCurrentState(isChosen ? -1 : 1);
  };

  const handleMouseLeave = () => setCurrentState(0);

  const handleAnimation = isChosen => {
    setCurrentState(0);
    if (isChosen) {
      setAnimationClass('animate-slide-left-to-right');
    } else {
      setAnimationClass('animate-slide-right-to-left');
    }
    setTimeout(() => {
      setAnimationClass('');
      onSelect(isChosen);
    }, 1500);
  };

  const getContainerClass = isChosen => {
    let baseClass = 'flex flex-col items-center justify-center pt-[5%] ';
    if (isChosen) {
      baseClass +=
        currentState === 1
          ? 'bg-neutral-100 '
          : 'bg-gradient-cobaltblue-white-opposite ';
      if (animationClass === 'animate-slide-left-to-right') {
        baseClass += 'animate-slide-left-to-right';
      } else if (animationClass === 'animate-slide-right-to-left') {
        baseClass += 'animate-remove-left-to-right w-[0%]';
      } else {
        baseClass += 'w-1/2';
      }
    } else {
      baseClass +=
        currentState === -1
          ? 'bg-neutral-100 '
          : 'bg-gradient-lightblue-white ';
      if (animationClass === 'animate-slide-right-to-left') {
        baseClass += 'animate-slide-right-to-left';
      } else if (animationClass === 'animate-slide-left-to-right') {
        baseClass += 'animate-remove-right-to-left w-[0%]';
      } else {
        baseClass += 'w-1/2';
      }
    }
    return baseClass;
  };

  const onClose = () => setOpenExitModal(false);

  return (
    <div className="relative w-full min-w-[1104px] min-h-[860px]">
      <EventHeader
        eventTitle="Event 1. 차 얻기"
        eventBody="운전 중 피하고 싶은 상황 월드컵"
        setOpenExitModal={setOpenExitModal}
      />
      <WorldCupTitle title={title} />
      {animationClass === '' ? (
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-primary-blue text-detail-1-bold">
          VS
        </span>
      ) : null}
      <div className="flex h-screen">
        <div className={getContainerClass(true)}>
          <div
            className={`w-[455px] h-[435px] rounded-[35px] z-[50] flex items-start pt-2 mb-1000 justify-center ${currentState === -1 ? 'bg-gradient-blue-purple' : 'bg-transparent'}`}
          >
            <img
              src={getLeftImageSrc()}
              alt={roundData[0].story}
              key={roundData[0].id}
              onMouseEnter={() => handleCurrentState(true)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleAnimation(true)}
              className={`z-[100] w-[440px] h-[490px] ${animationClass === 'animate-slide-right-to-left' ? 'hidden' : null}`}
            />
          </div>

          <p
            className={`text-detail-2-semibold ${getTextLeftStyle()} ${animationClass === 'animate-slide-right-to-left' ? 'hidden' : null}`}
          >
            {roundData[0].story}
          </p>
        </div>
        <div className={getContainerClass(false)}>
          <div
            className={`w-[455px] h-[435px] rounded-[35px] z-[50] flex items-start pt-2 mb-1000 justify-center ${currentState === 1 ? 'bg-gradient-blue-purple' : 'bg-transparent'}`}
          >
            <img
              src={getRightImageSrc()}
              alt={roundData[1].story}
              key={roundData[1].id}
              onMouseEnter={() => handleCurrentState(false)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleAnimation(false)}
              className={`z-[100] w-[440px] h-[490px] ${animationClass === 'animate-slide-left-to-right' ? 'hidden' : null}`}
            />
          </div>
          <p
            className={`text-detail-2-semibold ${getTextRightStyle()} ${animationClass === 'animate-slide-left-to-right' ? 'hidden' : null}`}
          >
            {roundData[1].story}
          </p>
        </div>
      </div>
      {openExitModal ? <ExitModal onClose={onClose} game="worldCup" /> : null}
    </div>
  );
}

WorldCupGame.propTypes = {
  title: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  roundData: PropTypes.array.isRequired,
};

export default WorldCupGame;
