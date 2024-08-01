import React from 'react';
import BlueButton from '@/components/buttons/BlueButton';
import miniQuizIntro1 from '@/assets/images/miniQuizIntro1.svg';
import miniQuizIntro2 from '@/assets/images/miniQuizIntro2.svg';
import miniQuizIntro3 from '@/assets/images/miniQuizIntro3.svg';

function MiniQuiz() {
  return (
    <div className="flex px-2500 pb-2900">
      <div className="flex gap-2500">
        <div className="flex gap-600 w-[610px] h-[400px]">
          <img src={miniQuizIntro1} alt="miniQuizIntro1"></img>
          <img src={miniQuizIntro2} alt="miniQuizIntro2"></img>
          <img src={miniQuizIntro3} alt="miniQuizIntro3"></img>
        </div>
        <div className="w-[780px]">
          <div className="space-y-800">
            <div className="text-primary-blue text-detail-1-bold">
              Event2. 툴박스 얻기
            </div>
            <div className="text-heading-3-bold">월드컵 일일 미니퀴즈</div>
            <div className="flex gap-400">
              <div className="bg-background-lightblue px-400 py-100 text-detail-2-medium text-primary-blue">
                매일 오후 1시 공개
              </div>
              <div className="bg-background-lightblue px-400 py-100 text-detail-2-medium text-primary-blue">
                선착순 500명 스타벅스 5천원 쿠폰
              </div>
            </div>
          </div>
          <div className="whitespace-pre-line text-detail-2-medium mt-400 mb-1200">
            {`월드컵에서 알 수 있는 캐스퍼 EV에 대한  일일 미니 퀴즈를 맞추고
                    도구 아이템을 받아요. 도구 아이템은 응모에 한번 참여하면 사라져요.`}
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
    </div>
  );
}

export default MiniQuiz;
