import React, { useState } from 'react';
import ExitModal from '@/components/modal/ExitModal';
import EventHeader from '@/components/header/EventHeader';
import '@/styles/global.css';

function NoQuiz() {
  const [openExitModal, setopenExitModal] = useState(false);
  const onClose = () => setopenExitModal(false);
  return (
    <>
      <EventHeader
        eventTitle="Event 2. 도구 얻기"
        eventBody="월드컵 일일 미니퀴즈"
        setopenExitModal={setopenExitModal}
      />
      <div className="w-screen h-screen set-center">퀴즈 정보가 없습니다.</div>
      {openExitModal && <ExitModal onClose={onClose} game="MiniQuiz" />}
    </>
  );
}

export default NoQuiz;
