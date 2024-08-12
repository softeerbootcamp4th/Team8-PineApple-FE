import React, { useContext, useCallback } from 'react';
import noCarImage from '@/assets/images/noCarImage.svg';
import carImage from '@/assets/images/carImage.svg';
import BlueButton from '@/components/buttons/BlueButton';
import questionMark from '@/assets/images/questionMark.svg';
import { AuthContext } from '@/context/authContext';
import { useNavigate } from 'react-router-dom';

function Card1() {
  const { userInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const gotoWorldCup = useCallback(() => {
    navigate('/event/worldCup');
  }, []);

  return (
    <div className="flex flex-col justify-between bg-card1 px-800 pt-700 pb-500 w-[320px] h-[417px] rounded-[30px]">
      <div className="text-detail-2-semibold text-primary-blue h-800">
        Event1
      </div>
      <div className="whitespace-pre-line text-detail-1-semibold h-1800 text-neutral-black">
        {`운전 중 피하고 싶은\n상황 월드컵`}
      </div>
      <div className="relative h-4000 py-500 px-500">
        <img
          className="w-full h-full"
          src={userInfo.car ? carImage : noCarImage}
          alt="Car"
        />
        {!userInfo.car && (
          <img
            src={questionMark}
            alt="questionMark"
            className="absolute top-[50px] left-[78px]"
          ></img>
        )}
      </div>
      <div className={`set-center ${userInfo.car ? 'invisible' : 'visible'}`}>
        <BlueButton
          value="자동차 얻기 "
          onClickFunc={gotoWorldCup}
          styles="px-800 py-400 text-detail-2-medium"
        />
      </div>
    </div>
  );
}

export default Card1;
