import React, { useState, useCallback, useContext } from 'react';
import WhiteButton from '@/components/buttons/WhiteButton';
import BlueButton from '@/components/buttons/BlueButton';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/authContext';
import PhoneInputModal from '@/components/modal/PhoneInputModal';
import GetOrderPrizeModal from '@/components/modal/GetOrderPrizeModal';
import PropTypes from 'prop-types';

function MiniQuizResultMain({ response }) {
  const navigate = useNavigate();
  const { successOrder, isCorrect, quizImage, quizParticipantId } = response;
  const { userInfo } = useContext(AuthContext);
  const [openPhoneInputModal, setOpenPhoneInputModal] = useState(false);
  const [prizeName, setPrizeName] = useState('');
  let correctMessage = '정답입니다!';

  const handleExit = useCallback(() => {
    navigate('/event', { state: { scrollTo: 'miniQuiz' } });
  }, []);

  const closePhoneModal = () => {
    setOpenPhoneInputModal(false);
  };

  const getOrderPrize = () => {
    if (userInfo.phoneNumber === undefined) {
      setPrizeName('스타벅스 5천원 쿠폰');
      setOpenPhoneInputModal(true);
    } else {
      setOpenPhoneInputModal(false);
      setOpenOrderPrizeModal(true);
    }
  };

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
      <div className="flex mt-1500 gap-1000">
        {!isCorrect && (
          <WhiteButton
            value={`${isCorrect ? '선착순 500명 경품 받기' : '이벤트 홈으로 돌아가기'}`}
            onClickFunc={isCorrect ? () => getOrderPrize() : () => handleExit()}
            styles="text-detail-2-medium px-1500 py-400"
          />
        )}
        {successOrder <= 500 && ( // 틀렸을 때는 successOrder 값 없음 (undefined <= 500) === false
          <WhiteButton
            value="선착순 500명 경품 받기"
            onCLickFunc={() => getOrderPrize()}
            styles="text-detail-2-medium px-1500 py-400"
          />
        )}
        {isCorrect && (
          <BlueButton
            value="툴박스 받기"
            onClickFunc={() => getOrderPrize()}
            styles="text-detail-2-medium px-2500 py-400"
          />
        )}
      </div>
      {openPhoneInputModal && (
        <PhoneInputModal closePhoneModal={closePhoneModal} option={prizeName} />
      )}
    </>
  );
}

MiniQuizResultMain.propTypes = {
  response: PropTypes.shape({
    successOrder: PropTypes.number,
    quizImage: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool.isRequired,
    quizParticipantId: PropTypes.string.isRequired,
  }),
};

export default MiniQuizResultMain;
