import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonCases from '@/pages/miniquiz/ButtonCases';
import GetOrderPrizeModal from '@/components/modal/GetOrderPrizeModal';
import GetToolBoxModal from '@/components/modal/GetToolBoxModal';
import { getRewardCheck } from '@/api/miniQuiz';
import PropTypes from 'prop-types';

function MiniQuizResultMain({ response }) {
  const navigate = useNavigate();
  const { successOrder, isCorrect, quizImage, quizParticipantId } = response;
  const [userGotPrize, setUserGotPrize] = useState(false);
  const [toolBoxModal, setToolBoxModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  let correctMessage = '정답입니다!';

  useEffect(() => {
    const check = async () => {
      try {
        const result = await getRewardCheck();
        const { rewarded } = result;
        if (rewarded) {
          setUserGotPrize(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    check();
  }, []);

  const handleExit = useCallback(() => {
    navigate('/event', { state: { scrollTo: 'miniQuiz' } });
  }, []);

  const closeToolBoxModal = useCallback(() => {
    setToolBoxModal(false);
  }, []);

  const openToolBoxModal = useCallback(() => {
    setToolBoxModal(true);
  }, []);

  const closeOrderModal = useCallback(() => {
    setOrderModal(false);
  }, []);

  const openOrderModal = useCallback(() => {
    setOrderModal(true);
  }, []);

  if (isCorrect === undefined) {
    return <div>예상치 못한 오류가 발생했습니다.</div>; // MiniQuizResult에 navigate state로 전달된 값이 잘못되었을 때
  }

  if (successOrder <= 500 && !userGotPrize)
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
              className={`skyblue-box text-detail-1-bold rounded-[8px] ${successOrder <= 500 && !userGotPrize ? '' : 'hidden'}`}
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
        participantId={quizParticipantId}
        userGotPrize={userGotPrize}
        handleExit={handleExit}
        openToolBoxModal={openToolBoxModal}
        openOrderModal={openOrderModal}
      />
      {toolBoxModal && (
        <GetToolBoxModal
          close={closeToolBoxModal}
          userGotPrize={userGotPrize}
        />
      )}
      {orderModal && (
        <GetOrderPrizeModal
          close={closeOrderModal}
          participantId={quizParticipantId}
          setUserGotPrize={setUserGotPrize}
        />
      )}
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
