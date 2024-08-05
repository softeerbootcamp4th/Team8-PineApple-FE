import React, { useState } from 'react';
import WorldCupHeader from './WorldCupHeader';
import WorldCupTitle from './WorldCupTitle';
import data from '@/constants/worldCup/worldCupData';
import PropTypes from 'prop-types';

function WorldCupGame({ title = '8강', onselect }) {
  const [currentState, setCurrentState] = useState(0);

  const getText1Style = () => {
    return currentState === 1
      ? 'text-gradient-blue-purple'
      : 'text-neutral-black';
  };

  const getImage1Src = () => {
    return currentState === 2 ? data[0].grayImage : data[0].image;
  };

  const getText2Style = () => {
    return currentState === 2
      ? 'text-gradient-blue-purple'
      : 'text-neutral-black';
  };

  const getImage2Src = () => {
    return currentState === 1 ? data[1].grayImage : data[1].image;
  };

  return (
    <div className="fixed inset-0 w-full z-100 min-w-[1104px] min-h-[860px]">
      <div className="relative">
        <WorldCupHeader />
        <WorldCupTitle title={title} />
        <div className="flex h-screen">
          <div className="flex flex-col items-center justify-center w-1/2 bg-gradient-cobaltblue-white pl-2500 pt-2000">
            <img
              src={getImage1Src()}
              alt={data[0].story}
              className={`${currentState === 1 ? 'border-solid border-[8px] border-gradient-blue-purple' : null}`}
            />
            <p className={`text-detail-2-semibold ${getText1Style()}`}>
              {data[0].story}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 bg-gradient-lightblue-white pr-2500 pt-2000">
            <img
              src={getImage2Src()}
              alt={data[1].story}
              className={`${currentState === 2 ? 'border-solid border-[8px] border-gradient-blue-purple' : ''}`}
            />
            <p className={`text-detail-2-semibold ${getText2Style()}`}>
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
