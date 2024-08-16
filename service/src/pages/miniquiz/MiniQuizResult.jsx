import React, { useState } from 'react';
import EventHeader from '@/components/header/EventHeader';
import ExitModal from '@/components/modal/ExitModal';
import MiniQuizResultMain from '@/pages/miniquiz/MiniQuizResultMain';
import { useLocation } from 'react-router-dom';

function MiniQuizResult() {
  const location = useLocation();
  const [openExitModal, setOpenExitModal] = useState(false);

  const onClose = () => setOpenExitModal(false);

  return (
    <div className="relative flex flex-col items-center h-screen bg-miniquiz-paper pt-2500">
      <EventHeader
        eventTitle="Event 2. 도구 얻기"
        eventBody="월드컵 일일 미니퀴즈"
        setOpenExitModal={setOpenExitModal}
      />
      <MiniQuizResultMain response={location.state || {}} />
      {openExitModal && <ExitModal onClose={onClose} game="MiniQuiz" />}
    </div>
  );
}

export default MiniQuizResult;
