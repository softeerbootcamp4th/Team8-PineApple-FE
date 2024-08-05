import React, { useContext } from 'react';
import BlueButton from '@/components/buttons/BlueButton';
import noToolBoxImage from '@/assets/images/noToolBoxImage.svg';
import toolBoxImage from '@/assets/images/toolBoxImage.svg';
import questionMark from '@/assets/images/questionMark.svg';
import { AuthContext } from '@/context/authContext';

function Card2() {
  const { userInfo } = useContext(AuthContext);
  const { toolBoxCnt, joinedQuiz } = userInfo;
  let imageSrc = noToolBoxImage;
  //QuizJoined 했으면 상품 받음
  //Card1에 있는 주석 참고!
  if (joined) {
    imageSrc = toolBoxImage;
  }

  return (
    <div className="flex flex-col justify-between bg-card2 px-800 pt-700 pb-500 h-[417px] w-[320px] rounded-[30px]">
      <div className="text-detail-2-semibold text-primary-blue h-800">
        Event2
      </div>
      <div className="text-detail-1-semibold h-1800 text-neutral-black">
        일일 미니퀴즈
        <div
          className={`items-center justify-end h-900 flex ${toolBoxCnt !== undefined ? 'visible' : 'invisible'}`}
        >
          <div
            className={`px-400 py-100 rounded-[8px] text-detail-3-semibold text-primary-blue bg-neutral-white`}
          >
            {toolBoxCnt}개 보유
          </div>
        </div>
      </div>
      <div className="relative h-4000 py-500 px-500">
        <img className="w-full h-full" src={imageSrc} alt="ToolBox" />
        {imageSrc === noToolBoxImage && (
          <img
            src={questionMark}
            alt="questionMark"
            className="absolute top-[48px] left-[74px]"
          ></img>
        )}
      </div>
      <div
        className={`flex items-center justify-center ${joinedQuiz ? 'invisible' : 'visible'}`}
      >
        <BlueButton
          value="툴박스 얻기"
          onClickFunc={() => alert('툴박스 얻기')}
          styles="px-800 py-400 text-detail-2-medium"
        />
      </div>
    </div>
  );
}

export default Card2;
