import React, { useCallback, useState } from 'react';
import ExitModal from '@/components/modal/ExitModal';
import EventHeader from '@/components/header/EventHeader';
import BlueButton from '@/components/buttons/BlueButton';
import WhiteButton from '@/components/buttons/WhiteButton';
import { useNavigate } from 'react-router-dom';
import '@/styles/global.css';

function LoadingQuiz() {
  const navigate = useNavigate();
  const handleExit = useCallback(() => {
    navigate('/event');
  }, [navigate]);

  const handleRefresh = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <div className="flex flex-col items-center h-screen bg-miniquiz-paper pt-4000">
      <div className="text-heading-banner-title-3 text-gradient-blue-purple py-500">
        퀴즈 정보를 가져오는 중입니다!
      </div>
      <div className="text-heading-banner-title-3 text-gradient-blue-purple">
        잠시만 기다려 주세요!
      </div>
      <div className="py-1000 set-center gap-500">
        <BlueButton
          value="나가기"
          onClickFunc={handleExit}
          styles="px-3000 py-500 text-bold-3-regular"
        />

        <WhiteButton
          value="새로고침"
          onClickFunc={handleRefresh}
          styles="px-3000 py-500 text-bold-3-regular"
        />
      </div>
    </div>
  );
}

export default LoadingQuiz;
