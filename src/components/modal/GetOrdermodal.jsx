import React, { useContext, useCallback } from 'react';
import BlueButton from '@/components/buttons/BlueButton';
import getCarModalImage from '@/assets/images/getCarModalImage.svg';
import getItemModalImage from '@/assets/images/getItemModalImage.svg';
import PropTypes from 'prop-types';
import { AuthContext } from '@/context/authContext';
import PhoneInputModal from '@/components/modal/PhoneInputModal';
import ModalFrame from '@/components/modal/ModalFrame';

function GetOrderModal({ close, quizParticipantId }) {
  const { userInfo, setUserInfo } = useContext(AuthContext);
  if (userInfo.phoneNumber === undefined) {
    return <PhoneInputModal closePhoneModal={close} />;
  } else {
    //TODO noAPI
  }
}

GetOrderModal.propTypes = {
  close: PropTypes.func.isRequired,
  quizParticipantId: PropTypes.string.isRequired,
};

export default MiniQuizModal;
