import React, { useEffect, useCallback, useState } from 'react';
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

  const [loadingText, setLoadingText] = useState('퀴즈 정보를 가져오는 중..!');

  useEffect(() => {
    const texts = [
      '퀴즈 정보를 가져오는 중.',
      '퀴즈 정보를 가져오는 중..',
      '퀴즈 정보를 가져오는 중...',
      '퀴즈 정보를 가져오는 중..!',
    ];
    let index = 0;
    const interval = setInterval(() => {
      setLoadingText(texts[index]);
      index = (index + 1) % texts.length;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center h-screen bg-miniquiz-paper pt-4000">
      <div className="text-heading-banner-title-3 text-gradient-blue-purple py-500">
        {loadingText}
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
