import React, { useContext, useCallback } from 'react';
import BlueButton from '@/components/buttons/BlueButton';
import noToolBoxImage from '@/assets/images/noToolBoxImage.svg';
import toolBoxImage from '@/assets/images/toolBoxImage.svg';
import questionMark from '@/assets/images/questionMark.svg';
import { AuthContext } from '@/context/authContext';
import { useNavigate } from 'react-router-dom';
import '@/styles/global.css';

function ToolBoxCard() {
  const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);

  const gotoMiniQuiz = useCallback(() => {
    navigate('/event/miniQuiz');
  }, []);

  return (
    <div className="flex flex-col justify-between bg-toolBoxCard px-800 pt-700 pb-500 h-[417px] w-[320px] rounded-[30px]">
      <div className="text-detail-2-semibold text-primary-blue h-800">
        Event2
      </div>
      <div className="text-detail-1-semibold h-1800 text-neutral-black">
        일일 미니퀴즈
        <div
          className={`items-center justify-end h-900 flex ${userInfo.toolBoxCnt !== undefined ? 'visible' : 'invisible'}`}
        >
          <div
            className={`px-400 py-100 rounded-[8px] text-detail-3-semibold text-primary-blue bg-neutral-white`}
          >
            {userInfo.toolBoxCnt}개 보유
          </div>
        </div>
      </div>
      <div className="relative h-4000 py-500 px-500">
        <img
          className="w-full h-full"
          src={!userInfo.quizParticipated ? noToolBoxImage : toolBoxImage}
          alt="ToolBox"
        />
        {!userInfo.quizParticipated && (
          <img
            src={questionMark}
            alt="questionMark"
            className="absolute top-[48px] left-[74px]"
          ></img>
        )}
      </div>
      <div
        className={`set-center ${userInfo.quizParticipated ? 'invisible' : 'visible'}`}
      >
        <BlueButton
          value="도구 얻기"
          onClickFunc={gotoMiniQuiz}
          styles="px-800 py-400 text-detail-2-medium"
        />
      </div>
    </div>
  );
}

export default ToolBoxCard;
