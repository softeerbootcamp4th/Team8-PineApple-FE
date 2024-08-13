import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ModalFrame from './ModalFrame';
import { AuthContext } from '@/context/authContext';
import BluePurpleButton from '@/components/buttons/BluePurpleButton';

function PrizeLinkSentModal({ closeResultModal, resultImage }) {
  const { userInfo } = useContext(AuthContext);
  return (
    <ModalFrame
      handleExit={closeResultModal}
      tag=""
      title="아래 번호로 경품 링크 문자를 전송했어요!"
    >
      <div className="relative flex-col px-3000 set-center">
        <div className="mb-800 text-detail-3-semibold text-neutral-white set-center px-400 py-200 bg-gradient-blue-purple">
          {userInfo.phoneNumber}
        </div>
        <img
          src={resultImage}
          alt="resultImage"
          className="mb-1500 w-[200px] h-auto"
        />
        <BluePurpleButton
          value="확인"
          onClickFunc={closeResultModal}
          styles="px-1300 py-400 text-detail-3-semibold"
        />
      </div>
    </ModalFrame>
  );
}

PrizeLinkSentModal.propTypes = {
  closeResultModal: PropTypes.func.isRequired,
  resultImage: PropTypes.string.isRequired,
};

export default PrizeLinkSentModal;
