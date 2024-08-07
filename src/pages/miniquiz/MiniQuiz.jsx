import React, { useState } from 'react';
import useMiniQuiz from '@/hooks/useMiniQuiz';
import EventHeader from '@/components/header/EventHeader';
import ClickBox from '@/pages/miniquiz/ClickBox';
import BluePurpleButton from '@/components/buttons/BluePurpleButton';
import LoadingQuiz from '@/pages/miniquiz/LoadingQuiz';
import ExitModal from '@/components/modal/ExitModal';
import { useNavigate } from 'react-router-dom';
import '@/styles/global.css';

function MiniQuiz() {
  const { loading, error, quizDescription, quizId, shuffledSelectList, code } =
    useMiniQuiz();
  const [isChosen, setIsChosen] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [openExitModal, setopenExitModal] = useState(false);
  const navigate = useNavigate();

  const onClose = () => setopenExitModal(false);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <LoadingQuiz />;
  } else if (code === 'NO_QUIZ_CONTENT') {
    navigate('/event/invalidAccess');
  } else if (isSubmit) {
    navigate('/event/miniQuizResult', { state: { quizId, isChosen } });
  }

  navigate('/event/invalidAccess');
  return (
    <>
      <div className="relative min-h-[860px] text-nowrap">
        <EventHeader
          eventTitle="Event 2. 도구 얻기"
          eventBody="월드컵 일일 미니퀴즈"
          setopenExitModal={setopenExitModal}
        />

        <div className="flex flex-col items-center h-screen bg-miniquiz-paper pt-3000">
          <div className="rounded-[8px] skyblue-box text-detail-1-bold mb-500">
            월드컵 일일 미니퀴즈
          </div>
          <div className="text-center text-body-1-bold mb-2000">
            {quizDescription}
          </div>
          <div className="grid grid-cols-2 gap-x-600 gap-y-600 mb-2000">
            {shuffledSelectList.map(item => {
              const id = Number(item[0]);
              const value = item[1];
              return (
                <ClickBox
                  id={id}
                  isChosen={isChosen}
                  value={value}
                  onClick={() => setIsChosen(id)}
                  key={id}
                />
              );
            })}
          </div>
          <BluePurpleButton
            value="제출"
            onClickFunc={() => setIsSubmit(true)}
            styles="px-3000 py-500 text-detail-1-regular"
          />
        </div>
      </div>
      {openExitModal && <ExitModal onClose={onClose} game="MiniQuiz" />}
    </>
  );
}

export default MiniQuiz;
