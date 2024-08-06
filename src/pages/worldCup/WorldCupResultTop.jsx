import React from 'react';
import PropTypes from 'prop-types';
import WorldCupArrowIcon from '@/assets/icons/worldCupArrowIcon.svg';

function WorldCupResultTop({ data }) {
  return (
    <div className="relative flex flex-col items-center pt-2000">
      <img
        src={WorldCupArrowIcon}
        alt="worldCupArrowIcon"
        className="absolute top-[50%]"
      />
      <div className="px-[58px] py-[5px] bg-primary-babyblue rounded-md flex justify-center items-center text-detail-1-bold text-primary-blue mb-300">
        우승
      </div>
      <p className="text-center text-heading-3-bold mb-700 text-neutral-black">
        {data.story}
      </p>
      <div className="flex justify-center gap-1500 pl-500 mb-[-35px]">
        <img src={data.image} alt="dataImage" className="w-[420px] h-auto" />
        <img
          src={data.resultImage}
          alt="resultImage"
          className="w-[460px] h-auto"
        />
      </div>
      <div className="flex justify-center gap-1000 items-center mb-500">
        <p className="text-gradient-blue-purple text-detail-1-semibold">
          CASPER ELECTRIC과 함께한다면?
        </p>
        <p className="text-body-3-bold text-neutral-black">{data.solution}</p>
      </div>
      <div className="flex justify-center gap-1000 items-center">
        <button className="bg-transparent rounded-full border-[2px] border-solid border-white px-[140px] py-[16px] text-detail-1-medium text-neutral-white hover-scale-ani">
          공유하기
        </button>
        <button className="bg-neutral-white rounded-full px-[100px] py-[16px] text-detail-1-medium text-neutral-black hover-scale-ani">
          자동차 아이템 받기
        </button>
      </div>
    </div>
  );
}

WorldCupResultTop.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WorldCupResultTop;
