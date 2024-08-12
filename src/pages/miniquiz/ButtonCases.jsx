import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import WhiteButton from '@/components/buttons/WhiteButton';
import BlueButton from '@/components/buttons/BlueButton';
import { AuthContext } from '@/context/authContext';

function ButtonCases({
  isCorrect,
  participantId,
  userGotPrize,
  handleExit,
  openToolBoxModal,
  openOrderModal,
}) {
  const { userInfo } = useContext(AuthContext);
  const showOrderButton = participantId !== undefined && !userGotPrize;
  const showToolBoxButton = isCorrect && !(userInfo.quizParticipated === true); //userInfo.quizParticipated는 undefined일 수 있음
  const buttons = [];

  if (showOrderButton) {
    buttons.push(
      <WhiteButton
        key="prize"
        value="선착순 500명 경품 받기"
        onClickFunc={openOrderModal}
        styles="text-detail-2-medium px-1500 py-400"
      />,
    );
  }
  if (showToolBoxButton) {
    buttons.push(
      <BlueButton
        key="toolbox"
        value="툴박스 받기"
        onClickFunc={openToolBoxModal}
        styles="text-detail-2-medium px-2500 py-400"
      />,
    );
  }
  if (!isCorrect) {
    buttons.push(
      <WhiteButton
        key="exit"
        value="이벤트 홈으로 돌아가기"
        onClickFunc={handleExit}
        styles="text-detail-2-medium px-1500 py-400"
      />,
    );
  }
  if (buttons.length === 0) {
    buttons.push(
      <BlueButton
        key="exit"
        value="이벤트 홈으로 돌아가기"
        onClickFunc={handleExit}
        styles="text-detail-2-medium px-1500 py-400"
      />,
    );
  }

  return <div className="flex mt-1500 gap-1000">{buttons}</div>;
}

ButtonCases.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
  participantId: PropTypes.string,
  handleExit: PropTypes.func.isRequired,
  openToolBoxModal: PropTypes.func.isRequired,
  openOrderModal: PropTypes.func.isRequired,
  userGotPrize: PropTypes.bool.isRequired,
};

export default ButtonCases;
