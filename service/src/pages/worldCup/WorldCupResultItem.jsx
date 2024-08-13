import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '@/assets/icons/checkbox.svg';
import BlueTriangle from '@/assets/icons/blueTriangle.svg';
import GrayTriangle from '@/assets/icons/grayTriangle.svg';
import '@/styles/worldCupResult.css';

function WorldCupResultItem({ data, count, percent, index, choice }) {
  const [isFront, setIsFront] = useState(true);
  const handleClick = () => {
    setIsFront(prev => !prev);
  };

  return (
    <div className="flip-container" onClick={handleClick}>
      <div className={`flip-card ${isFront ? '' : 'flipped'}`}>
        <div className="flip-card-front">
          <div
            className={`hover-scale-ani w-[220px] h-[524px] mb-[40px] rounded-[30px] ${index === 0 ? 'bg-primary-blue' : 'bg-[#D9D9D9]'}`}
          >
            <div className="relative flex flex-col justify-between h-full">
              <div className="flex justify-center pt-[45px]">
                {index === 0 ? (
                  <div className="bg-neutral-white rounded-full text-primary-blue text-detail-1-bold w-[100px] h-[40px] flex justify-center items-center">
                    {index + 1}등
                  </div>
                ) : (
                  <div className="bg-neutral-500 rounded-full text-neutral-white text-detail-1-bold w-[100px] h-[40px] flex justify-center items-center">
                    {index + 1}등
                  </div>
                )}
              </div>
              <div className="flex flex-col pb-[100px]">
                <div
                  className={`text-center ${index === 0 ? 'text-neutral-white' : 'text-neutral-500'} text-detail-3-semibold`}
                >
                  {data.story}
                </div>
                <div
                  className={`text-center ${index === 0 ? 'text-neutral-white' : 'text-neutral-500'} text-detail-3-semibold`}
                >
                  {data.story2}
                </div>
              </div>
              <img
                src={data.image}
                alt="dataImage"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
              {index === 0 ? (
                <img
                  src={BlueTriangle}
                  alt="blueTriangle"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-[103%] left-1/2"
                />
              ) : (
                <img
                  src={GrayTriangle}
                  alt="grayTriangle"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-[103%] left-1/2"
                />
              )}
              {choice && (
                <div className="absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 rounded-full top-[90%] left-1/2 bg-neutral-white pr-200 py-100 pl-100">
                  <img src={CheckBox} alt="CheckBox" />
                  <span className="text-detail-3-semibold text-primary-blue pl-[1px]">
                    나의 선택
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <div
            style={{
              backgroundImage: `url(${data.backImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '220px',
              height: '560.45px',
            }}
            className="mb-[3.5px] hover-scale-ani"
          >
            <div className="relative flex flex-col justify-between h-full">
              <div className="flex justify-center pt-[45px]">
                {index === 0 ? (
                  <div className="bg-primary-blue rounded-full text-neutral-white text-detail-1-bold w-[100px] h-[40px] flex justify-center items-center">
                    {index + 1}등
                  </div>
                ) : (
                  <div className="bg-neutral-white rounded-full text-primary-blue text-detail-1-bold w-[100px] h-[40px] flex justify-center items-center">
                    {index + 1}등
                  </div>
                )}
              </div>
              <div className="flex flex-col pb-[135px]">
                <div className="text-center text-neutral-white text-detail-3-semibold">
                  {data.solution}
                </div>
                <div className="text-center text-neutral-white text-detail-3-semibold">
                  {data.solution2}
                </div>
              </div>
              {choice && (
                <div className="absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 rounded-full top-[84.3%] left-1/2 bg-neutral-white pr-200 py-100 pl-100">
                  <img src={CheckBox} alt="CheckBox" />
                  <span className="text-detail-3-semibold text-primary-blue pl-[1px]">
                    나의 선택
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-heading-1-bold text-primary-blue">
        {percent}%
      </div>
      <div className="text-center text-body-3-medium text-primary-blue">
        {count}명
      </div>
    </div>
  );
}

WorldCupResultItem.propTypes = {
  data: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  choice: PropTypes.bool.isRequired,
};

export default WorldCupResultItem;
