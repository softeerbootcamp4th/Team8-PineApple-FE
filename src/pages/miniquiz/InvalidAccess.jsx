import React, { useCallback } from 'react';
import BlueButton from '@/components/buttons/BlueButton';
import WhiteButton from '@/components/buttons/WhiteButton';
import { useNavigate } from 'react-router-dom';
import '@/styles/global.css';

function InvalidAccess() {
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
        부적절한 접근입니다.
      </div>
      <div className="text-heading-banner-title-3 text-gradient-blue-purple">
        홈페이지로 돌아가시겠습니까???
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

export default InvalidAccess;
