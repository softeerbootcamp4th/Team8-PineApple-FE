import React from 'react';
import '@/styles/global.css';

function MiniQuiz() {
  //TODO 백에서 데이터 가져오기

  const question =
    '캐스퍼 EV는 000 을(를) 통해 주변 보행자에게 차량의 존재를 알려줄 수 있어요!';
  return (
    <>
      <div className="bg-miniquiz-paper fixed inset-0 z-[10]">
        <div className="flex px-5000 py-500 gap-400 mb-2500">
          <div className="flex items-end text-detail-1-bold h-800 w-[280px] text-nowrap">
            CASPER ELECTRIC
          </div>
          <div className="flex items-end text-detail-2-regular h-800 text-primary-blue text-nowrap">
            Event 2. 도구 얻기
          </div>
          <div className="flex items-end text-detail-2-regular h-800 text-nowrap">
            월드컵 일일 미니퀴즈
          </div>
        </div>
        <div className="flex flex-col items-center px-5000 mb-2000">
          <div className="rounded-[8px] skyblue-box text-detail-1-bold mb-500">
            월드컵 일일 미니퀴즈
          </div>
          <div className="text-center text-body-1-bold">{question}</div>
        </div>
      </div>
    </>
  );
}

export default MiniQuiz;
