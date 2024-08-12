import React from 'react';
import PropTypes from 'prop-types';
import WhiteButton from '@/components/buttons/WhiteButton';
import BlueButton from '@/components/buttons/BlueButton';

function ButtonCases({ isCorrect, quizParticipantId, handleExit, openModal }) {
  const buttons = [];

  if (isCorrect) {
    if (quizParticipantId !== undefined) {
      buttons.push(
        <WhiteButton
          key="prize"
          value="선착순 500명 경품 받기"
          onClickFunc={openModal}
          styles="text-detail-2-medium px-1500 py-400"
        />,
      );
    }

    buttons.push(
      <BlueButton
        key="toolbox"
        value="툴박스 받기"
        onClickFunc={openModal}
        styles="text-detail-2-medium px-2500 py-400"
      />,
    );
  } else {
    buttons.push(
      <WhiteButton
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
  quizParticipantId: PropTypes.string,
  handleExit: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ButtonCases;
