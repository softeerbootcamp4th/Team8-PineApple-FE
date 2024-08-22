import React, { useState, useEffect } from 'react';
import BlueButton from '@/components/buttons/BlueButton';
import miniQuizIntro1 from '@/assets/images/miniQuizIntro1.svg';
import miniQuizIntro2 from '@/assets/images/miniQuizIntro2.svg';
import miniQuizIntro3 from '@/assets/images/miniQuizIntro3.svg';
import {
  getMillisecondsUntilNextSecond,
  getMillisecondsUntilNextHour,
  getSecondsUntilNextQuiz,
} from '@/utils/miniQuizUtils';

import { useNavigate } from 'react-router-dom';

function MiniQuiz() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(() => getSecondsUntilNextQuiz());
  const [countDownStart, setCountDownStart] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const remainingTime = getSecondsUntilNextQuiz(); //12시까지 몇 초 남았는지 계산
      if (remainingTime !== -1) {
        //-1이 아니면 12시와 13시 사이라는 의미로 카운트 다운 시작
        setCountDownStart(true);
      }

      const sleepTime = getMillisecondsUntilNextHour(); //다음 정각까지 남은 시간 계산
      const timeoutId = setTimeout(checkTime, sleepTime); //다음 정각에 checkTime 함수 호출
      return () => clearTimeout(timeoutId);
    };

    checkTime();
  }, []);

  useEffect(() => {
    if (countDownStart) {
      const tick = () => {
        const remainingTime = getSecondsUntilNextQuiz(); //퀴즈 시간까지 남은 초 확인
        setSeconds(remainingTime);

        if (remainingTime !== -1) {
          //12시와 13시 사이
          const timeoutId = setTimeout(tick, getMillisecondsUntilNextSecond()); //다음 초에 tick 함수 재호출로 남은 시간 재설정
          return () => clearTimeout(timeoutId);
        } else {
          setCountDownStart(false); //12시와 13시 사이가 아니면 카운트 다운을 종료
        }
      };

      tick();
    }
  }, [countDownStart]);

  return (
    <div className="flex px-3000 pt-2000 pb-2900">
      <div className="relative min-w-[610px] h-[400px]">
        {seconds !== -1 && (
          <div className="absolute inset-0 z-10 bg-black opacity-50 p-2000">
            <div className="text-center text-body-2-semibold text-primary-blue">
              새 퀴즈 공개
            </div>
            <div className="text-[150px] text-gradient-blue-purple font-pretendard font-bold text-center">
              {Math.floor(seconds / 60)}:
              {String(seconds - 60 * Math.floor(seconds / 60)).padStart(2, '0')}
            </div>
          </div>
        )}
        <div className="absolute inset-0 flex gap-600">
          <img src={miniQuizIntro1} alt="miniQuizIntro1" loading="lazy" />
          <img src={miniQuizIntro2} alt="miniQuizIntro2" loading="lazy" />
          <img src={miniQuizIntro3} alt="miniQuizIntro3" loading="lazy" />
        </div>
      </div>
      <div className="relative w-[780px] z-0 ml-3000">
        <div className="space-y-800">
          <div className="text-primary-blue text-detail-1-bold">
            Event2. 툴박스 얻기
          </div>
          <div className="text-heading-3-bold">월드컵 일일 미니퀴즈</div>
          <div className="flex gap-400">
            <div className="text-detail-2-medium skyblue-box">
              매일 오후 1시 공개
            </div>
            <div className="text-detail-2-medium skyblue-box">
              선착순 500명 스타벅스 5천원 쿠폰
            </div>
          </div>
        </div>
        <div className="whitespace-pre-line text-detail-2-medium mt-400 mb-200">
          {`월드컵에서 알 수 있는 캐스퍼 EV에 대한  일일 미니 퀴즈를 맞추고
                    툴박스 아이템을 받아요. 툴박스 아이템은 응모에 한번 참여하면 사라져요.`}
        </div>
        <div className="text-gray-500 text-detail-3-regular mb-400">
          *12시부터 13시까지는 퀴즈 준비시간으로 퀴즈 참여가 불가능합니다.
        </div>
        <BlueButton
          value="이벤트 참여하기"
          onClickFunc={() => navigate('/event/miniQuiz')}
          styles="px-2000 py-400 text-detail-2-medium"
        />
      </div>
    </div>
  );
}

export default MiniQuiz;
