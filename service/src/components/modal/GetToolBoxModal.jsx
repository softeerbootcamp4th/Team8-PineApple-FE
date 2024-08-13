import React, { useState, useContext, useEffect, useRef } from 'react';
import BlueButton from '@/components/buttons/BlueButton';
import getItemModalImage from '@/assets/images/getItemModalImage.svg';
import { getToolBox } from '@/api/miniQuiz';
import PropTypes from 'prop-types';
import { AuthContext } from '@/context/authContext';
import PhoneInputModal from '@/components/modal/PhoneInputModal';
import { useNavigate } from 'react-router-dom';
import ModalFrame from '@/components/modal/ModalFrame';
import AlreadyGetCarModal from './AlreadyGetCarModal';

function GetToolBoxModal({ close, userGotPrize }) {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const [openPhoneModal, setOpenPhoneModal] = useState(false);
  const [openToolBoxModal, setOpenToolBoxModal] = useState(false);
  const [openAlreadyModal, setOpenAlreadyModal] = useState(false);
  const already = useRef(false); //api 통신을 한 번만 하기 위한 상태

  useEffect(() => {
    const handleToolBox = async () => {
      if (userInfo.phoneNumber === undefined) {
        setOpenPhoneModal(true);
      } else if (already.current === false) {
        try {
          const response = await getToolBox();
          if (response.phoneNumber !== undefined) {
            setOpenToolBoxModal(true);
            const updatedUserInfo = {
              ...userInfo,
              ...response,
            };
            setUserInfo(updatedUserInfo);
          } else if (response.code === 'PARTICIPATION_EXISTS') {
            setOpenAlreadyModal(true);
          }
        } catch (error) {
          console.log(error);
        }
        already.current = true;
      }
    };
    handleToolBox();
  }, [userInfo]);

  const handleClick = () => {
    if (userGotPrize) {
      navigate('/event');
    } else {
      close();
    }
  };

  return (
    <>
      {openToolBoxModal && (
        <ModalFrame
          handleExit={close}
          tag="툴 박스 1"
          title="아이템을 얻었어요!"
        >
          <div className="flex-col px-1500 set-center">
            <img
              src={getItemModalImage}
              alt="getItemModalImage"
              className="mt-[-20%]"
            />
            <BlueButton
              value="확인"
              onClickFunc={handleClick}
              styles="text-body-3-semibold px-1300 py-200 mt-[-5%]"
            />
          </div>
        </ModalFrame>
      )}
      {openPhoneModal && (
        <PhoneInputModal closePhoneModal={() => setOpenPhoneModal(false)} />
      )}
      {openAlreadyModal && (
        <AlreadyGetCarModal close={() => setOpenPhoneModal(false)} />
      )}
    </>
  );
}

GetToolBoxModal.propTypes = {
  close: PropTypes.func.isRequired,
  userGotPrize: PropTypes.bool.isRequired,
};

export default GetToolBoxModal;
