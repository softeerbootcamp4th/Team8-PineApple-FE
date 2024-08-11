import React, { useState, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/authContext';
import MiniQuizModal from '@/components/modal/MiniQuizModal';
import ButtonCases from '@/pages/miniquiz/ButtonCases';
import PropTypes from 'prop-types';

function MiniQuizResultMain({ response }) {
  const navigate = useNavigate();
  const { successOrder, isCorrect, quizImage, quizParticipantId } = response;
  const [modal, setModal] = useState(false);
  let correctMessage = '정답입니다!';

  const handleExit = useCallback(() => {
    navigate('/event', { state: { scrollTo: 'miniQuiz' } });
  }, []);

  const closeModal = useCallback(() => {
    setModal(false);
  }, []);

  const openModal = useCallback(() => {
    setModal(true);
  }, []);

  if (isCorrect === undefined) {
    return <div>예상치 못한 오류가 발생했습니다.</div>; // MiniQuizResult에 navigate state로 전달된 값이 잘못되었을 때
  }

  if (successOrder <= 500)
    correctMessage = successOrder + '번째 ' + correctMessage;

  return (
    <>
      {isCorrect ? (
        <>
          <div className="flex gap-500">
            <div className="skyblue-box text-detail-1-bold rounded-[8px]">
              퀴즈 성공
            </div>
            <div
              className={`skyblue-box text-detail-1-bold rounded-[8px] ${successOrder <= 500 ? '' : 'hidden'}`}
            >
              선착순 당첨
            </div>
          </div>
          <div className="py-500 text-body-1-bold mb-1200">
            {correctMessage}
          </div>
        </>
      ) : (
        <>
          <div className="rounded-[8px] px-400 py-100 bg-neutral-500 text-detail-1-bold text-neutral-white">
            퀴즈 실패
          </div>
          <div className="py-500 text-body-1-bold mb-1200">꽝!</div>
        </>
      )}
      <img src={quizImage}></img>
      <ButtonCases
        isCorrect={isCorrect}
        quizParticipantId={quizParticipantId}
        handleExit={handleExit}
        openModal={openModal}
      />
      {modal && <MiniQuizModal closePhoneModal={closeModal} />}
    </>
  );
}

MiniQuizResultMain.propTypes = {
  response: PropTypes.shape({
    successOrder: PropTypes.number,
    quizImage: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool.isRequired,
    quizParticipantId: PropTypes.string,
  }),
};

export default MiniQuizResultMain;
