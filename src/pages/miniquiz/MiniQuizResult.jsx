import React, { useState } from 'react';
import EventHeader from '@/components/header/EventHeader';
import ExitModal from '@/components/modal/ExitModal';
import MiniQuizResultMain from '@/pages/miniquiz/MiniQuizResultMain';
import { useLocation } from 'react-router-dom';

function MiniQuizResult() {
  const location = useLocation();
  const [openExitModal, setopenExitModal] = useState(false);
  const { quizId, isChosen } = location.state || {};
  if (quizId === undefined || isChosen === undefined) {
    return <div>예상치 못한 오류가 발생했습니다.</div>;
  } //TODO

  const onClose = () => setopenExitModal(false);

  return (
    <div className="relative flex flex-col items-center h-screen bg-miniquiz-paper pt-4000">
      <EventHeader
        eventTitle="Event 2. 도구 얻기"
        eventBody="월드컵 일일 미니퀴즈"
        setopenExitModal={setopenExitModal}
      />
      <MiniQuizResultMain quizId={quizId} isChosen={isChosen} />
      {openExitModal && <ExitModal onClose={onClose} game="MiniQuiz" />}
    </div>
  );
}

export default MiniQuizResult;
