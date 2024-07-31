import React, { useState } from 'react';
import BlueButton from '@/components/buttons/BlueButton';
import noToolBoxImage from '@/assets/images/noToolBoxImage.svg';
import toolBoxImage from '@/assets/images/toolBoxImage.svg';
import PropTypes from 'prop-types';

function Card2({ loginData }) {
  let imageSrc = noToolBoxImage;
  // loginData의 toolbox가 1이상이면 imagesrc 바꿔주기
  if (loginData >= 1) {
    imageSrc = toolBoxImage;
  }
  return (
    <div className="flex flex-col justify-between bg-card1 px-800 py-700 h-[417px] w-[340px] rounded-[30px]">
      <div className="text-detail-2-semibold text-primary-blue h-800">
        Event2
      </div>
      <div className="text-detail-1-semibold h-1800 text-neutral-black">
        일일 미니퀴즈
        <div
          className={`items-center justify-end h-900 flex ${loginData > 0 ? 'visible' : 'invisible'}`}
        >
          <div
            className={`px-400 py-100 rounded-[8px] text-detail-3-semibold text-primary-blue bg-neutral-white`}
          >
            {loginData}개 보유
          </div>
        </div>
      </div>
      <div className="relative h-4000">
        <img className="w-full h-full py-500 px-500" src={imageSrc} alt="Car" />
        {imageSrc === noToolBoxImage && (
          <div className="w-[214px] text-heading-banner-title-2 text-neutral-white text-center absolute top-[51px] left-[31px]">
            ?
          </div>
        )}
      </div>
      <div className="flex items-center justify-center">
        <BlueButton value="툴박스 얻기" onClick={() => alert('툴박스 얻기')} />
      </div>
    </div>
  );
}

Card2.propTypes = {
  // eslint 속이기 위한 data 타입
  loginData: PropTypes.number.isRequired,
};

export default Card2;
