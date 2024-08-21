import React from 'react';
import WhiteButton from '@/components/buttons/WhiteButton';
import { useNavigate } from 'react-router-dom';

function NoQuizMain() {
  const navigate = useNavigate();

  const handleExit = () => navigate('/event'); //navigate는 동일한 주소를 가지므로 useCallback을 사용할 이유가 없음

  return (
    <div className="flex flex-col items-center h-screen bg-miniquiz-paper pt-5000">
      <div className="text-heading-banner-title-3 text-gradient-blue-purple py-500">
        12시부터 13까지는 퀴즈 준비시간입니다!!!
      </div>
      <div className="text-heading-banner-title-3 text-gradient-blue-purple pb-1000">
        이벤트 페이지로 돌아가시겠습니까???
      </div>
      <WhiteButton
        value="돌아가기"
        onClickFunc={handleExit}
        styles="px-3000 py-500 text-detail-1-semibold"
      />
    </div>
  );
}

export default NoQuizMain;
