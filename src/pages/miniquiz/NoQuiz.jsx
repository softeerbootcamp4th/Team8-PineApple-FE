import React, { useState } from 'react';
import ExitModal from '@/components/modal/ExitModal';
import EventHeader from '@/components/header/EventHeader';
import NoQuizMain from '@/pages/miniquiz/NoQuizMain';

function NoQuiz() {
  const [openExitModal, setOpenExitModal] = useState(false);
  const onClose = () => setOpenExitModal(false);

  return (
    <>
      <EventHeader
        eventTitle="Event 2. 도구 얻기"
        eventBody="월드컵 일일 미니퀴즈"
        setOpenExitModal={setOpenExitModal}
      />
      <NoQuizMain />
      {openExitModal && <ExitModal onClose={onClose} game="MiniQuiz" />}
    </>
  );
}

export default NoQuiz;
