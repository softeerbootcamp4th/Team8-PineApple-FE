import React, { useState } from 'react';
import BlueButton from '@/components/buttons/BlueButton';
import miniQuizIntro1 from '@/assets/images/miniQuizIntro1.svg';
import miniQuizIntro2 from '@/assets/images/miniQuizIntro2.svg';
import miniQuizIntro3 from '@/assets/images/miniQuizIntro3.svg';
import getNowTime from '@/utils/getNowTime';
import '@/styles/miniQuiz.css';

function MiniQuiz() {
  const [countDownStart, setCountDownStart] = useState(() => {
    const currentTime = getNowTime();
    return '12시' <= currentTime && currentTime < '13시'; //HH시 MM분 포멧이라 의도한대로 작동
  });

  return (
    <div className="flex px-2500 pb-2900">
      <div className="relative w-[610px] h-[400px]">
        {countDownStart && (
          <div className="absolute inset-0 z-10 bg-black opacity-70 p-2000">
            <div className="text-center text-body-2-semibold text-primary-blue">
              새 퀴즈 공개
            </div>
            <div className="text-[150px] text-gradient-blue-purple font-pretendard font-bold text-center">
              59:12
            </div>
          </div>
        )}
        <div className="absolute inset-0 flex gap-600">
          <img
            src={miniQuizIntro1}
            alt="miniQuizIntro1"
            className="object-cover w-1/3 h-full"
          />
          <img
            src={miniQuizIntro2}
            alt="miniQuizIntro2"
            className="object-cover w-1/3 h-full"
          />
          <img
            src={miniQuizIntro3}
            alt="miniQuizIntro3"
            className="object-cover w-1/3 h-full"
          />
        </div>
      </div>
      <div className="w-[780px] z-0 ml-2500">
        <div className="space-y-800">
          <div className="text-primary-blue text-detail-1-bold">
            Event2. 툴박스 얻기
          </div>
          <div className="text-heading-3-bold">월드컵 일일 미니퀴즈</div>
          <div className="flex gap-400">
            <div className="skyblue-box">매일 오후 1시 공개</div>
            <div className="skyblue-box">선착순 500명 스타벅스 5천원 쿠폰</div>
          </div>
        </div>
        <div className="whitespace-pre-line text-detail-2-medium mt-400 mb-1200">
          {`월드컵에서 알 수 있는 캐스퍼 EV에 대한  일일 미니 퀴즈를 맞추고
                    툴박스 아이템을 받아요. 툴박스 아이템은 응모에 한번 참여하면 사라져요.`}
        </div>
        <BlueButton
          value="이벤트 참여하기"
          onClickFunc={() => alert('이벤트 참여하기')}
          textSize="text-detail-2-medium"
          px="px-2000"
          py="py-400"
        />
      </div>
    </div>
  );
}

export default MiniQuiz;
