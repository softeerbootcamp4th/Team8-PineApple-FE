import React, { useCallback } from 'react';
import WhiteButton from '@/components/buttons/WhiteButton';
import BlueButton from '@/components/buttons/BlueButton';
import { useNavigate } from 'react-router-dom';
import useMiniQuizResult from './miniquizhooks/useMiniQuizResult';
import PropTypes from 'prop-types';

function MiniQuizResultMain({ quizId, isChosen }) {
  const navigate = useNavigate();
  const { loading, error, response } = useMiniQuizResult(quizId, isChosen);

  const handleExit = useCallback(() => {
    navigate('/event', { state: { scrollTo: 'miniQuiz' } });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {response.isCorrect ? (
        <>
          <div className="flex gap-500">
            <div className="skyblue-box text-detail-1-bold rounded-[8px]">
              퀴즈 성공
            </div>
            <div
              className={`skyblue-box text-detail-1-bold rounded-[8px]`} //TODO 선착순 조건 넣기
            >
              선착순 당첨
            </div>
          </div>
          <div className="py-500 text-body-1-bold mb-1200">정답입니다!</div>
        </>
      ) : (
        <>
          <div className="rounded-[8px] px-400 py-100 bg-neutral-500 text-detail-1-bold text-neutral-white">
            퀴즈 실패
          </div>
          <div className="py-500 text-body-1-bold mb-1200">꽝!</div>
        </>
      )}
      <img src={response.quizImage}></img>
      <div className="flex mt-1500 gap-1000">
        <WhiteButton
          value={`${response.isCorrect ? '선착순 500명 경품 받기' : '이벤트 홈으로 돌아가기'}`}
          onClickFunc={response.isCorrect ? () => alert('선착순') : handleExit}
          styles="text-detail-2-medium px-1500 py-400"
        />
        {response.isCorrect && ( //TODO 선착순 넣기
          <BlueButton
            value="툴박스 받기"
            onClickFunc={() => alert('선착순')}
            styles="text-detail-2-medium px-2500 py-400"
          />
        )}
      </div>
    </>
  );
}

MiniQuizResultMain.propTypes = {
  quizId: PropTypes.number,
  isChosen: PropTypes.number,
};

export default MiniQuizResultMain;
