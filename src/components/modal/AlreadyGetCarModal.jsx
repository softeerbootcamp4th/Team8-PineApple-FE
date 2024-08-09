import React, { useContext, useCallback } from 'react';
import modalClose from '@/assets/icons/modalClose.svg';
import BlueButton from '@/components/buttons/BlueButton';
import { AuthContext } from '@/context/authContext';
import { useNavigate } from 'react-router-dom';
import SmallCarImage from '@/assets/images/smallCarImage.svg';
import SmallToolBoxImage from '@/assets/images/smallToolBoxImage.svg';
import PropTypes from 'prop-types';

function AlreadyGetCarModal({ close }) {
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleExit = useCallback(() => {
    navigate('/event');
  }, [navigate]);
  return (
    <div className="modalContainer">
      <div className="nextModalContainer w-[600px] h-[480px]">
        <button onClick={close} className="absolute top-[29px] right-[29px]">
          <img src={modalClose} alt="Close" />
        </button>
        <div className="skyblue-box text-detail-3-semibold mb-400">
          {userInfo.phoneNumber}
        </div>
        <div className="text-center text-detail-1-bold mb-[18px]">
          이미 아이템이 있어요
        </div>
        <div className="flex justify-center gap-1000">
          <div className="px-800 py-700 bg-gradient-cobaltblue-white-vertical rounded-[30px]">
            <div className="flex items-center justify-between mb-500">
              <p className="flex text-detail-3-semibold text-primary-blue">
                보유 차량 수
              </p>
              <div className="flex items-center justify-between">
                <div className="rounded-[4px] px-200 bg-neutral-white text-detail-1-bold text-primary-blue mr-200">
                  1
                </div>
                <p className="text-detail-3-semibold text-primary-blue">개</p>
              </div>
            </div>
            <img src={SmallCarImage} alt="SmallCarImage" />
          </div>
          <div className="px-800 py-700 bg-gradient-lightblue-white-vertical rounded-[30px]">
            <div className="flex items-center justify-between mb-500">
              <p className="flex text-detail-3-semibold text-primary-blue">
                보유 툴 수
              </p>
              <div className="flex items-center justify-between">
                <div className="rounded-[4px] px-200 bg-neutral-white text-detail-1-bold text-primary-blue mr-200">
                  {userInfo.toolBoxCnt}
                </div>
                <p className="text-detail-3-semibold text-primary-blue">개</p>
              </div>
            </div>
            <img src={SmallToolBoxImage} alt="SmallToolBoxImage" />
          </div>
        </div>

        <div className="set-center mt-[38px]">
          <BlueButton
            value="확인"
            onClickFunc={handleExit}
            styles="px-1300 py-400 text-detail-3-semibold"
          />
        </div>
      </div>
    </div>
  );
}

AlreadyGetCarModal.propTypes = {
  close: PropTypes.func.isRequired,
};

export default AlreadyGetCarModal;
