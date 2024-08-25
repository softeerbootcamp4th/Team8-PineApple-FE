import React, { useEffect, useState } from 'react';
import BlueButton from '@/components/buttons/BlueButton';
import WhiteButton from '@/components/buttons/WhiteButton';
import { useNavigate } from 'react-router-dom';

const useLoadingText = (initialText, texts, interval) => {
  const [loadingText, setLoadingText] = useState(initialText);

  useEffect(() => {
    let index = 0;
    const textInterval = setInterval(() => {
      setLoadingText(texts[index]);
      index = (index + 1) % texts.length;
    }, interval);

    return () => clearInterval(textInterval);
  }, [texts, interval]);

  return loadingText;
}; //loading 시 문자 바뀜

function LoadingQuiz() {
  const navigate = useNavigate();

  const handleExit = () => navigate('/event');

  const handleRefresh = () => window.location.reload();

  const loadingTexts = [
    '퀴즈 정보를 가져오는 중.',
    '퀴즈 정보를 가져오는 중..',
    '퀴즈 정보를 가져오는 중...',
    '퀴즈 정보를 가져오는 중..!',
  ];

  const loadingText = useLoadingText(loadingTexts[3], loadingTexts, 500);

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
          value="새로고침(선착순이 밀릴 수 있습니다)"
          onClickFunc={handleRefresh}
          styles="px-3000 py-500 text-bold-3-regular"
        />
      </div>
    </div>
  );
}

export default LoadingQuiz;
