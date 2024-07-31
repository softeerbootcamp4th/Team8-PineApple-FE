import React from 'react';
import noCarImage from '@/assets/images/noCarImage.svg';
import carImage from '@/assets/images/carImage.svg';
import BlueButton from '@/components/buttons/BlueButton';
import PropTypes from 'prop-types';

function Card1({ loginData }) {
  let imageSrc = noCarImage;
  // loginData의 Carhave가 true면 imagesrc 바꿔주기
  if (loginData) {
    imageSrc = carImage;
  }
  return (
    <div className="flex flex-col justify-between bg-card1 px-800 py-700 w-[340px] h-[417px] rounded-[30px]">
      <div className="text-detail-2-semibold text-primary-blue h-800">
        Event1
      </div>
      <div className="whitespace-pre-line text-detail-1-semibold h-1800 text-neutral-black">
        {`운전 중 피하고 싶은\n상황 월드컵`}
      </div>
      <div className="relative h-4000 py-500 px-500">
        <img className="w-full h-full" src={imageSrc} alt="Car" />
        {imageSrc === noCarImage && (
          <div className="w-[214px] text-heading-banner-title-2 text-neutral-white text-center absolute top-[51px] left-[31px]">
            ?
          </div>
        )}
      </div>
      <div
        className={`flex items-center justify-center ${loginData ? 'invisible' : 'visible'}`}
      >
        <BlueButton value="차 얻기" onClickFunc={() => alert('차 얻기')} />
      </div>
    </div>
  );
}

Card1.propTypes = {
  // eslint 속이기 위한 data 타입
  loginData: PropTypes.string.isRequired,
};

export default Card1;
