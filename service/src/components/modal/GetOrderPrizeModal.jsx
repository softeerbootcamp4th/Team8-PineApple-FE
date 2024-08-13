import React, { useState, useContext, useEffect } from 'react';
import BlueButton from '@/components/buttons/BlueButton';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '@/context/authContext';
import PhoneInputModal from '@/components/modal/PhoneInputModal';
import ModalFrame from '@/components/modal/ModalFrame';
import { postReward } from '@/api/miniQuiz';
import Prize5_1 from '@/assets/images/prize5_1.png';
import Prize5_2 from '@/assets/images/prize5_2.png';

function GetOrderPrizeModal({ close, participantId, setUserGotPrize }) {
  const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);
  const [openPhoneModal, setOpenPhoneModal] = useState(false);
  const [openOrderModal, setOpenOrderModal] = useState(false);

  useEffect(() => {
    const handleReward = async () => {
      if (userInfo.phoneNumber === undefined) {
        setOpenPhoneModal(true);
      } else {
        try {
          const response = await postReward(participantId);
          if (response.message === 'success') {
            setUserGotPrize(true);
            setOpenOrderModal(true);
          }
        } catch (error) {
          return <div>{error}</div>;
        }
      }
    };

    handleReward();
  }, [userInfo]);

  const handleParticipants = () => {
    if (userInfo.quizParticipated) {
      navigate('/event');
    } else {
      close();
    }
  };

  const handleAuthenticationSuccess = () => {
    setOpenPhoneModal(false);
    setOpenOrderModal(true);
  };

  return (
    <>
      {openOrderModal && (
        <ModalFrame
          handleExit={close}
          tag={userInfo.phoneNumber}
          title="아래 번호로 경품 링크 문자를 전송했어요!"
        >
          <div className="relative px-1500 h-[250px] w-[300px]">
            <img
              src={Prize5_2}
              alt="Prize 2"
              className="absolute w-[186px] left-[8px]"
            />
            <img
              src={Prize5_1}
              alt="Prize 1"
              className="w-[186px] absolute right-[20px]"
            />
          </div>
          <BlueButton
            value="확인"
            onClickFunc={handleParticipants}
            styles="text-body-3-semibold px-1300 py-200 mt-[-5%]"
          />
        </ModalFrame>
      )}
      {openPhoneModal && (
        <PhoneInputModal
          closePhoneModal={() => setOpenPhoneModal(false)}
          onAuthenticationSuccess={handleAuthenticationSuccess}
        />
      )}
    </>
  );
}

GetOrderPrizeModal.propTypes = {
  close: PropTypes.func.isRequired,
  participantId: PropTypes.string.isRequired,
  setUserGotPrize: PropTypes.func.isRequired,
};

export default GetOrderPrizeModal;
