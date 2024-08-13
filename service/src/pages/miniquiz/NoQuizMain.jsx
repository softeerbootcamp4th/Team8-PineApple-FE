import React, { useCallback } from 'react';
import WhiteButton from '@/components/buttons/WhiteButton';
import { useNavigate } from 'react-router-dom';
import '@/styles/global.css';

function NoQuizMain() {
  const navigate = useNavigate(); //useNavigate은 리렌더링 시에는 재생성이 되지 않음 그렇기에 useCallback 안 씀

  const handleExit = useCallback(() => {
    navigate('/event');
  }, []);

  return (
    <div className="flex flex-col items-center h-screen bg-miniquiz-paper pt-5000">
      <div className="text-heading-banner-title-3 text-gradient-blue-purple py-500">
        퀴즈 정보가 없습니다.
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
