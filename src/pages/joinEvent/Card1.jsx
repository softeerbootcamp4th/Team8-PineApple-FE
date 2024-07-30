import React, { useState } from 'react';
import noCarImage from '@/assets/images/noCarImage.svg';
import carImage from '@/assets/images/carImage.svg';
import BlueButton from '@/components/buttons/BlueButton';
import PropTypes from 'prop-types';

function Card1({ loginData }) {
  let imageSrc = noCarImage;
  // loginData의 Carhave가 true면 imagesrc 바꿔주기
  if (!loginData) {
    imageSrc = carImage;
  }
  return (
    <div className="bg-card1 px-800 py-700 w-[340px] h-[417px] rounded-[30px]">
      <div className="text-detail-2-semibold text-primary-blue">Event1</div>
      <div className="whitespace-pre-line text-detail-1-semibold text-neutral-black">
        {`운전 중 피하고 싶은\n상황 월드컵`}
      </div>
      <div className="relative w-[266px] h-[143px]">
        <img className="w-full h-full" src={imageSrc} alt="Car" />
        {imageSrc === noCarImage && (
          <div className="text-center absolute top-[18px] left-[29px]">?</div>
        )}
      </div>
      <BlueButton value="차 얻기" onClick={() => alert('차 얻기')} />
    </div>
  );
}

Card1.propTypes = {
  // eslint 속이기 위한 data 타입
  loginData: PropTypes.string.isRequired,
};

export default Card1;
