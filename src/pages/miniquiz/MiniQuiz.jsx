import React, { useState } from 'react';
import EventHeader from '@/components/header/EventHeader';
import ExitModal from '@/components/modal/ExitModal';
import MiniQuizMain from '@/pages/miniquiz/MiniQuizMain';
import '@/styles/global.css';

function MiniQuiz() {
  const [openExitModal, setOpenExitModal] = useState(false);

  const onClose = () => setOpenExitModal(false);

  return (
    <>
      <div className="relative min-h-[860px] text-nowrap">
        <EventHeader
          eventTitle="Event 2. 도구 얻기"
          eventBody="월드컵 일일 미니퀴즈"
          setOpenExitModal={setOpenExitModal}
        />
        <MiniQuizMain />
      </div>
      {openExitModal && <ExitModal onClose={onClose} game="MiniQuiz" />}
    </>
  );
}

export default MiniQuiz;
