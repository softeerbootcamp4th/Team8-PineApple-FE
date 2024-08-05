import React, { useContext } from 'react';
import noCarImage from '@/assets/images/noCarImage.svg';
import carImage from '@/assets/images/carImage.svg';
import BlueButton from '@/components/buttons/BlueButton';
import questionMark from '@/assets/images/questionMark.svg';
import { AuthContext } from '@/context/authContext';
import '@/styles/global.css';

function Card1() {
  const { userInfo } = useContext(AuthContext);
  const { haveCar } = userInfo;

  // haveCar 값이 바뀔 때는 어차피 useContext로 재랜더링이 되므로 let으로 선언 아래의 공식 문서에도 let 사용하는 예시가 있음!
  // https://react.dev/learn/preserving-and-resetting-state
  let imageSrc = noCarImage;
  if (haveCar) {
    imageSrc = carImage;
  }

  return (
    <div className="flex flex-col justify-between bg-card1 px-800 pt-700 pb-500 w-[320px] h-[417px] rounded-[30px]">
      <div className="text-detail-2-semibold text-primary-blue h-800">
        Event1
      </div>
      <div className="whitespace-pre-line text-detail-1-semibold h-1800 text-neutral-black">
        {`운전 중 피하고 싶은\n상황 월드컵`}
      </div>
      <div className="relative h-4000 py-500 px-500">
        <img className="w-full h-full" src={imageSrc} alt="Car" />
        {imageSrc === noCarImage && (
          <img
            src={questionMark}
            alt="questionMark"
            className="absolute top-[50px] left-[78px]"
          ></img>
        )}
      </div>
      <div className={`set-center ${haveCar ? 'invisible' : 'visible'}`}>
        <BlueButton
          value="자동차 얻기 "
          onClickFunc={() => alert('자동차 얻기')}
          styles="px-800 py-400 text-detail-2-medium"
        />
      </div>
    </div>
  );
}

export default Card1;
