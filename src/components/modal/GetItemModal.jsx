import React, { useContext, useCallback } from 'react';
import modalClose from '@/assets/icons/modalClose.svg';
import BlueButton from '@/components/buttons/BlueButton';
import getCarModalImage from '@/assets/images/getCarModalImage.svg';
import PropTypes from 'prop-types';
import { postParticipants } from '@/api/worldCup/index';
import { AuthContext } from '@/context/authContext';
import { useNavigate } from 'react-router-dom';

function GetItemModal({ close, item }) {
  console.log(item);
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleParticipants = useCallback(() => {
    postParticipants(userInfo.accessToken)
      .then(result => {
        console.log(result);
        const updatedUserInfo = { ...userInfo, car: true };
        localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));
        setUserInfo(updatedUserInfo);
        navigate('/event');
      })
      .catch(error => {
        console.error('WorldCup 참여 등록 API 통신 실패:', error);
      });
  }, [navigate]);
  return (
    <div className="modalContainer">
      <div className="nextModalContainer w-[600px] h-[480px]">
        <button onClick={close} className="absolute top-[29px] right-[29px]">
          <img src={modalClose} alt="Close" />
        </button>
        <div className="skyblue-box text-detail-3-semibold mb-400">
          자동차 아이템
        </div>
        <div className="text-center text-detail-1-bold">자동차를 얻었어요!</div>
        <img
          src={getCarModalImage}
          alt="getCarModalImage"
          className="absolute top-[100px] left-[63px] z-[103]"
        />
        <div className="absolute top-[385px] z-[105]">
          <BlueButton
            value="받기"
            onClickFunc={handleParticipants}
            styles="px-1300 py-400 text-detail-3-semibold"
          />
        </div>
      </div>
    </div>
  );
}

GetItemModal.propTypes = {
  close: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
};

export default GetItemModal;
