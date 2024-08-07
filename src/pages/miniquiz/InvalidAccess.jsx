import React, { useCallback } from 'react';
import BlueButton from '@/components/buttons/BlueButton';
import { useNavigate } from 'react-router-dom';
import alertTriangle from '@/assets/icons/alertTriangle.svg';
import '@/styles/global.css';

function InvalidAccess() {
  const navigate = useNavigate();
  const handleExit = useCallback(() => {
    navigate('/event', { state: { scrollTo: 'miniQuiz' } });
  }, [navigate]);

  return (
    <div className="flex flex-col items-center h-screen bg-miniquiz-paper pt-4000">
      <img src={alertTriangle} alt="경고" className="w-5000 h-5000"></img>
      <div className="text-body-1-bold py-500">비정상적인 접근입니다.</div>
      <BlueButton
        value="이벤트 페이지로 돌아가기"
        onClickFunc={handleExit}
        styles="px-3000 py-500 text-detail-2-medium"
      />
    </div>
  );
}

export default InvalidAccess;
