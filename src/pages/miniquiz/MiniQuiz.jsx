import React from 'react';
import '@/styles/global.css';
import ClickBox from './ClickBox';

function MiniQuiz() {
  //TODO 백에서 데이터 가져오기
  // try catch를 이용하여 12 ~ 13시는 다른 화면 return

  const question =
    '캐스퍼 EV는 000 을(를) 통해 주변 보행자에게 차량의 존재를 알려줄 수 있어요!';
  return (
    <>
      <div className="relative inset-0 bg-miniquiz-paper text-nowrap">
        <div className="flex px-5000 py-500 gap-400 mb-2500">
          <div className="flex items-end text-detail-1-bold h-800 min-w-[280px]">
            CASPER ELECTRIC
          </div>
          <div className="flex items-end text-detail-2-regular h-800 text-primary-blue">
            Event 2. 도구 얻기
          </div>
          <div className="flex items-end text-detail-2-regular h-800">
            월드컵 일일 미니퀴즈
          </div>
        </div>
        <div className="flex flex-col items-center mb-2000">
          <div className="rounded-[8px] skyblue-box text-detail-1-bold mb-500">
            월드컵 일일 미니퀴즈
          </div>
          <div className="text-center text-body-1-bold mb-2000">{question}</div>
          <div className="grid grid-cols-2 gap-x-600 gap-y-600">
            <ClickBox text="hello" />
            <ClickBox text="hello" />
            <ClickBox text="hello" />
            <ClickBox text="hello" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MiniQuiz;
