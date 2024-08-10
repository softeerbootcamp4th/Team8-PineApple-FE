import React, { useContext, useCallback } from 'react';
import BlueButton from '@/components/buttons/BlueButton';
import getCarModalImage from '@/assets/images/getCarModalImage.svg';
import getItemModalImage from '@/assets/images/getItemModalImage.svg';
import PropTypes from 'prop-types';
import { postParticipants } from '@/api/worldCup/index';
import { AuthContext } from '@/context/authContext';
import { useNavigate } from 'react-router-dom';
import ModalFrame from './ModalFrame';

function GetItemModal({ close, item }) {
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleParticipants = useCallback(async () => {
    try {
      if (item === '자동차 아이템') {
        const result = await postParticipants(userInfo.accessToken);
        const updatedUserInfo = { ...userInfo, car: true };
        localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));
        setUserInfo(updatedUserInfo);
        navigate('/event');
      } else {
        close();
      }
    } catch (error) {
      console.error('WorldCup 참여 등록 API 통신 실패:', error);
    }
  }, [navigate]);
  return (
    <ModalFrame handleExit={close} tag={item} title="아이템을 얻었어요!">
      <div className="px-1500 set-center flex-col">
        <img
          src={`${item === '툴 박스 1개' ? getItemModalImage : getCarModalImage}`}
          alt="getCarModalImage"
          className="mt-[-20%]"
        />
        <BlueButton
          value="확인"
          onClickFunc={handleParticipants}
          styles="text-body-3-semibold px-1300 py-200 mt-[-5%]"
        />
      </div>
    </ModalFrame>
  );
}

GetItemModal.propTypes = {
  close: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
};

export default GetItemModal;